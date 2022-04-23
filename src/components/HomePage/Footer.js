import React from 'react';
import "../HomePage/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="firstSection">
                <div className="heading">
                    <p className="headingTitle">Shop Non-Stop on Meesho</p>
                    <div className="subTitleView">
                        <p className="subTitle">
                            Trusted by more than 1 Crore Indians <br /> Cash on Delivery |
                            Free Delivery
                        </p>
                    </div>
                    <div className="download">
                        <img
                            src="https://images.meesho.com/images/pow/playstore-icon.png"
                            alt=""
                        />
                        <img
                            src="https://images.meesho.com/images/pow/appstore-icon.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="career">
                    <div className="firstCareerView">
                        <p className="content">Careers</p>
                        <p className="subContent">Become a supplier</p>
                        <p className='subContent'>Our Influencer Program</p>
                        <p className='subContent'>Hall of Fame</p>
                    </div>
                    <div className="secondCareerView">
                        <p className="content">Legal and Polices</p>
                        <p className="subContent">Meesho Tech Blog</p>
                        <p className="subContent">Notices and Returns</p>
                    </div>
                </div>
                <div className="reachOut">
                    <p className="contactTitle">Reach out to us</p>
                    <div className="contactIcons">
                        <img
                            src="https://meesho.com/assets/facebook.png"
                            alt=""
                            onClick={() => (window.location.href = "https://www.facebook.com")}
                        />
                        <img
                            src="https://meesho.com/assets/instagram.png"
                            alt=""
                            onClick={() => (window.location.href = "https://www.instagram.com")}
                        />
                        <img
                            src="https://meesho.com/assets/youtube.png"
                            alt=""
                            onClick={() => (window.location.href = "https://www.youtube.com")}
                        />
                        <img
                            src="https://meesho.com/assets/linkedin.png"
                            alt=""
                            onClick={() => (window.location.href = "https://www.linkedin.com/")}
                        />
                        <img
                            src="https://meesho.com/assets/twitter.png"
                            alt=""
                            onClick={() => (window.location.href = "https://www.twitter.com")}
                        />
                    </div>
                </div>
                <div className="contact">
                    <p className="contactTitle">Contact Us</p>
                    <p className="subContent">query@meesho.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer