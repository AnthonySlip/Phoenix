import React from "react";
import RedButton from "./RedButton";

function AboutProductBlock (props) {
    return (
        <div className={props.style.apb}>
            <div className={props.style.apbBody}>
                <div className={props.style.apbImg}>
                    <img src={props.contain.img} alt="" />
                </div>
                <div className={props.style.apbTitle}>
                    {props.contain.title}
                </div>
                <div className={props.style.apbSubtitle}>
                    {props.contain.subtitle}
                </div>
                <div className={props.style.apbPrice}>
                    {props.contain.price}
                </div>
                <RedButton buttonprops={props.redbutton}/>
            </div>
        </div>
    );
}





export default AboutProductBlock;