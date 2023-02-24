import { useEffect, useState } from 'react';
import Rellax from 'rellax';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './App.css';

const App = () => {
  // 読み取られたQRコードの文字列
  const [qrResult, setQrResult] = useState("");
  // 各スタンプが押されているかの状態
  const [stamps, setStamps] = useState({
    stampZangeki3: false,
    stampHololens2: false,
    stampToio: false,
    stampAmidadekororin: false,
  });
  // 押されたスタンプの数
  const [numStamped, setNumStamped] = useState(0);
  const numQuotaClear = 3;

  // 読み取られたQRコードがスタンプを押せるか判断し、有効だったらスタンプを押す。
  const checkQrResultCanStamp = () => {
    // ここにtryをいれたい→無効なURLだった時の対処
    const qrQueries = qrResult.split('&');
    const [gameId, gameName] = qrQueries.map((query) => {return query.split('=')[1]});
    if (gameId === '11023' && gameName === 'zangeki3') {
      setStamps((prevStamps) => {
        return {
          ...prevStamps,
          stampZangeki3: true,
        }
      });
    }
    else if (gameId === '54072' && gameName === 'hololens2') {
      setStamps((prevStamps) => {
        return {
          ...prevStamps,
          stampHololens2: true,
        }
      });
    }
    else if (gameId === '33910' && gameName === 'toio') {
      setStamps((prevStamps) => {
        return {
          ...prevStamps,
          stampToio: true,
        }
      });
    }
    else if (gameId === '84656' && gameName === 'amidadekororin') {
      setStamps((prevStamps) => {
        return {
          ...prevStamps,
          stampAmidadekororin: true,
        }
      });
    }
  }
  // 押されているスタンプをカウントしStateにセット。
  const countStamped = () => {
    setNumStamped(Object.values(stamps).filter((value) => {return value === true}).length);
  };
  
  useEffect(() => {
    const rellax = new Rellax('.rellax');
  }, []);
  
  // qrResultの変更を検知して、スタンプが押せるか判断し、有効だったらスタンプを押す。
  useEffect(() => {
    checkQrResultCanStamp();
  }, [qrResult]);

  // stampsの変更を検知して、スタンプが押されている数をカウント
  useEffect(() => {
    countStamped();
  }, [stamps]);

  const QuotaClearAnimation = () => {
    const stampLottery = document.getElementById('stamp-lottery');
    // 1. ノルマクリアスタンプの位置までスクロールさせる。
    stampLottery.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    // 2. ノルマクリアスタンプへの道のグラデーションを解除し、スタンプ台を出現させる。
    const railToQuotaClear = document.getElementById('rail-to-quota-clear');
    railToQuotaClear.classList.remove('rail-not-quota-clear');
    // 3. ため気味にくじスタンプを押す。
    stampLottery.getElementsByTagName('img')[0].classList.add('stamped');
  }
  // numStampedの変更を検知して、
  useEffect(() => {
    // ノルマを達成した時だけノルマクリアのアニメーションを動かす
    if (numStamped === numQuotaClear) {
      setTimeout(QuotaClearAnimation, 1900);
    }
  }, [numStamped]);
  
  return (
    <div id="app">
      <Header numStamped={numStamped} />
      <Main stamps={stamps} numStamped={numStamped} numQuotaClear={numQuotaClear} setQrResult={setQrResult} />
      <Footer />
    </div>
  )
}
export default App;