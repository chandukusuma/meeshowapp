import React, {useState} from 'react'
import "../components/Signup.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { Header } from './Header'

function Signup() {

    const navigate = useNavigate()

    const [form , setForm] = useState({
        mobile : ""
    })

    const handleChange = e =>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const change= () => {
        generateOtp()
        navigate("/")

    }

    const generateOtp = () => {
        var digits = "123456789";
        var length = 6;
        var otp = "";

        for(var i = 1; i < length; i++){
            var index = Math.floor(Math.random()*(digits.length));
            otp = otp + digits[index]
        }
        alert(otp)
    }

    return (
        <>
        <Header />
            <div className='body_data'>
                <div className='image'>
                    <img src="https://images.meesho.com/images/marketing/1648820929975.jpeg" />
                </div>
                <div className='heading'>
                    <h4>Sign Up To view Your Profile</h4>
                </div>
                <form className='form'>
                    <div style={{ "display": "flex", "marginBottom": "5%" }}>
                        <div>
                            <p style={{ "marginLeft": "35%", "color": "grey", "fontSize": "small", "marginTop": "4%" }}>Country</p>
                            <input type="Number" placeholder='IN +91' className='country-code' />
                        </div>
                        <input type="number" name='mobile' placeholder='Phone Number' className='number' value={form.mobile} onChange={handleChange}/>
                    </div>
                    <input type="submit" value='Send OTP' className='submit' onClick={change} />
                </form>
                <div className='terms'>
                    <p style={{ "fontSize": "x-small", "color": "black" }}>By continuing you agree with Meesho's </p>
                    <p style={{ "fontSize": "x-small", "color": "black", "marginTop": "-4%" }}>Terms & conditions and privacy policy</p>
                </div>

            </div>
        </>
    )
}

export default Signup