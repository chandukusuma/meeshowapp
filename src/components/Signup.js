import React, { useState } from 'react'
import "../components/Signup.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Header } from './Header'
import { useDispatch } from 'react-redux'
import {signupAction} from "../redux/Actions/Action"
import { SendToMobile, SubdirectoryArrowRightSharp } from '@mui/icons-material'


// function getValue() {
//     const storedValue = localStorage.getItem("form");

//     if(!storedValue) return {
//         mobile : ""
//     }
//     return JSON.parse(storedValue)
// }

function Signup() {

    const navigate = useNavigate()

    const [mobile, setMobile] = useState("");

    let errorsObj = {mobile: ""};
    const [errors, setErrors] = useState(errorsObj);


    // React.useEffect(() => {
    //     localStorage.setItem("form", JSON.stringify(mobile))
    // }, [mobile])


    const dispatch  = useDispatch()




    function onSginup(e) {
        e.preventDefault();

        let error = false;
        const errorObject = {...errorsObj};

        if(mobile === ""){
            errorObject.mobile = "mobile number is required";
            error = true;
        }

        setErrors(errorObject);

        if(!error){
            console.log("form submit")
            dispatch(signupAction({mobile:mobile, otp:Math.floor(1000 + Math.random() * 9000)}))

            const b = dispatch(signupAction({mobile:mobile, otp:Math.floor(1000 + Math.random() * 9000)}));

            alert(b.payload.otp)
            
            navigate("/otp")
        }
    }

    // const handleChange = e => {
    //     console.log(e.target.value);
    //     const { name, value } = e.target;
    //     setForm({
    //         ...form,
    //         [name]: value
    //     })
    // }

    // const change = (e) => {
    //     e.preventDefault();
    //     if (form === "") {
    //         return false
    //     }
    //     else {
    //         generateOtp()
    //         navigate("/")
    //     }

    // }

    const generateOtp = () => {
        var digits = "123456789";
        var length = 6;
        var otp = "";

        for (var i = 1; i < length; i++) {
            var index = Math.floor(Math.random() * (digits.length));
            otp = otp + digits[index]
        }
        alert(otp)
    }

    return (
        <>
            <Header />
            <div className='extra-to'></div>
            <div className='body_data'>
                <div className='image'>
                    <img src="https://images.meesho.com/images/marketing/1648820929975.jpeg" />
                </div>
                <div className='heading'>
                    <h4>Sign Up To view Your Profile</h4>
                </div>
                <form className='form' onSubmit={onSginup}>
                    <div style={{ "display": "flex", "marginBottom": "5%" }}>
                        <div>
                            <p style={{ "marginLeft": "35%", "color": "grey", "fontSize": "small", "marginTop": "4%" }}>Country</p>
                            <input type="Number" placeholder='IN +91' className='country-code' />
                        </div>
                        <input type="number" name='mobile' placeholder='Phone Number' className='number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    {errors.mobile && <div style={{"marginLeft":"10%", color: "red"}}>{errors.mobile}</div>}
                    <input type="submit" value='Send OTP' className='submit'/>
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