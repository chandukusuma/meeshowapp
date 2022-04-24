import React from 'react'
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
                            <div onClick={() => { navigate("/WomenEthnic") }}>
                                <a className='a-tag'>
                                    View All
                                </a>
                            </div>
                        </div>
                        <div className='data'>
                            <h5>Sarees</h5>
                            <div onClick={() => { navigate("/Silk") }}>
                                <a className='a-tag'>
                                    Silk Sarees
                                </a>
                            </div>
                            <div onClick={() => { navigate("/Cotton") }}>
                                <a className='a-tag'>Cotton Sarees</a>
                            </div>
                        </div>
                        <div className='data'>
                            <h5>Kurtis</h5>
                            <div onClick={() => { navigate("/anarkali") }}>
                                <a style={{color:"grey"}}>
                                    Anarkali
                                </a>
                            </div>
                            <div onClick={() => { navigate("/rayon") }}>
                                <a style={{color:"grey"}}>Rayon</a>
                            </div>
                        </div>
                    </div>
                </p>
                <p className='inner-1'>Women Western
                    <div className='display_hover_1'>
                        <div className='data_2' >
                            <h5 style={{ "maeginTop": "2%" }}>Top wear</h5>
                            <div onClick={() => { navigate("/Topwear") }}>
                                <a className='a-tag'>
                                    Dresses
                                </a>
                            </div>
                        </div>
                        <div className='data_2'>
                            <h5>Bottom Wear</h5>
                            <div onClick={() => { navigate("/Bottomwear") }}>
                                <a className='a-tag'>
                                    Jeans
                                </a>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default Hovernav