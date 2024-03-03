import { useState } from "react";
import "../App.css";

function OtpInput({ length = 4, onOtpSubmit = () => {} }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleOtpChange = () => {};
  const handleClick = () => {};
  const handleKeyDown = () => {};
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            onChange={() => {}}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otp-input"
          />
        );
      })}
    </div>
  );
}

export default OtpInput;
