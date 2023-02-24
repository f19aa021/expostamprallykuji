import { RiVipCrown2Fill } from 'react-icons/ri';

const Header = ({ numStamped }) => {
  return (
    <header>
      <div id="logo">
        <a>
          <img id="logo-icon" src="/expostamprallykuji/logo_icon.svg" alt="logo icon" />
          <div id="logo-txt">CKC & HIDD<br/>スタンプラリーくじ</div>
        </a>
      </div>
      <div className="stat-stamped">
        <RiVipCrown2Fill size={'1.8em'} color={'gold'} />
        <div className="num-stamped">{numStamped}</div>
      </div>
    </header>
  );
}
export default Header;