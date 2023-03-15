import "./Category.scss";

import cat1 from "../../../assets/category/cat-1.jpg";

const Category = () => {
    return <div className="shop-by-category">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="categories">
                        <div className="category">
                            <img src={cat1} alt="" />
                        </div>
                        <div className="category">
                            <img src={cat1} alt="" />
                        </div>
                        <div className="category">
                            <img src={cat1} alt="" />
                        </div>
                        <div className="category">
                            <img src={cat1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Category;
