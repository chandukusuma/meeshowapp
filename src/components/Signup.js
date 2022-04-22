import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import "../components/Signup.css"

function Signup() {
  return (
    <>
        
        <Navbar bg="light" variant="light">

            <Container style={{ "height": "55px" }}>

                <Navbar.Brand href="#home" style={{ "fontSize": "38px", "fontWeight": "bold", color: "rgba(245, 40, 145, 0.8)" }}>meesho</Navbar.Brand>
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
                    <div className='vertical_line' style={{"marginTop":"10%"}}></div>
                    <Nav.Link href="#features" style={{ "color": "black" }}>
                        <p style={{ "fontSize": "16px", "paddingTop": "20px", "marginRight": "1rem", marginLeft: "1rem" }}>Become A Supplier</p>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className='body_data'>
            <div className='image'>
                <img src="https://images.meesho.com/images/marketing/1648820929975.jpeg" width="98%" borderRadius="3%"/>
            </div>
            <div>
                <h4>Sign Up To view Your Profile</h4>
            </div>
            <form>
                
            </form>
        </div>
    </>
  )
}

export default Signup