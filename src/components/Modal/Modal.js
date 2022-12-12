import Modal from 'react-modal';

const modalStyles = {
  content: {
    padding: '0',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      {children}
    </Modal>
  );
};
