import Modal from 'react-modal';
import ModalCloseBtn from '../atom/ModalCloseBtn';
import QrReader from './QrReader';

Modal.setAppElement('#root');

const QrReaderModal = ({ qrReaderModalIsOpen, closeQrReaderModal, setQrResult }) => {
  return (
    <Modal
      isOpen={qrReaderModalIsOpen}
      onRequestClose={closeQrReaderModal}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-after",
        beforeClose: "overlay-before"
      }}
      className={{
        base: "content-base",
        afterOpen: "content-after",
        beforeClose: "content-before"
      }}
      closeTimeoutMS={600}
    >
      <ModalCloseBtn closeQrReaderModal={closeQrReaderModal} />
      <QrReader closeQrReaderModal={closeQrReaderModal} setQrResult={setQrResult} />
    </Modal>
  );
}
export default QrReaderModal;