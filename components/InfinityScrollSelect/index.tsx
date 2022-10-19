import React, { useState, useEffect, FC } from "react";
import { FieldInputProps, FormikProps } from "formik";
// import { useTranslation } from "next-i18next";
import { Select } from "antd";
import { uniqBy } from "lodash";

import { useDebounce } from "hooks/useDebounce";

import TIME_CONSTANTS from "constants/time";
import LENGTH_CONSTANTS from "constants/length";

const { Option } = Select;

const InfinityScrollSelect: FC<{
  fetchData?: any;
  renderOption?: any;
  limit?: number;
  value?: any;
  field?: FieldInputProps<any>;
  props?: any;
  form?: FormikProps<any>;
  className?: string;
  onChange?: any;
  setIsSearch?: any;
  emptyText?: string;
}> = ({
  fetchData,
  renderOption: renderOptionProps,
  limit = 10,
  value: valueProps,
  field,
  form,
  className,
  onChange,
  setIsSearch,
  emptyText,
  ...props
}) => {
  // const { t } = useTranslation();
  const [dataShow, setDataShow] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState(valueProps);
  const debouncedSearchVal = useDebounce(searchValue, TIME_CONSTANTS.DEBOUNCE_SEARCH_TIME);

  useEffect(() => {
    setValue(valueProps);
  }, [valueProps]);

  const fetchMoreData = async (currentSearchVal?: string, isFetchFromStart?: boolean) => {
    if (!isFetchFromStart) {
      // continue fetch when scroll
      const res = await fetchData({
        limit,
        offset,
        searchValue: currentSearchVal,
      });
      if (res?.meta?.code === 0) {
        const data = res?.data?.[0]?.data;
        const total = res?.data?.[0]?.metadata?.[0]?.total;
        setDataShow(uniqBy([...dataShow, ...(data || [])], "_id"));
        setOffset(offset + 1);
        setTotal(total);
      }
      return;
    }

    // fetch from start when change search value
    const res = await fetchData({
      limit,
      offset: 1,
      searchValue: currentSearchVal,
    });
    if (res?.meta?.code === 0) {
      const data = res?.data?.[0]?.data;
      const total = res?.data?.[0]?.metadata?.[0]?.total;
      setDataShow(uniqBy([...(data || [])], "_id"));
      setOffset(1);
      setTotal(total);
    }
  };

  useEffect(() => {
    fetchMoreData("");
  }, []);

  useEffect(
    () => {
      fetchMoreData(debouncedSearchVal, true);
    },
    [debouncedSearchVal] // Only call effect if debounced search term changes
  );

  const onSearch = (value: any) => {
    setIsSearch && setIsSearch(true);
    if (value?.length > LENGTH_CONSTANTS.MAX_LENGTH_INPUT) {
      return;
    }
    setSearchValue(value);
  };

  const handleScroll = (e: any) => {
    const target = e.target;
    const clientHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;
    const isNearTheBottom = clientHeight + scrollTop >= (3 / 5) * scrollHeight;
    if (total && dataShow.length >= total) {
      // fetch max data
      return;
    }
    if (isNearTheBottom) {
      fetchMoreData(debouncedSearchVal);
    }
  };

  const renderOption = ({ item, index }: { item: any; index: number }) => {
    if (renderOptionProps) {
      return renderOptionProps({ item, index });
    }
    return (
      <Option key={item._id} value={item._id} name={item.name}>
        {item.name}
      </Option>
    );
  };

  const filterOption = () => {
    return true;
  };

  const handleChange = (selectValue: any) => {
    if (!onChange) {
      if (field?.name && form) {
        form.setFieldValue(
          field.name,
          dataShow.find((item) => item._id === selectValue)
        );
      } else {
        setValue(selectValue);
      }
    } else {
      onChange({
        item: dataShow.find((item) => item._id === selectValue),
        form,
        field,
      });
    }
  };

  return (
    <div className={className}>
      <Select
        {...field}
        onPopupScroll={handleScroll}
        showSearch
        filterOption={filterOption}
        onSearch={onSearch}
        searchValue={searchValue}
        value={value?._id || value}
        onChange={handleChange}
        optionLabelProp="name"
        dropdownMatchSelectWidth
        notFoundContent={
          <div className="ant-empty-text empty-text-select">
            <img
              // src={NodataIcon}
              alt="No Data"
            />
            <p>{emptyText ? emptyText : "No Data"}</p>
          </div>
        }
        {...props}
      >
        {dataShow.map((item, index) => renderOption({ item, index }))}
      </Select>
    </div>
  );
};

export default InfinityScrollSelect;
