import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import "../HomePage/Hovernav.css"
import { useNavigate } from 'react-router-dom'

function Hovernav() {

    const navigate = useNavigate()

    return (
        <div className='main'>
            <div className='outer_div'>
                <p className='inner'>Women Ethnic
                    <div className='display_hover'>
                        <div className='data'>
                            <h5 style={{ "maeginTop": "2%" }}>All Women Ethnic</h5>
                            <div>
                                <a href='/Womenethnic'>
                                    View All
                                </a>
                            </div>
                        </div>
                        <div className='data'>
                            <h5>Sarees</h5>
                            <div onClick={() => {navigate("/Silk")}}>
                                <a>
                                    Silk Sarees
                                </a>
                            </div>
                            <div>
                                <a href="/Cotton">Cotton Sarees</a>
                            </div>
                        </div>
                        <div className='data'>
                            <h5>Kurtis</h5>
                            <div>
                                <a href='/Womenethnic'>
                                    Anarkali
                                </a>
                            </div>
                            <div>
                                <a href="/Womenethnic">Rayon</a>
                            </div>
                        </div>
                    </div>
                </p>
                <p className='inner'>Women Western</p>
                <div className='display_hover'>
                    <div className='data'>
                        <h5 style={{ "maeginTop": "2%" }}>Top wear</h5>
                        <div>
                            <a href='/Womenethnic'>
                                Dresses
                            </a>
                        </div>
                    </div>
                    <div className='data'>
                        <h5>Bottom Wear</h5>
                        <div>
                            <a href='/Silk'>
                                Jeans
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hovernav