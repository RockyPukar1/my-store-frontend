import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom/dist";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="position-relative header-content d-flex justify-content-between align-items-center">
                                <ul className="left text-uppercase list-unstyled d-flex gap-3 mb-0">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Categories</li>
                                </ul>
                                <div className="center">My Store</div>
                                <div className="right d-flex align-items-center gap-2">
                                    <TbSearch  onClick={() => setShowSearch(true)}/>
                                    <AiOutlineHeart />
                                    <span className="cart-icon position-relative" onClick={() => setShowCart(true)}>
                                        <CgShoppingCart />
                                        <span className="text-center position-absolute">5</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
