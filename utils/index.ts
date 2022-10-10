import { RcFile } from "antd/lib/upload";
import moment from "moment";
import get from "lodash/get";
import BigNumber from "bignumber.js";

import { useMobile } from "hooks/useWindowSize";

import {
  ORDERS,
  UNDEFINED,
  NFT_MEDIA,
  ZERO_VALUE,
  IMAGE_TYPE,
  ANTD_ORDERS,
  FILTER_FIELD,
  EDIT_USER_FIELD,
  MAX_LENGTH_PRICE,
  EMPTY_DEFAULT_TEXT,
  CREATE_COLLECTION_FIELD,
  UPLOAD_COLLECTION_STATUS,
  NFT_DEFAULT_CREATE_FIELD,
  EXTENSION_3D_SUPPORT_ARRAY,
  MAX_LENGTH_SHOW_DESCRIPTION,
} from "constants/common";
import LENGTH_CONSTANTS from "constants/length";

declare let window: any;

const { MIN_VALUE } = LENGTH_CONSTANTS;
const { LOAD } = UPLOAD_COLLECTION_STATUS;
const { COLLECTION_IDS, ID } = FILTER_FIELD;

export const DATE_FORMAT = "MMMM DD, YYYY  HH:mm:ss";

export const clearRequestParams = (params?: any) => {
  const newParams = {} as any;
  const cloneParams = { ...params };
  for (const field in cloneParams) {
    if (
      cloneParams?.[field] ||
      cloneParams?.[field] === 0 ||
      cloneParams?.[field] === false
    ) {
      newParams[field] = cloneParams?.[field];
    }
  }
  return newParams;
};

export const limitPercentage = (inputObj: any) => {
  const MAX_PERCENT = 100;
  const { value } = inputObj;
  if (Number(value) > MAX_PERCENT) {
    return false;
  }
  return true;
};

export const formatDate = (
  date: moment.MomentInput | any,
  type = DATE_FORMAT
) => {
  return date ? moment(date).format(type) : EMPTY_DEFAULT_TEXT;
};

export const getLocation = () => {
  return typeof window !== "undefined" ? window.location.href : "";
};

export const shortenAddress = (address: string, number = -4) => {
  if (address) {
    const first = address.slice(0, 6);
    const last = address.slice(number);
    return `${first}...${last}`;
  }
  return;
};

export const formatCurrency = (value: any) => {
  if (!value) {
    return ZERO_VALUE;
  }
  return new BigNumber(value).isLessThan(new BigNumber(MIN_VALUE))
    ? new BigNumber(MIN_VALUE).toFormat()
    : new BigNumber(value).toFormat();
};

export const countWords = (params: string): boolean => {
  return params.length > MAX_LENGTH_SHOW_DESCRIPTION;
};

export const countRows = (value: string): any => {
  return value && value.split("\n").length;
};

export const getIconByMediaType = (typeList: any, objectIcon: any) => {
  const listIcon = [] as any;
  for (const typeIcon of typeList) {
    for (const icon of objectIcon) {
      if (typeIcon?.type === icon?.type) {
        listIcon.push({ ...icon, value: typeIcon?.value });
      }
    }
  }
  return listIcon;
};

export const getNumberValue = (value?: number) => {
  return value ?? ZERO_VALUE;
};

export const convertPriceBigNumber = (value: any, coinDecimal = 18) => {
  BigNumber.config({
    EXPONENTIAL_AT: 100,
  });
  return new BigNumber(value).multipliedBy(
    new BigNumber(Math.pow(10, coinDecimal))
  );
};

export const isLessThanOfTenPowerByCap = (value: any, decimal: 8) => {
  BigNumber.config({
    EXPONENTIAL_AT: 100,
  });
  return (
    value > 0 && new BigNumber(value).lt(new BigNumber(Math.pow(10, decimal)))
  );
};

export const multipleTwoBigNumber = (first: any, second: any) => {
  if (!first || !second) {
    return 0;
  }
  BigNumber.config({
    EXPONENTIAL_AT: 100,
  });
  return new BigNumber(first).multipliedBy(new BigNumber(second)).toString();
};

export const convertToNumber = (value: any) => {
  return value ? new BigNumber(value).toNumber() : ZERO_VALUE;
};

export const limitMaxLengthNumber =
  (maxLength: number = MAX_LENGTH_PRICE) =>
  (inputObj: any) => {
    const { value } = inputObj;
    const integerPath = (value || "").split(".")[0];
    return integerPath.length <= maxLength;
  };

export const getImageAttributes = (attributes: any, field: string) =>
  attributes?.[field]?.imgUrl;

export const getRowKey = (row: any) => row?._id;

export const setOrderSorter = (order: string | null | undefined) => {
  const newOrder =
    (order === ANTD_ORDERS.ASCEND && ORDERS.ASC) ||
    (order === ANTD_ORDERS.DESCEND && ORDERS.DESC) ||
    null;
  return newOrder;
};

export const getStartDateTimestamp = (value: string) => {
  if (!value) {
    return;
  }
  return moment(value).clone().startOf("days").toISOString();
};

