import React, { useState } from 'react'
import { signUpreducer } from '../redux/Reducers/reducer'
import { useSelector } from 'react-redux';
import "../components/otp.css"
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';




function Otp() {

    const sign = useSelector((state) => state.signUpreducer.state.data.otp);
    const mobileNum = useSelector((state) => state.signUpreducer.state.data.mobile)

    const [otp, setOtp] = useState("");

    const navigate = useNavigate()


    function onChange(e) {


        setOtp(e.target.value);

        console.log(otp, sign)


    }

    function verify(){
       

        if(otp == sign){
            navigate("/Cart")
        }
        else{
            alert("INVALID OTP")
        }

    }

    return (
        <div>
            <Header />
            <div className='extra-to'></div>
            <div className='body_data'>
                <div className='image'>
                    <img src="https://images.meesho.com/images/marketing/1648820929975.jpeg" />
                </div>
                <div className='heading'>
                    <h4>Enter OTP sent to {mobileNum}</h4>
                    <h6>CHANGE NUMBER</h6>
                </div>
                <div className='form-div'>
                    <input type="number" onChange={onChange} className="input-btn" />
                    
                </div>
                <div className='resend-otp'>
                    <h5>RESEND OTP</h5>
                </div>

                <div className='submit-btn'>
                    <input type="submit" value="Verify" onClick={verify}/>
                </div>

                <div className='terms'>
                    <p style={{ "fontSize": "x-small", "color": "black" }}>By continuing you agree with Meesho's </p>
                    <p style={{ "fontSize": "x-small", "color": "black", "marginTop": "-4%" }}>Terms & conditions and privacy policy</p>
                </div>

            </div>

        </div>
    )
}

export default Otp