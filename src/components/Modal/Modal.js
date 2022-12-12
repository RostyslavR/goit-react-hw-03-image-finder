import Modal from 'react-modal';

const modalStyles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
