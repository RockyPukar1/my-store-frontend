import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner position-relative">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content h-100 d-flex justify-content-end align-items-center flex-column">
                        <div className="text-content">
                            <h1>SALES</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum nemo magni.</p>
                            <div className="ctas">
                                <div className="banner-cta">Read More</div>
                                <div className="banner-cta v2">Shop Now</div>
                            </div>
                        </div>
                        <img className="banner-img position-relative" src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>;
};

export default Banner;
