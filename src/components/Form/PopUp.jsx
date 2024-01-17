import React, { useState } from "react";
import './PopUp.scss';
import './FormCallback.scss';
import RedButton from "../RedButton";
import { useNavigate } from "react-router-dom";

const toRedButtonfromPopUp = {
    link: '#',
    redbutton: 'popUp__redbutton',
    redbuttonLink: 'popUp__redbutton-link',
    txt: 'Call me',
}

export default function PopUp () {

    const history = useNavigate();

    const [close, setClose] = useState('popUp');

    const toClose = () => {
        history(-1);
        setClose('popUp close');
        document.body.style.overflow = 'auto';
    }

    return (
        <div className={close} >
            <div className="popUp__body">
                <div className="popUp__cover">
                    <div className="popUp__interface">
                        <div className="popUp__title">Call me back</div>
                        <div className="popUp__subtitle">Leave your contact information here and we will get back to you as soon as possible.</div>
                        <div className="popUp__forms">
                            <div className="popUp__form-name"><input type="text" placeholder="Enter your name" className="form-name__formcallback"/></div>
                            <div className="popUp__form-phone"><input type="tel" pattern="[0-9]*" placeholder="Enter your phone" className="form-phone__formcallback"/></div>
                            <div className="popUp__form-email"><input type="text" placeholder="Enter your e-mail" className="form-name__formcallback"/></div>
                        </div>
                        <RedButton buttonprops={toRedButtonfromPopUp}/>
                    </div>
                </div>
                <div className="popUp__exit" onClick={toClose}>
                    <span className="popUp-exit__item"></span>
                    <span className="popUp-exit__item"></span>
                </div>
            </div>
        </div>
    );
}