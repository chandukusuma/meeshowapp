import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Ethnicwear from './CardData'
import Westernwear from './data'


function Cards() {


    const [data, setData] = useState(Westernwear);
    const [women, setWomen] = useState(Ethnicwear)

    console.log(women)


    return (

        <div>
            <h2 style={{"textAlign":"left", "marginLeft":"8.5%", "padding":"2%"}}>Products for you</h2>

            <div className='row d-grid  align-items-center' style={{"width":"80%", "margin":"auto","gridTemplateColumns":"23.5% 23.5% 23.5% 23.5%", "gridGap":"1rem" }}>
                {
                    data.map((e, id) => {
                        return (
                            <>
                                <Card style={{ width: '18rem', "borderRadius":"0.7rem" }}>
                                    <Card.Img variant="top" src={e.image} style={{"height":"20rem", "width":"16.5rem", "marginLeft":"-0.7rem", "borderRadius":"0.7rem"}} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards