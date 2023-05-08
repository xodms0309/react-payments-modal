import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  return { isModalOpen, onOpenModal, onCloseModal };
};

export default useModal;
