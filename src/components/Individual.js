import React from 'react'
import Container from 'react-bootstrap/Container'

function Individual() {
    return (
        <div style={{ "width": "80%", "margin": "auto", "marginTop": "2%" }}>

            <div style={{ "display": "flex" }}>
                <div style={{ "width": "60%", "border": "1px solid grey", "marginLeft": "5rem" }}>
                    <div style={{ "width": "80%", "height": "400px", "marginLeft": "2.5rem" }}>
                        <img src="https://images.meesho.com/images/products/68727547/0gljd_512.jpg" width="90%" height="100%" style={{ "marginLeft": "1rem" }} alt="" />
                        <button style={{ "width": "100%", "backgroundColor": "pink", "borderStyle": "none", "borderRadius": "5px", "padding": "5px", "marginTop": "5%" }}>Add To Cart</button>
                    </div>
                </div>
                <Container style={{"border":"1px solid green", "marginLeft":"2%"}}>
                    <div style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <p>Jivika sarees</p>
                        <div style={{"display":"flex", "gap":"5px"}}>
                            <p>567</p>
                            <p>657</p>
                            <p>8% off</p>
                        </div>
                        <div style={{"display":"flex"}}>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" color="greenT2" iconsize="20" class="Icon-sc-1iwi4w1-0 jabcjO" style={{ "marginRight": "0.3rem", "marginTop": "-0.4rem" }}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z" fill="#06A759"></path>
                            </svg>
                            <p>50 discount on first order</p>
                        </div>
                    </div>
                    <div style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <h4>Select Size</h4>
                        <div>
                            <p>Free Size</p>
                        </div>
                    </div>
                    <div  style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <h4>Product Details</h4>
                        <p>Name : saree</p>
                    </div>
                    <div  style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <h4>Product Details</h4>
                        <p>Name : saree</p>
                    </div>
                    <div  style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <h4>Product Details</h4>
                        <p>Name : saree</p>
                    </div>
                    <div  style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <h4>Product Details</h4>
                        <p>Name : saree</p>
                    </div>
                    <div  style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <h4>Product Details</h4>
                        <p>Name : saree</p>
                    </div>
                    <div  style={{"border":"1px solid blue", "marginTop":"2%"}}>
                        <h4>Product Details</h4>
                        <p>Name : saree</p>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Individual