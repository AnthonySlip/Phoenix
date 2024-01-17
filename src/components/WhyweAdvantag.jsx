import React from "react";
import '../styles/WhyweAdvantag.scss';



function WhyweAdvantag (props) {
    return (
        <div className="whywe__advantag" style={{maxWidth: props.whyweAdvantag.maxwidthBlock, height: props.whyweAdvantag.heightBlock}}>
            <div className="advantag__img">
                {props.whyweAdvantag.img}
            </div>
            <div className="advantag__description">
                <div className="advantag__title">
                    {props.whyweAdvantag.title}
                </div>
                <div className="advantag__subtitle">
                    {props.whyweAdvantag.subtitle}
                </div>
            </div>
        </div>
    );
}

export default WhyweAdvantag;