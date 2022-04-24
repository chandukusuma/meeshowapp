import React from 'react'
import Spagereducer from '../redux/Reducers/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "../components/Cart.css"
import Cartnav from './Cartnav'

function Cart() {

    const dispatch = useDispatch();

    const cart = useSelector((state) =>

        state.Spagereducer.Spage

    )

    console.log(cart)

    const navigate = useNavigate();

    return (
        <>
        <Cartnav />
        <div className='main'>

            {
                cart.map((e) => {

                    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                    var j = e.offer.split(" ").join(",");
                    let num = "";
                    let alpha = "";
                    let special = "";
                    for (let i = 0; i <= j.length; i++) {
                        if (!isNaN(String(j[i]))) {
                            num += j[i]
                        }
                        else if ((j[i] >= 'A' && j[i] <= 'Z') || (j[i] >= 'a' && j[i] <= 'z')) {
                            alpha += j[i]
                        }
                        else {
                            special += j[i]
                        }
                    }

                    var number = "";
                    for (var i = 0; i < num.length - 1; i++) {
                        number += num[i]
                    }

                    var p = parseInt(number, 10);
                    var q = parseInt(e.Price, 10);

                    if(e.length == 0){
                            return(
                                <h1 style={{
                                    "fontSize":"200px"
                                }}>Your cart is empty</h1>

                            )
                    }
                    else{
                        return (
                            <div className='mian-2'>
                                <div className='outer_ring'>
                                    <div className='inner-ring-1'>
                                        <div style={{ marginBottom: "2%" }}><strong style={{ fontSize: "18px" }}>Cart</strong> | <strong style={{ color: "grey", fontSize: "18px" }}>1 item</strong></div>
                                        <div className='first-div'>
                                            <div className='inner-one'>
    
                                                <div className='image-short'>
                                                    <img className='cart-img' src={e.image} />
                                                </div>
    
                                                <div className='flex-1'>
                                                    <p style={{ "fontWeight": "bold", width: "100%" }}>{e.Name}</p>
                                                    <p style={{ "marginLeft": "10%", color: "rgb(255, 0, 0)" }}>EDIT</p>
                                                </div>
                                                <div className='flex-2'>
                                                    <p style={{ width: "65%" }}>Size: {e.Size[0]}</p>
                                                    <p style={{ marginLeft: "2%" }}>Qty:1</p>
                                                </div>
                                                <div className='price-of-data'>
                                                    <p>₹{e.Price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='supplier'>
                                            <p>Supplier: LERIYA FASHION</p>
                                        </div>
    
                                    </div>
                                    <div className='vt-ln'></div>
                                    <div className='inner-ring-2'>
                                        <strong>Price Details</strong>
                                        <div>
                                            <p>Product Charges</p>
                                            <p style={{ "marginLeft": "50%" }}>₹{e.Price}</p>
                                        </div>
                                        <div>
                                            <p>Delivery Charges</p>
                                            <p style={{ "marginLeft": "50%" }}>+ ₹0</p>
                                        </div>
                                        <div>
                                            <p>COD Charges</p>
                                            <p style={{ "marginLeft": "57%" }}>+ ₹0</p>
                                        </div>
                                        <div>
                                            <p>1st Order Discount</p>
                                            <p style={{ "marginLeft": "45%" }}>- ₹{p}</p>
                                        </div>
                                        <div className='hr-ln'></div>
                                        <div>
                                            <p style={{"fontWeight":"bold"}}>Order Total</p>
                                            <p style={{ "marginLeft": "62%", fontWeight :"bold"}}>₹{q - p}</p>
                                        </div>
                                        <div className='box-change'>
                                            <p>Clicking on continue will not deduct any money</p>
                                        </div>
                                        <div className='div-to-btn'>
                                        <button className='button-to-add' onClick={() => {navigate("/Signup")}}>continue</button>
                                        </div>
                                        <div style={{width:"100%", paddingTop:"3%"}}>
                                            <img src="https://images.meesho.com/images/marketing/1588578650850.png" width="100%"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    
                })
            }

        </div>
        </>
    )
}

export default Cart