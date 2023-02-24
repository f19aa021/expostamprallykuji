import { IoClose } from 'react-icons/io5';

const ModalCloseBtn = ({ closeQrReaderModal }) => {
  return (
    <div className="modal-close-btn" onClick={closeQrReaderModal}>
      <div className="modal-close-txt">とじる</div>
      <div className="modal-close-circle">
        <IoClose size={'32px'} color={'#f2f2f2'} style={{transform: 'translateY(2.9px)'}} />
      </div>
    </div>
  );
}
export default ModalCloseBtn;