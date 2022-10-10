import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';

export const useModal = (
  defaultState = false,
): {
  visible: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
} => {
  const [visible, setVisible] = useState(defaultState);
  const onOpenModal = () => setVisible(true);

  const onCloseModal = () => setVisible(false);

  return {
    visible,
    onOpenModal,
    onCloseModal,
    setVisible,
  };
};

export const useWarnIfUnsavedChanges = (unsavedChanges: boolean) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const message = 'You have unsaved change. Do you want to leave?';

  useEffect(() => {
    const showModal = () => {
      router.replace(router, router.asPath);
      history.pushState(null, '/', null);
      setIsShow(true);
    };

    const beforeHistoryChange = (url?: string) => {
      if (!isShow) {
        if (router.asPath !== url && unsavedChanges && !confirm(message)) {
          router.events.emit('routeChangeError');
          router.replace(router, router.asPath);
          throw 'Abort route change. Please ignore this error.';
        }
      }
    };

    router.beforePopState((): any => {
      if (unsavedChanges) {
        showModal();
        return false;
      } else {
        return true;
      }
    });

    const beforeunload = (e: any) => {
      if (!isShow) {
        e.returnValue = message;
        e.preventDefault();
        return message;
      }
    };

    if (unsavedChanges) {
      window.addEventListener('beforeunload', beforeunload);
      Router.events.on('beforeHistoryChange', beforeHistoryChange);
    }

    return () => {
      window.removeEventListener('beforeunload', beforeunload);
      Router.events.off('beforeHistoryChange', beforeHistoryChange);
    };
  }, [unsavedChanges, isShow]);

  return { isShow, setIsShow };
};

export const useWarnModalPage = (url: string) => {
  const {
    visible: visibleModalUnsaved,
    onOpenModal: onOpenModalUnsaved,
    onCloseModal: onCloseModalUnsaved,
  } = useModal();

  const router = useRouter();
  const [valueChange, setValueChange] = useState(false);
  const [clickBackBtn, setClickBackBtn] = useState(false);
  const [clickSaveBtn, setClickSaveBtn] = useState(false);
  const [clickUpdateBtn, setClickUpdateBtn] = useState(false);
  const [clickDiscardBtn, setClickDiscardBtn] = useState(false);
  const { isShow, setIsShow } = useWarnIfUnsavedChanges(valueChange);

  useEffect(() => {
    if (clickBackBtn || isShow || clickDiscardBtn) {
      if (valueChange) {
        onOpenModalUnsaved();
      } else {
        router.push(url);
      }
    }
  }, [isShow, clickBackBtn, clickDiscardBtn]);

  const onBackClick = () => {
    setClickBackBtn(true);
  };

  const onDiscard = () => {
    setClickDiscardBtn(true);
  };

  const afterCloseModalUnsaved = () => {
    setIsShow(false);
    setClickBackBtn(false);
    setClickDiscardBtn(false);
  };

  return {
    visibleModalUnsaved,
    onOpenModalUnsaved,
    onCloseModalUnsaved,
    onBackClick,
    onDiscard,
    afterCloseModalUnsaved,
    setClickSaveBtn,
    setClickUpdateBtn,
    setValueChange,
    valueChange,
    clickBackBtn,
    clickDiscardBtn,
    clickSaveBtn,
    clickUpdateBtn,
  };
};
