import Button from 'react-bootstrap/Button'
import React from 'react'
import { Container } from 'react-bootstrap'
import '../HomePage/body.css'


function Body() {


  return (
    <div>
      <Container className='container'
        style={
          {
            "width": "80%",
            "height": "350px",
            "margin": "auto",
            "display": "flex",
            "marginTop": "3%",
            "marginBottom":"4%"
          }
        }>
        <div style={
          {
            "borderRadius": "5px",
            "width": "50%",
            "backgroundColor": "whitesmoke",
            "color": "black",
            "textAlign": "left",
            "paddingLeft": "4%",
            "paddingTop": "4%"
          }
        }>
          <h1>Lowest Prices</h1>
          <h1> Best Quality shopping</h1>
          <div style={
            {
              "width": "60%",
              "backgroundColor": "white",
              "marginTop": "5%",
              "borderRadius": "2px",
              "padding": "5px",
              "fontSize": "large",
              "color": "grey"

            }
          }>
            1 Crore + Products | 650+ Categories
          </div>
          <Button href="#" varient="secondary" size="lg" style={
            {
              "marginTop": "5%",
              "backgroundColor": "rgba(245, 40, 145, 0.8)",
            }
          }>
            <img src="https://images.meesho.com/images/pow/playstore-small-icon.png" />
            <span style={{ "marginLeft": "15px" }}>Downlaod the Meesho App</span>
          </Button>
        </div>
        <div style={
          {
            "width": "50%",
            "borderRadius": "5px",
          }
        }>
          <img src='https://images.meesho.com/images/marketing/1649759684499.jpg' width="100%" height="100%" borderRadius="5px" />
        </div>
      </Container>

      <div style={{ "display": "inline-flex", "width": "78.5%", "marginLeft":"11%", "marginTop": "4%", "marginBottom":"4%"}}>
        <hr style={{ "width": "24%", "marginLeft": "1%", "marginTop": "2%", "backgroundColor": "rgba(245, 40, 145, 0.8)" }}></hr>
        <span style={{ "fontSize": "xx-large", "marginLeft": "5%", "marginRight": "-55%", "fontWeight": "bold" }}>Top Catogories to choose from</span>
        <hr style={{ "width": "24%", "alignItems": "right", "marginTop": "2%", "backgroundColor": "rgba(245, 40, 145, 0.8)", "marginLeft":"58%" }}></hr>
      </div>

      <Container
        style={
          {
            "width": "81%",
            "margin": "auto",
            "backgroundImage": `url("/bgImages/Fashionstore.jpg")`
          }
        }
      >
         <div class="has-bg-img" style={{"height":"500px", "marginTop":"4%"}}>
          <img class="bg-img" src="	https://images.meesho.com/images/marketing/1649759774600.jpg" alt="..." style={{"height":"100%", "width":"100%"}}/>
        </div>
      </Container>



      <Container
        style={
          {
            "width": "81%",
            "margin": "auto",
            "marginTop":"4%"
          }
        }
      >
        <div class="has-bg-img" style={{"height":"500px"}}>
          <img class="bg-img" src="https://images.meesho.com/images/pow/1629883965347.jpeg" alt="..." style={{"height":"100%", "width":"100%"}}/>
        </div>
      </Container>


    </div>

  )
}

export default Body