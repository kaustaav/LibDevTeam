import React from 'react';
import './Header(Main).css';

function Header() {
    return (
        <div>
            <a className="skip-link screen-reader-text">Skip to content</a>
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
    )
}

export default Header
