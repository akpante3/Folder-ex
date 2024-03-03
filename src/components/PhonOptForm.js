
import { useState } from "react";
import "../App.css";
import OtpInput from "./OtpInput";



function PhoneOtpForm({ data }) {
  const [phoneNumber, setPhoneNumber] = useState(0)

  const [showOtpInput, setshowOtpInput] = useState(false)

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }
  const handlePhoneSubmit = (event) => {
     event.preventDefault()
    //  phone validation
    const regex = /[^0-9]/g
    if(phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("invalid Phone Number")
      return
    }

    setshowOtpInput(true)
  }

  const onOtpSubmit = (otp) => {
    console.log('login Successful', otp)
  }

  return (<div>
    {!showOtpInput ? (
    <form onSubmit={handlePhoneSubmit}>
    <input
     type="text"
     value={phoneNumber}
     onChange={handlePhoneNumber}
     placeholder="Enter Phone Number"
    />

    <button type="submit"> submit</button>
  </form>
    ): (
      <div>
        <p>Enter otp sent to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
      </div>
    )

    }

  </div>);
}

export default PhoneOtpForm;