import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {useNavigate}  from 'react-router-dom'
import "../components/Header.css"


export const Header = () => {

     const navigate = useNavigate();

    return (

        <Navbar bg="light" variant="light">

            <Container style={{ "height": "55px" }}>

                <Navbar.Brand href="#home" style={{ "fontSize": "38px", "fontWeight": "bold", color: "rgba(245, 40, 145, 0.8)" }} onClick={() => {navigate("/")}}>meesho</Navbar.Brand>
                <input id='search-input' type="search" placeholder='Try Saree, Kurti or search by Product code' style={{ "width": "30%", "padding": "15px", "marginRight": "25%", "borderRadius": "5px", "borderColor": "lightGrey" }}></input>
                <Nav className="me-auto">
                    <Nav.Link>
                        <div style={{ "marginRight": "1%", marginLeft: "-1%" }}>

                            <i class="fa-light fa-mobile" style={{ "color": "black", "paddingTop": "25px", "marginLeft": "-5.5rem", "display": "flex" }}>                        </i>
                            <p className='dropdown'>Download App</p>
                            <div className='hover_dropdown'>
                                <h5>Download from</h5>
                                <a href='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'>
                                    <img className='imgset' src="https://images.meesho.com/images/pow/playstore-icon-big.png" />
                                </a>
                                <a href='https://apps.apple.com/us/app/meesho/id1457958492'>
                                    <img className='imgset' src="https://images.meesho.com/images/pow/appstore-icon-big.png" />
                                </a>
                            </div>
                        </div>
                    </Nav.Link>
                    <div className='vertical_line'></div>
                    <Nav.Link href="#features" style={{ "color": "black" }}>
                        <p style={{ "fontSize": "16px", "paddingTop": "20px", "marginRight": "1rem", marginLeft: "1rem" }}>Become A Supplier</p>
                    </Nav.Link>
                    <div className='vertical_line'></div>
                    <Nav.Link href="#Signup">
                        <a href='/Signup'>
                        <i class="fa-solid fa-user" style={{ "paddingTop": "20px", "marginRight": "1.9rem", "marginLeft": "2rem", "fontSize": "20px" }}>
                            <p className='dropdown_two' style={{ "fontSize": "x-small", "color": "black", "marginTop": "5px", marginLeft: "-25%" }}>Profile
                            <div className='hover_dropdown_two'>
                                <p style={{"fontFamily":"-moz-initial", "fontSize":"16px"}}>Hello user</p>
                                <p style={{"fontFamily":"-moz-initial", "fontSize":"12px"}}>To access your meesho account</p>
                                <button className='hover_btn'>Sign Up</button>
                                <div className='hr-line'></div>
                                <div className='order_bag'>
                                    <i class="fa-solid fa-bag-shopping" style={{"marginRight":"3%"}}>My orders</i>
                                </div>
                            </div>
                            </p>
                        </i>
                        </a>
                    </Nav.Link>
                    <Nav.Link onClick={() => {navigate("/Cart")}}>
                        <i class="fa-solid fa-cart-shopping bg-light" style={{ "paddingTop": "20px", "fontSize": "20px" }}>
                            <p style={{ "fontSize": "x-small", "color": "black", "marginTop": "5px", fontWeight: "normal" }}>Cart</p>
                        </i>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    )
}
