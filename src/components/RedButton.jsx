import React from "react";
import { Link } from "react-router-dom";




function RedButton(props) {
   
    return (
        <Link to={props.buttonprops.link}
            onClick={
                () => {
                    if(props.buttonprops.link.includes('callback')){document.body.style.overflow = 'hidden'}
                }
            }
        >
            <div className={props.buttonprops.redbutton}>
            <div className={props.buttonprops.redbuttonLink}>
                {props.buttonprops.txt}
            </div>
        </div>
        </Link>
    );
}

export default RedButton;