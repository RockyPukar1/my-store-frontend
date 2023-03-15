import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage }) => {
    return <div className="products-container">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {!innerPage && <div className="sec-heading">Section Heading</div>}
                    <div className="products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Products;
