import { useEffect, useState } from 'react';

import StampMap from './components/StampMap';
import Tooltip from './atom/Tooltip';
import QrReaderModal from './components/QrReaderModal';
import LotteryModal from './components/LotteryModal';

const Main = ({ stamps, numStamped, numQuotaClear, setQrResult }) => {
  useEffect(() => {
    const headerHeight = document.getElementsByTagName('header')[0].clientHeight;
    const stampMapPaddingTop = 72;
    const stampMountHeight = document.getElementsByClassName('stamp-mount')[0].clientHeight;
    const RailHeight = document.getElementsByClassName('rail')[0].clientHeight - 12;
    const adjustValue = -41;

    const tooltips = document.getElementsByClassName('tooltip');
    for (let i = 0; i < tooltips.length; i++) {
      if (!tooltips[i].style.top) {
        let tooltipTop = headerHeight + stampMapPaddingTop + (i + 0) * (stampMountHeight + RailHeight) + adjustValue;
        tooltips[i].style.top = tooltipTop + 'px';
      }
    }
  }, []);
  // qrReaderModalが開いているかの状態
  const [qrReaderModalIsOpen, setQrReaderModalIsOpen] = useState(false);
  // qrReaderModalを開く
  const openQrReaderModal = () => {
    setQrReaderModalIsOpen(true);
  };
  // qrReaderModalを閉じる。
  const closeQrReaderModal = () => {    
    setQrReaderModalIsOpen(false);
  };
  // lotteryModalが開いているかの状態
  const [lotteryModalIsOpen, setLotteryModalIsOpen] = useState(false);
  // lotteryModalを開く
  const openLotteryModal = () => {
    setLotteryModalIsOpen(true);
  };
  // lotteryModalを閉じる。
  const closeLotteryModal = () => {    
    setLotteryModalIsOpen(false);
  };

  return (
    <main>
      <StampMap stamps={stamps} numStamped={numStamped} numQuotaClear={numQuotaClear} openQrReaderModal={openQrReaderModal} openLotteryModal={openLotteryModal} />
      <Tooltip align="left" isStamp={stamps.stampZangeki3} txt="斬撃Ⅲ＋をプレイしよう！" stampedTxt="" />
      <Tooltip align="right" isStamp={stamps.stampHololens2} txt="Hololens2をプレイしよう！" stampedTxt="" />
      <Tooltip align="left" isStamp={stamps.stampToio} txt="toioをプレイしよう！" stampedTxt="" />
      <Tooltip align="right" isStamp={stamps.stampAmidadekororin} txt="あみだdeころりんをプレイしよう！" stampedTxt="" />
      <Tooltip align="left" isStamp={numStamped >= numQuotaClear} txt="３つ以上スタンプを集めると..." stampedTxt="タップしてくじをひこう！" />
      <QrReaderModal qrReaderModalIsOpen={qrReaderModalIsOpen} closeQrReaderModal={closeQrReaderModal} setQrResult={setQrResult} />
      <LotteryModal lotteryModalIsOpen={lotteryModalIsOpen} closeLotteryModal={closeLotteryModal} />
    </main>
  );
}
export default Main;