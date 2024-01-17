/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import '../styles/CurrentProduct.scss';
import FormCallback from "./Form/FormCallback";
import RedButton from "./RedButton";
import AboutProductBlock from './AboutProductBlock';
import Slider from "./Slider";
import { Outlet } from "react-router-dom";

const buttonpropsBuy = {
    link: '#',
    redbutton: 'currentProduct-product__redbutton',
    redbuttonLink: 'currentProduct-product__redbuttonLink',
    txt: 'Buy',
}

const buttonpropsAPB = {
    link: '#',
    redbutton: 'currentProduct-product__redbutton',
    redbuttonLink: 'currentProduct-product__redbuttonLink',
    txt: 'Buy',
}

class containAboutProductBlock  {
    constructor(img,title, subtitle, price){
        this.img = img;
        this.title = title;
        this.subtitle = subtitle;
        this.price = price;
    }
    apb = 'productApp__apb';
    apbBody = 'productApp__apb-body';
    apbImg = 'productApp__apb-img';
    apbTitle = 'productApp__apb-title';
    apbSubtitle = 'productApp__apb-subtitle';
    apbPrice = 'productApp__apb-price';
}

const productApp = new  containAboutProductBlock (
    require('../img/OurProduct/boards.png'),
    'Conifer',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);


export default function CurrentProduct (props) {

    const ImgLink = props.currentProduct.sliderImg;

    return (
    <>
    <Outlet/>
        <div className="currentProduct">
            <div className="currentProduct__container _container">
                <div className="currentProduct__body">
                        <div className="currentProduct__direct">Main / Product / <span>Product Name #{props.currentProduct.productNum}</span></div>
                        <div className="currentProduct__wrap">
                            <div className="currentProduct__product">
                                <div className="currentProduct-product__description">
                                    <h3 className="currentProduct-product__title">Product Name #{props.currentProduct.productNum}</h3>
                                    <h5 className="currentProduct-product__subtitle">A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...</h5>
                                    <div className="currentProduct-product__options">
                                        <ul className="currentProduct-options__list">
                                            <li className="currentProduct-options__item">
                                                <span className="currentProduct-options__option">Availability</span>
                                                <span className="currentProduct-options__optionProduct">Yes</span>
                                            </li>
                                            <li className="currentProduct-options__item">
                                                <span className="currentProduct-options__option">Weight (kg)</span>
                                                <span className="currentProduct-options__optionProduct">15</span>
                                            </li>
                                            <li className="currentProduct-options__item">
                                                <span className="currentProduct-options__option">Ash content</span>
                                                <span className="currentProduct-options__optionProduct">not more than 0,3% </span>
                                            </li>
                                            <li className="currentProduct-options__item">
                                                <span className="currentProduct-options__option">Humidity</span>
                                                <span className="currentProduct-options__optionProduct">not more than 7%</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="currentProduct-product__price">from {props.currentProduct.productPrice}$ for  ___</div>
                                    <RedButton buttonprops={buttonpropsBuy}/>
                                </div>
                                
                                <Slider link={ImgLink}/>
                            </div>
                        </div>
                        <div className="currentProduct__sameProducts">
                            <h3 className="currentProduct-sameProducts__title">Similar products</h3>
                            <div className="currentProduct-sameProducts__products">
                                <div className="currentProduct-sameProducts__product">
                                    <AboutProductBlock style={productApp} contain={props.containAboutProductBlockSlider} redbutton={buttonpropsAPB}/>
                                </div>
                                <div className="currentProduct-sameProducts__product">
                                    <AboutProductBlock style={productApp} contain={props.containAboutProductBlockSlider} redbutton={buttonpropsAPB}/>
                                </div>
                                <div className="currentProduct-sameProducts__product">
                                    <AboutProductBlock style={productApp} contain={props.containAboutProductBlockSlider} redbutton={buttonpropsAPB}/>
                                </div>
                                <div className="currentProduct-sameProducts__product">
                                    <AboutProductBlock style={productApp} contain={props.containAboutProductBlockSlider} redbutton={buttonpropsAPB}/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <FormCallback />
    </>  
    );
}