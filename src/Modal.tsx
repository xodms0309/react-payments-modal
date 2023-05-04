import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import GlobalStyle from './GlobalStyle';
import * as Styled from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onCloseModal?: () => void;
  modalLocation?: 'center' | 'bottom';
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { isOpen, onCloseModal, modalLocation, children, ...rest } = props;
  return createPortal(
    isOpen && (
      <>
        <GlobalStyle />
        <Styled.BackDrop onClick={onCloseModal} />
        <Styled.Wrapper modalLocation={modalLocation ?? 'center'}>
          {children}
        </Styled.Wrapper>
      </>
    ),
    document.body
  );
};

export default Modal;
