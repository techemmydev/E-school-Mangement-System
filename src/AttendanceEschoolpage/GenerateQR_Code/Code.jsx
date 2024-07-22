import React from "react";
import QRCode from "react-qr-code";

const QrCodeComponent = ({ value, size = 150 }) => {
  return (
    <QRCode
      value={value} // Data to be encoded in the QR code
      size={size} // Size of the QR code in pixels (default: 256)
      level="H" // Error correction level (default: "H" for high)
    />
  );
};

export default QrCodeComponent;
