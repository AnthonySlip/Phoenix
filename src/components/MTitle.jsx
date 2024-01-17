import React from "react";
import RedButton from './RedButton';
import '../styles/Mtitle.scss';

const MTitle = () => {
    return (
        <div className="Mtitle">
            <div className="Mtitle__container _container">
                <div className="Mtitle__body">
                    <div className="Mtitle__title">A bright headline about what we offer</div>
                    <div className="Mtitle__subtitle">A brief description of the essence of the offer, prompting its content to click on the button below</div>
                    <RedButton buttonprops={{link: 'callback', txt: 'Call me back', redbutton: 'Mtitle__redbutton', redbuttonLink: 'Mtitle__redbutton-link'}}
                    />
                </div>
            </div>
        </div>
    );
}


export default MTitle;