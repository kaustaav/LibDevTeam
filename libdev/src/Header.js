import React from 'react';
import './Header(Main).css';
import './Header(Sticky).css';
import './Header(Below).css';

function Header() {
    return (
        <div>
            <a className="skip-link screen-reader-text">Skip to content</a>
            <div className="sticky-header">
                <div className="container">
                    <div className="sticky-header-bar thnk-col-3">
                        <div className="sticky-header-col1">
                            <span className="logo-content">
                                <div className="thunk-logo">
                                    <a 
                                        className="custom-logo-link"
                                        href="/"
                                        rel="home"
                                    >
                                        <img
                                            width="700"
                                            height="200"
                                            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_043837.png"
                                            className="custom-logo"
                                            alt="Library"
                                        />
                                    </a>
                                </div>
                            </span>
                        </div>
                        <div className="sticky-header-col2">
                            <nav>
                                <div className="menu-toggle" style={{display: "none"}}>
                                    <button type="button" className="menu-btn" id="menu-btn-stk">
                                        <div className="btn">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </div>
                                    </button>
                                </div>
                                <div className="sider main top-store-menu-hide left">
                                    <div className="sider-inner">
                                        <ul id="top-store-stick-menu" className="top-store-menu" data-style-menu="horizontal">
                                            <li>
                                                <a href="/">
                                                    <span className="top-store-menu-link">My orders</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <span className="top-store-menu-link">All books</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <span className="top-store-menu-link">Preferences</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <span className="top-store-menu-link">Contact us</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="sticky-header-col3">
                            <div className="thunk-icon">
                                <div className="header-icon">
                                    <a className="prd-search" href="#">
                                        <i className="fa fa-search"></i>
                                    </a>
                                    <a className="wishlist" href="">
                                        <i className="fa fa-heart-o"></i>
                                    </a>
                                    <span>
                                        <a href="">
                                            <span className="account-text">Login / Signup</span>
                                            <span className="account-text">My account</span>
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                    <div className="cart-icon">
                                        <a className="cart-contents" href="" title="See your orders">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="cart-content">
                                                <span className="count-item">1</span>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        675.00
                                                    </bdi>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="main-header mhdrfour none left cnv-none">
                <div className="container">
                    <div className="main-header-bar thnk-col-3">
                        <div className="main-header-col1">
                            <span className="logo-content">
                                <div className="thunk-logo">
                                    <a href="\" className="custom-logo-link" rel="home">
                                        <img
                                            width="700"
                                            height="200"
                                            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_043837.png"
                                            className="custom-logo"
                                            alt="Library"
                                        />
                                    </a>
                                </div>
                            </span>
                        </div>
                        <div className="main-header-col2">
                            <div id="search-box" className="wow thmkfadeInDown">
                                <form action="" id="search-form" className="woocommerce-product-search" method="get" target="_top">
                                    <input
                                        id="search-text"
                                        name="s"
                                        placeholder="Search for books"
                                        className="form-control search-autocomplete ui-autocomplete-input"
                                        type="text"
                                        title="Search for:"
                                        autoComplete
                                    />
                                    <div className="vert-brd"></div>
                                    <select name="product_cat" id="product_cat" className="something">
                                        <option value="0" selected="selected">All Category</option>
                                        <option className="level-0" value="category1">Category 1</option>
                                        <option className="level-0" value="category2">Category 2</option>
                                        <option className="level-0" value="category3">Category 3</option>
                                        <option className="level-0" value="category4">Category 4</option>
                                    </select>
                                    <button id="search-button" value="Submit" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                    <input
                                        type="hidden"
                                        name="post_type"
                                        value="product"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="main-header-col3">
                            <div className="thunk-icon-market">
                                <div className="header-icon">
                                    <a className="wishlist" href="">
                                        <span className="th-wishlist-text">My Favourite</span>
                                        <span>Wishlist</span>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </a>
                                    <a href="\">
                                        <span className="account-text">Login / SignUp</span>
                                        <span className="account-text">My account</span>
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="cart-icon">
                                    <a className="cart-contents" href="" title="Check your orders">
                                        <i className="fa fa-shopping-basket"></i>
                                        <span className="cart-content">
                                            <span className="count-item">0</span>
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                <span className="woocommerce-Price-currencySymbol">₹</span>
                                                0.00
                                                </bdi>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="below-header mhdrfour left none">
                <div className="container">
                    <div className="below-header-bar thnk-col-3">
                        <div className="below-header-col1">
                            <div className="menu-category-list">
                                <div className="toggle-cat-wrap">
                                    <p className="cat-toggle" tabIndex="0">
                                        <span className="cat-icon">
                                            <span className="cat-top"></span>
                                            <span className="cat-top"></span>
                                            <span className="cat-bot"></span>
                                        </span>
                                        <span className="toggle-title">Category</span>
                                        <span className="toggle-icon"></span>
                                    </p>
                                </div>
                                <ul className="product-cat-list thunk-product-cat-list" style={{display: "none"}}>
                                    <li className="cat-item cat-item-63">
                                        <a href="">Fiction</a>
                                    </li>
                                </ul>
                            </div>
                            <nav>
                                <div className="menu-toggle" style={{display: "none"}}>
                                    <button type="button" className="menu-btn" id="menu-btn">
                                        <div className="btn">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </div>
                                        <span className="icon-text">Menu</span>
                                    </button>
                                </div>
                                <div className="sider main top-store-menu-hide left">
                                    <div className="menu-close">
                                        <span tabIndex="0" className="menu-close-btn"></span>
                                    </div>
                                    <div className="sider-inner">
                                        <ul id="top-store-menu" className="top-store-menu">
                                            <li>
                                                <a href="/" aria-current="page">
                                                    <span className="top-store-menu-link">Home</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span className="top-store-menu-link">My orders</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span className="top-store-menu-link">All Products</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span className="top-store-menu-link">Preferences</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span className="top-store-menu-link">Contact Us</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
