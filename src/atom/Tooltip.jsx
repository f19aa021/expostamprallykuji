const Tooltip = ({ align, isStamp, txt, stampedTxt }) => {
  let alignClassName = '';
  if (align === 'left') {
    alignClassName = ' align-left';
  } else if (align === 'right') {
    alignClassName = ' align-right';
  }
  if (stampedTxt === '') {
    stampedTxt = 'スタンプゲットしたよ';
  }
  return (
    <div className={`tooltip${alignClassName} rellax`} data-rellax-speed="1">{(isStamp) ? stampedTxt : txt}</div>
  );
}
export default Tooltip;