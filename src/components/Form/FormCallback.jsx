import React from "react";
import './FormCallback.scss';
import RedButton from "../RedButton";

const toRedButtonfromFormCallback = {
    link: 'callback',
    txt: 'Call me back',
    redbutton: 'formcallback__redbutton',
    redbuttonLink: 'formcallback__redbutton-link',
};

function FormCallback () {
    return (
        <div className="formcallback">
            <div className="formcallback__container _container">
                <div className="formcallback__body">
                    <div className="formcallback__title">We provide bulk industrial-grade wood pellets</div>
                    <div className="formcallback__subtitle">for clean biomass energy to Europe’s leading energy companies sing sea vessels of 3.000 to 30.000 tons.</div>
                    <div className="formcallback__form">
                        <div className="formcallback__form-name">
                            <input type="text" placeholder="Enter your name" className="form-name__formcallback"/>
                        </div>
                        <div className="formcallback__form-phone">
                            <input type="tel" pattern="[0-9]*" placeholder="Enter your phone" className="form-phone__formcallback"/>
                            <span className="format__form-phone">Format: (123)-(123)-(1234)</span>
                        </div>
                        <RedButton buttonprops={toRedButtonfromFormCallback}/>
                    </div>
                    <div className="formcallback__img"></div>
                </div>
            </div>
        </div>
    );
}

export default FormCallback;