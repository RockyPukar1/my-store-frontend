import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Product Name Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, saepe.</span>
            <span className="price">&#36; 500</span>
        </div>
    </div>;
};

export default Product;
