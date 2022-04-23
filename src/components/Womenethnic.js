import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Ethnicwear from './CardData'

function Womenethnic() {


  const [ethnic, setEthnic] = useState(Ethnicwear);

  

  return (
    <div className='row d-grid' style={
      {
          "width": "80%",
          "margin": "auto",
          "marginTop":"5%",
          "gridTemplateColumns": "23.5% 23.5% 23.5% 23.5%",
          "justifyContent": "center",
          "alignItems": "center",
          "gridGap": "1rem"
      }
  }>
      {
          ethnic.map((element, id) => {

              if(element.Category==="Saree"){
                return (
                  <>
                      <Card style={{ width: '18rem', "borderRadius": "0.7rem" }}>
                          <Card.Img variant="top" src={element.image} style={{ "height": "20rem", "width": "16.5rem", "marginLeft": "-0.7rem", "borderRadius": "0.7rem" }} />
                          <Card.Body>
                              <Card.Title style={{ "fontSize": "small", "color": "grey", "textAlign": "left" }} >{element.Name}</Card.Title>
                              <div style={{ "display": "flex" }}>
                                  <Card.Text style={{ "fontWeight": "bold", "paddingRight": ".5rem" }}>₹{element.Price}</Card.Text>
                                  <Card.Text style={{ "textDecoration": "line-through", "paddingRight": ".5rem", "color": "lightslategrey" }}>₹{element.MRP}</Card.Text>
                                  <Card.Text style={{ "color": "green", "fontWeight": "bold" }}>{element.Discount}</Card.Text>
                              </div>
                              <Card.Text>
                                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" color="greenT2" iconsize="20" class="Icon-sc-1iwi4w1-0 jabcjO" style={{"marginRight":"0.3rem", "marginTop":"-0.4rem"}}>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z" fill="#06A759"></path>
                                  </svg>
                                  {element.offer}
                              </Card.Text>

                              <div style={
                                  {
                                      "width": "50%",
                                      "border": "1px solid whitesmoke",
                                      "borderRadius": "20px",
                                      "backgroundColor": "whitesmoke",
                                      "fontSize": "small",
                                      "marginBottom": "8%"
                                  }
                              }>
                                  <Card.Text>{element.Delivery_Type}</Card.Text>
                              </div>
                              <div style={
                                  {
                                      "display": "flex",
                                      "width": "25%",
                                      "backgroundColor": "green",
                                      "borderRadius": "2rem",
                                      "color": "white"
                                  }
                              }>
                                  <Card.Text style={{ "padding": "3px", "fontWeight": "bold" }}>{element.Rating}<i class="fa-solid fa-star fa-2px"></i></Card.Text>
                              </div>
                          </Card.Body>
                      </Card>
                  </>
              )
              }
              
          })
      }

  </div>
  )
}

export default Womenethnic