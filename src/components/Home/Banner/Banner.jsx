import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner position-relative">
        <div className="content h-100 d-flex justify-content-end align-items-center flex-column">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum nemo magni.</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta">Shop Now</div>
                </div>
            </div>
            <img src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
