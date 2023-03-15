import React from 'react';
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content d-flex flex-wrap">
                        <div className="col">
                            <div className="title">About</div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus nesciunt reiciendis est, neque laboriosam optio nemo voluptatum eos. Reiciendis.</div>
                        </div>
                        <div className="col">
                            <div className="title">Contact</div>
                            <div className="c-item">
                                <FaLocationArrow />
                                <div className="text">Ngarjun-09, Suichatar, Kathmandu, Nepal</div>
                            </div>
                            <div className="c-item">
                                <FaMobileAlt />
                                <div className="text">+977-9823575991</div>
                            </div>
                            <div className="c-item">
                                <FaEnvelope />
                                <div className="text">Email: store@jsdev.com</div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column">
                            <div className="title">Categories</div>
                            <span className="text">HeadPhones</span>
                            <span className="text">Smart Watches</span>
                            <span className="text">Bluetooth Speakers</span>
                            <span className="text">Home Theatre</span>
                            <span className="text">Projectors</span>
                            <span className="text">Wireless Earbuds</span>
                        </div>
                        <div className="col d-flex flex-column">
                            <div className="title">Pages</div>
                            <span className="text">Home</span>
                            <span className="text">About</span>
                            <span className="text">Privacy Policy</span>
                            <span className="text">Returns</span>
                            <span className="text">Terms & Conditions</span>
                            <span className="text">Contact Us</span>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="bottom-bar-content d-flex align-items-center flex-column">
                            <div className="text">
                                MyStore Created by Rocky Pukar E-COMMERCE WEBAPP
                            </div>
                            <img src={Payment} alt="Payment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
