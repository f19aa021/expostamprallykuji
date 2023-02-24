const Lottery = ({ numLotteryPrize }) => {
  return (
    <div className="lottery">
      <div className="lottery-title">おめでとう！</div>
      <div className="lottery-prize">{numLotteryPrize}等</div>
      <div className="lottery-explain-txt">かかりの人に<br/>このがめんを見せて<br/>景品とこうかんしよう！</div>
    </div>
  );
}
export default Lottery;