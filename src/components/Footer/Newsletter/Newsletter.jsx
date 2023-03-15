import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section d-flex align-items-center ">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="newsletter-content d-flex flex-column align-items-center m-auto text-center">
                        <span className="small-text">Newsletter</span>
                        <span className="big-text">Sign Up for latest updates and offers</span>
                        <div className="form d-flex">
                            <input type="text" placeholder="Email Address" className="px-2" />
                            <button className="d-flex align-items-center justify-content-center">Subscribe</button>
                        </div>
                        <div className="d-flex ">Will be used in accordance with our Privacy Policy</div>
                        <div className="social-icons d-flex">
                            <div className="icon">
                                <FaFacebookF size={14} />
                            </div>
                            <div className="icon">
                                <FaTwitter size={14} />
                            </div>
                            <div className="icon">
                                <FaInstagram size={14} />
                            </div>
                            <div className="icon">
                                <FaLinkedinIn size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
