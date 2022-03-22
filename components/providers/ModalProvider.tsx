import {
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { useScrollLock, useEscapeKeyClose } from '../utils/hooks';
import styles from '../../styles/ModalProvider.module.css';

export const MODAL_TYPES = {
  HIDDEN: 'HIDDEN',
  BOOK_ME_CALENDAR_MODAL: 'BOOK_ME_CALENDAR_MODAL',
  REVIEWS_MODAL: 'REVIEWS_MODAL',
};

type ModalContextValue = {
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue>({
  modalType: MODAL_TYPES.HIDDEN,
  openModal: () => {},
  closeModal: () => {},
});

export const useModalContext = (): ModalContextValue => {
  const context = useContext(ModalContext);
  return context;
};

export const ModalProvider = ({ children }: {
  children: ReactNode;
}) => {
  const [modalType, setModalType] = useState<string>(MODAL_TYPES.HIDDEN);
  const openModal = (type: string) => setModalType(type);
  const closeModal = () => setModalType(MODAL_TYPES.HIDDEN);
  useScrollLock(modalType !== MODAL_TYPES.HIDDEN);

  const value: ModalContextValue = {
    modalType,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

export const ModalContainer = ({ children }: {
  children: ReactNode;
}) => {
  const { closeModal } = useModalContext();
  useEscapeKeyClose(closeModal);
  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      {children}
    </div>
  );
};
