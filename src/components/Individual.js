import React from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from "../redux/Actions/Action"
import { Individualreducer } from '../redux/Reducers/reducer'
import { SINGLE } from '../redux/Actions/Action';
import "../components/Individual.css"
import { Navigate, useNavigate } from 'react-router-dom'
import { Header } from './Header'
import Hovernav from './HomePage/Hovernav'

function Individual() {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const Singleitem = useSelector((state) => state.Individualreducer.Indpage);

    const share = (e) => {
        dispatch(SINGLE(e))
    }

    return (
        <>
    <Header />
      <Hovernav />
        <div style={{"backgroundColor":"white", "marginBlock":"2%"}}>

            {
                Singleitem.map((e) => {
                    return (
                        <div style={{ "width": "80%", "margin": "auto", "marginTop": "2%" }}>

                            <div style={{ "display": "flex" }}>
                                <div style={{ "width": "60%","height":"500px", "border": "1px solid grey", "marginLeft": "5rem", backgroundColor:"white" }}>
                                    <div style={{ "width": "80%", "height": "400px", "marginLeft": "2.5rem" }}>
                                        <img src={e.image} width="90%" height="100%" style={{ "marginLeft": "1rem" }} alt="" />
                                        <button style={{ "width": "100%", "backgroundColor": "rgb(244, 68, 124)", "borderStyle": "none", "borderRadius": "10px", "padding": "10px", "marginTop": "5%" }} 
                                            onClick={() => {
                                                share(e);
                                                {navigate("/Cart")}
                                            }}
                                        >Add To Cart</button>
                                    </div>
                                </div>
                                <Container className='container-heavy' style={{ "marginLeft": "2%" }}>
                                    <div style={{ "border": "1px solid lightgrey", borderRadius:"15px" }}>
                                        <h6 style={{"color":"GrayText"}}>{e.Name}</h6>
                                        <div style={{ "display": "flex", "gap": "5px" }}>
                                            <p style={{"fontWeight":"bold", "fontSize":"xx-large", "marginRight":"2%"}}>₹{e.Price}</p>
                                            <p style={{"textDecoration":"line-through", paddingTop:"2%", marginRight:"2%"}}>₹{e.MRP}</p>
                                            <p style={{"paddingTop":"1.8%", color:"green", fontSize:"18px"}}>{e.Discount}</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                        <div className='rating'>
                                            <p>
                                            {e.Rating}    
                                            </p>
                                         </div>
                                         <p style={{color:"grey", fontSize:"small", paddingTop:"1%"}}>118 Ratings, 24 Reviews</p>
                                         </div>
                                        <div style={{ "display": "flex" ,marginTop:"3%"}}>
                                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" color="greenT2" iconsize="20" class="Icon-sc-1iwi4w1-0 jabcjO" style={{ "marginRight": "0.3rem", "marginTop": "-0.4rem"}}>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z" fill="#06A759"></path>
                                            </svg>
                                            <p className='offer'>{e.offer}</p>
                                        </div>
                                        <div className='DT'>
                                             <p>{e.Delivery_Type}</p>
                                        </div>
                                        
                                    </div>
                                    <div className="size-select" style={{ "backgroundColor":"white", "marginTop": "2%", "borderRadius":"15px" }}>
                                        <h4>Select Size</h4>
                                        <div>
                                            <div>
                                                <p>{e.Size}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{"backgroundColor":"white", "marginTop": "2%" }}>
                                        <h4>Product Details</h4>
                                        <p>Name : {e.Name}</p>
                                        <p>Fabric : {e.Fabric}</p>
                                        <p>Pattern : {e.Pattern}</p>
                                        <p>Sizes : {e.Size}</p>
                                        <p>Country of Origin : {e.Country_of_Origin}</p>
                                    </div>
                                    <div style={{"backgroundColor":"white", "marginTop": "2%" }}>
                                        <h4>Sold By</h4>
                                        <div style={{ "display": "flex" }}>
                                            <div></div>
                                            <div>
                                                <strong>LERIYA FASHION</strong>
                                            </div>
                                            <div className='btn-div'>
                                                <button className='last-btn'><a href="https://meesho.com/LERIYAFASHION?_ms=2"></a>View Shop</button>
                                            </div>
                                        </div>
                                        <div className='sold-div' style={{ "display": "flex" }}>
                                            <div>
                                                <div className='rate-sty'>
                                                    3.9
                                                </div>
                                                <p>32,185 Ratings</p>
                                            </div>
                                            <div>
                                                <strong>668</strong>
                                                <p>Followers</p>
                                            </div>
                                            <div>
                                                <strong>1,227</strong>
                                                <p>Products</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{"backgroundColor":"white", "marginTop": "2%", padding:"3%", textAlign:"center"}}>
                                        <p style={{"color":"grey"}}>Bets Quality Products from trusted suppliers</p>
                                    </div>
                                </Container>
                            </div>

                        </div>
                    )
                })
            }


        </div>
        </>
    )
}

export default Individual