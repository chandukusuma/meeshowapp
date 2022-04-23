import React from 'react'
import "../components/Signup.css"

function Signup() {




    return (
        <>
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
                        <input type="number" placeholder='Phone Number' className='number' />
                    </div>
                    <input type="submit" value='Send OTP' className='submit' />
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