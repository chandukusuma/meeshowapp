import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container style={{ "height": "55px" }}>
                <Navbar.Brand href="#home" style={{ "fontSize": "30px" }}>meesho</Navbar.Brand>
                <input id='search-input' type="search" placeholder='Try Saree, Kurti or search by Product code' style={{ "width": "30%", "padding": "15px", "marginRight": "25%", "borderRadius":"5px", "borderColor":"lightGrey" }}></input>
                <Nav className="me-auto">
                    <Nav.Link>
                        <i class="fa-light fa-mobile" style={{"color":"black", "paddingTop":"25px", "marginRight":"1.5rem"}}>Download App</i>
                    </Nav.Link>
                    <Nav.Link href="#features" style={{"color":"black"}}>
                        <p style={{"fontSize":"medium" , "paddingTop":"20px" , "marginRight":"1.5rem"}}>Become A Supplier</p>
                    </Nav.Link>
                    <Nav.Link href="#Signup">
                        <i class="fa-solid fa-user" style={{"paddingTop":"20px", "marginRight":"1.5rem"}}>
                            <p style={{ "fontSize": "x-small", "color":"grey", "marginTop":"5px"}}>Profile</p>
                        </i>
                    </Nav.Link>
                    <Nav.Link href='#cart'>
                        <i class="fa-solid fa-cart-shopping" style={{"paddingTop":"20px"}}>
                            <p style={{ "fontSize": "x-small", "color":"grey", "marginTop":"5px" }}>Cart</p>
                        </i>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
