import { useZxing } from "react-zxing";

const QrReader = ({ closeQrReaderModal, setQrResult }) => {
  const { ref } = useZxing({
    // 不確定だがおそらくQRコードを読み取った後の動作
    onResult(result) {
      setQrResult(result.getText());
      closeQrReaderModal();  
    },
  });

  return (
    <div className="qr-reader">
      <div className="qr-reader-explain-txt">QRコードをよみとってね</div>
      <video id="qr-video" ref={ref} />
    </div>
  );
}
export default QrReader;