import ImgStampZangeki3 from '../assets/stamp_zangeki3.png';
import ImgStampHololens2 from '../assets/stamp_hololens2.png';
import ImgStampToio from '../assets/stamp_toio.png';
import ImgStampAmidadekororin from '../assets/stamp_amidadekororin.png';
import ImgStampLottery from '../assets/stamp_lottery.png';
import ImgRail from '../assets/rail.svg';

const StampMap = ({ stamps, numStamped, numQuotaClear, openQrReaderModal, openLotteryModal }) => {
  return (
    <div id="stamp-map" className='rellax' data-rellax-speed="3">
      <div id="stamp-zangeki3" className="stamp-mount align-left" onClick={openQrReaderModal}>
        <img className={`stamp${(stamps.stampZangeki3) ? ' stamped' : ''}`} src={ImgStampZangeki3} alt="stamp of zangeki3" />
      </div>
      <img src={ImgRail} className="rail align-left" />
      <div id="stamp-hololens2" className="stamp-mount align-right" onClick={openQrReaderModal}>
        <img className={`stamp${(stamps.stampHololens2) ? ' stamped' : ''}`} src={ImgStampHololens2} alt="stamp of hololens2" />
      </div>
      <img src={ImgRail} className="rail align-right" />
      <div id="stamp-toio" className="stamp-mount align-left" onClick={openQrReaderModal}>
        <img className={`stamp${(stamps.stampToio) ? ' stamped' : ''}`} src={ImgStampToio} alt="stamp of toio" />
      </div>
      <img src={ImgRail} className="rail align-left" />
      <div id="stamp-amidadekororin" className="stamp-mount align-right" onClick={openQrReaderModal}>
        <img className={`stamp${(stamps.stampAmidadekororin) ? ' stamped' : ''}`} src={ImgStampAmidadekororin} alt="stamp of amidadekororin" />
      </div>
      <div id="rail-to-quota-clear" className="rail-not-quota-clear" >
        <img src={ImgRail} className="rail align-right" />
      </div>
      {(numStamped >= numQuotaClear) ?
        <div id="stamp-lottery" className="stamp-mount stamp-mount-quota-clear align-left" onClick={openLotteryModal}>
          <img className="stamp" src={ImgStampLottery} alt="stamp of lottery" />
        </div> :
        <div className="stamp-mount stamp-mount-none"></div>
      }
    </div>
  );
}
export default StampMap;