export const getEndDateTimestamp = (value: string) => {
  if (!value) {
    return;
  }
  return moment(value).clone().endOf("days").toISOString();
};

export const nFormatter = (num: any, digits: any = 2) => {
  if (!num) {
    return 0;
  }
  if (new BigNumber(num).isLessThanOrEqualTo(MIN_VALUE)) {
    return new BigNumber(MIN_VALUE).toFormat();
  }
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : Number(num).toFixed(2);
};

export const sliceArray = (array: any, totalSlice: number) => {
  return array.slice(0, totalSlice);
};

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener(LOAD, () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const get3DFileType = (fileName: string) => {
  const extension =
    fileName?.slice(fileName?.lastIndexOf(".") + 1)?.toLowerCase() || "";
  const type = `3d/${extension}`;
  if (EXTENSION_3D_SUPPORT_ARRAY.includes(type)) {
    return type;
  }
  return "";
};

export const getFullFormatedNFT = (value: any) => {
  return (
    value?.fileList?.[0]?.type ||
    get3DFileType(value?.fileList?.[0]?.name) ||
    IMAGE_TYPE
  );
};

export const getFormattedNFT = (value: any) => {
  const fullFormat = getFullFormatedNFT(value);
  return fullFormat?.split("/")[0] || NFT_MEDIA.IMAGE;
};

export const getOriginFile = (file: any) =>
  get(file, ["fileList", 0, "originFileObj"]);

export const getFieldValues = (
  values: any,
  objectField: any = NFT_DEFAULT_CREATE_FIELD
) => {
  return Object.values(objectField).reduce((acc: any, field: string | any) => {
    if (
      field === NFT_DEFAULT_CREATE_FIELD.FILE ||
      field === NFT_DEFAULT_CREATE_FIELD.FILE_PREVIEW
    ) {
      acc[field] = values?.[field]?.previewContent;
    } else if (
      [
        NFT_DEFAULT_CREATE_FIELD.TOTAL_SUPPLY,
        NFT_DEFAULT_CREATE_FIELD.ROYALTYFEE,
      ].includes(field)
    ) {
      acc[field] = values?.[field]?.toString();
    } else {
      acc[field] = values?.[field];
    }
    return acc;
  }, {});
};

export const checkValueNftChange = (preVal: object, newVal: object) => {
  const newPrevNft = { ...preVal };

  // prev
  const prevNft = getFieldValues(
    newPrevNft,
    NFT_DEFAULT_CREATE_FIELD
  ) as object;

  // new
  const newNft = getFieldValues(newVal, NFT_DEFAULT_CREATE_FIELD) as object;

  return JSON.stringify(prevNft) !== JSON.stringify(newNft);
};

export const getFieldCollectionValues = (
  values: any,
  objectField: any = CREATE_COLLECTION_FIELD
) => {
  return Object.values(objectField).reduce((acc: any, field: string | any) => {
    if (
      field === CREATE_COLLECTION_FIELD.LOGO ||
      field === CREATE_COLLECTION_FIELD.BANNER
    ) {
      acc[field] = values?.[field]?.previewContent;
    } else {
      acc[field] = values?.[field];
    }
    return acc;
  }, {});
};

export const checkValueCollectionChange = (
  preVal: object,
  newVal: object,
  isEditing?: boolean
) => {
  const newPrevCollection = { ...preVal };

  // prev
  const prevCollection = getFieldCollectionValues(
    newPrevCollection,
    CREATE_COLLECTION_FIELD
  ) as object;

  // new
  const newCollection = getFieldCollectionValues(
    newVal,
    CREATE_COLLECTION_FIELD
  ) as object;

  return JSON.stringify(prevCollection) !== JSON.stringify(newCollection);
};

const getFieldUserProfileValues = (
  values: any,
  objectField: any = EDIT_USER_FIELD
) => {
  return Object.values(objectField).reduce((acc: any, field: string | any) => {
    acc[field] = values?.[field];
    return acc;
  }, {});
};

export const checkValueUserProfileChange = (preVal: object, newVal: object) => {
  const newPreUserProfile = { ...preVal };

  // prev
  const preUserProfile = getFieldUserProfileValues(
    newPreUserProfile,
    EDIT_USER_FIELD
  ) as object;

  // new
  const newUserProfile = getFieldUserProfileValues(
    newVal,
    EDIT_USER_FIELD
  ) as object;

  return JSON.stringify(preUserProfile) !== JSON.stringify(newUserProfile);
};

export const removeTrailingZeros = (num: any, fixed: any = 2) => {
  const numberReg = new RegExp(`^-?\\d+(?:.\\d{0,${fixed}})?`);
  return num
    ? num
        .toString()
        .match(numberReg)[0]
        .replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1")
    : ZERO_VALUE;
};

export const smoothScrollToTop = (ref: any) => {
  if (typeof window !== UNDEFINED) {
    window.scrollTo({
      top: ref?.current?.offsetTop - 104,
      behavior: "smooth",
    });
  }
};
