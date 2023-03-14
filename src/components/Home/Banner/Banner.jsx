import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner position-relative">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content position-relative h-100 d-flex justify-content-end align-items-center flex-column-reverse">
                        <img className="banner-img position-relative" src={BannerImg} alt="" />
                        <div className="text-content text-light d-flex flex-column align-items-center text-center">
                            <h1>SALES</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum nemo magni.</p>
                            <div className="ctas d-flex justify-content-center">
                                <div className="banner-cta">Read More</div>
                                <div className="banner-cta v2 bg-light text-dark">Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};

export default Banner;
