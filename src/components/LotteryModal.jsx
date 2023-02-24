import { useEffect, useState } from "react";
import Modal from 'react-modal';
import ModalCloseBtn from '../atom/ModalCloseBtn';
import Lottery from './Lottery';

Modal.setAppElement('#root');

const LotteryModal = ({ lotteryModalIsOpen, closeLotteryModal }) => {
  const [numLotteryPrize, setNumLotteryPrize] = useState(null);
  useEffect(() => {
    const rand = Math.floor(Math.random() * 100) + 1;
    if (1 <= rand && rand <= 6) {
      // 1等: 6%
      setNumLotteryPrize(1);
    } else if (7 <= rand && rand <= 20) {
      // 2等: 14%
      setNumLotteryPrize(2);
    } else if (21 <= rand && rand <= 40) {
      // 3等: 20%
      setNumLotteryPrize(3);
    } else if (41 <= rand && rand <= 70) {
      // 4等: 30%
      setNumLotteryPrize(4);
    } else if (71 <= rand && rand <= 100) {
      // 5等: 30%
      setNumLotteryPrize(5);
    }
  }, []);
  return (
    <Modal
      isOpen={lotteryModalIsOpen}
      onRequestClose={closeLotteryModal}
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
      <ModalCloseBtn closeQrReaderModal={closeLotteryModal} />
      <Lottery numLotteryPrize={numLotteryPrize} />
    </Modal>
  );
}
export default LotteryModal;