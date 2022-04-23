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
            "marginBottom": "4%"
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

      <div style={{ "display": "inline-flex", "width": "78.5%", "marginLeft": "11%", "marginTop": "4%", "marginBottom": "4%" }}>
        <hr style={{ "width": "24%", "marginLeft": "1%", "marginTop": "2%", "backgroundColor": "rgba(245, 40, 145, 0.8)" }}></hr>
        <span style={{ "fontSize": "xx-large", "marginLeft": "5%", "marginRight": "-55%", "fontWeight": "bold" }}>Top Catogories to choose from</span>
        <hr style={{ "width": "24%", "alignItems": "right", "marginTop": "2%", "backgroundColor": "rgba(245, 40, 145, 0.8)", "marginLeft": "58%" }}></hr>
      </div>

      <Container

        className='body_container'
        style={
          {
            "width": "81%",
            "margin": "auto",
            "backgroundImage": `url("/bgImages/Fashionstore.jpg")`
          }
        }
      >
        <div className='bg-img'>
          <a href="/women"><img className='image-on-bg' src="https://images.meesho.com/images/marketing/1649760442043.jpg" /></a>
          <a href="/"><img className='image2-on-bg' src="https://images.meesho.com/images/marketing/1649760423313.jpg" /></a>
          <a href="/"><img className='image3-on-bg' src="https://images.meesho.com/images/marketing/1649759799809.jpg" /></a>
        </div>
      </Container>



      <Container
        style={
          {
            "width": "81%",
            "margin": "auto",
            "marginTop": "4%"
          }
        }
      >
        <div className='bg-img2'>
          <div className='business-card'>
            <h3 style={{"color":"skyblue"}}>Become a Reseller and</h3>
            <h1>Start your online business with zero investment</h1>
          </div>
          <div style={{"display":"flex"}} className="soc-web">
          <a style={{"width":"45%","marginRight":"6%"}} href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=18053349dec81b-07e33e4c84d42-7b422e27-151800-18053349dedc4e"><img src="https://images.meesho.com/images/pow/playstore-icon.png" className='soc-img' /></a>
          <a style={{"width":"46%"}} href="https://apps.apple.com/us/app/meesho/id1457958492" element="blank"><img src="https://images.meesho.com/images/pow/appstore-icon.png" className='soc-img2'/></a>
        </div>
        </div>

      </Container>


    </div>

  )
}

export default Body