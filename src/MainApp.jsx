import React from "react";
import './styles/Main.scss';
import MTitle from "./components/MTitle";
import AboutProductBlock from "./components/AboutProductBlock";   
import FormCallback from "./components/Form/FormCallback";
import WhyweAdvantag from "./components/WhyweAdvantag";

import { ReactComponent as Forestry} from './img/Forestry.svg';
import { ReactComponent as Bioenergy} from './img/Bioenergy.svg';
import { ReactComponent as Support} from './img/Support.svg';
import { ReactComponent as Market} from './img/market.svg';
import { ReactComponent as Approach} from './img/Approach.svg';
import { ReactComponent as Customers} from './img/customers.svg';
import { Outlet } from "react-router-dom";






const styleAboutProductBlock = {
    apb: 'main__apb',
    apbBody: 'main__apb-body',
    apbImg: 'main__apb-img',
    apbTitle: 'main__apb-title',
    apbSubtitle: 'main__apb-subtitle',
    apbPrice: 'main__apb-price',    
};
class containAboutProductBlock  {
    constructor(img ,title, subtitle, price){
        this.img = img;
        this.title = title;
        this.subtitle = subtitle;
        this.price = price;
    }
}
const containAPBPellets = new containAboutProductBlock (require('../src/img/MPellets.png'),'Pellets','A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...','0');
const containAPBriquettes = new containAboutProductBlock (require('../src/img/MBriquettes.png'),'Briquettes','A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...','0');
const containAPBCharcoal = new containAboutProductBlock (require('../src/img/MCharcoal.png'),'Charcoal','A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...','0');
const containAPBPeatbriquette = new containAboutProductBlock (require('../src/img/MPeatbriquette.png'),'Peat briquette','A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...','0');

const toRedButtonfromAboutProductBlock = {
    link: '/Product',
    txt: 'Show more',
    redbutton: 'ourproducts__redbutton',
    redbuttonLink: 'ourproducts__redbutton-link',
};


class whyweAdvantag{
    constructor(img, title, subtitle, maxwidthBlock, heightBlock){
        this.img = img;
        this.title = title;
        this.subtitle = subtitle;
        this.maxwidthBlock = maxwidthBlock;
        this.heightBlock = heightBlock;
    }
};



const whyweAdvantagForestry = new whyweAdvantag(
    <Forestry />,
    'Responsible Forestry' ,
    'Biomass sourced from responsible manufacturers who share our belief in sustainable forestry.',
    '343px',
    '72px',
);
const whyweAdvantagBioenergy = new whyweAdvantag(
    <Bioenergy />,
    'Certified Wood Bioenergy' ,
    'Universally recognized certificates are testimonies to our shared commitments regarding quality, environment, ethics and sustainability.',
    '364px',
    '88px',
);
const whyweAdvantagSupport = new whyweAdvantag(    
    <Support />,
    'Multilingual Client Support' ,
    'Our client success managers are fluent in all major European languages.',
    '311px',
    '72px',
);
const whyweAdvantagMarket = new whyweAdvantag(    
    <Market />,
    '9 years on the market',
    'Our experience ensures the high quality of our products and services',
    '326px',
    '70px',
);
const whyweAdvantagApproach = new whyweAdvantag(    
    <Approach />,
    'Client-centric B2B Approach' ,
    'We appreciate the human element in B2B relationships. B2B=H2H.',
    '332px',
    '70px',
);
const whyweAdvantagCustomers = new whyweAdvantag(    
    <Customers />,
    '1,587 happy customers' ,
    'We work with integrity and make sure that the customer is satisfied with our service',
    '332px',
    '72px',
);

const aboutusTxt1 = `Since 2016, we have been successfully selling our own products in countries such as Italy, Germany, Slovakia, Lithuania, Latvia and other EU countries.`;
const aboutusTxt2 = `The main type of export products are pellets. In less than 4 years, more than 20,000 tons were shipped to more than 10 EU countries.`;
const aboutusTxt3 = `The demand for “Ruf” and “Pini-Kay” briquettes is not as great as for pellets, but this does not prevent us from selling a total of more than 400 tons of briquettes per month.`;
const aboutusTxt4 = `During all this time, we have managed to establish ourselves as a responsible supplier of high-quality wood fuel.`;
const aboutusTxt5 = `We have extensive contacts with European carriers, which allows us to help with the search for vehicles at the lowest market prices.`;

const deliveryTxt1 = `An integral and important part of the purchase of solid fuel is its delivery to the buyer's address. The Pechkin company has its own fleet of cars, with the help of which we carry out prompt delivery of any number of tons in strictly agreed terms.`;
const deliveryTxt2 = `We can also offer delivery directly from our production from 20 tons, which is the most profitable solution and significantly reduces the final cost of goods at your place.`;
const deliveryTxt3 = `If you do not need delivery, then you can pick up any required amount of fuel without any problems by making just one preliminary call to the office.`;
const deliveryTxt4 = `For export clients, we search for transport to any EU country by any type of transport: - By car, - By container, - By railway car, - By Ship`;
const deliveryTxt5 = `For more than 5 years of work in the export market, we have found optimal routes and transport companies that allow us to offer transport rates much lower than market rates. Declaration and customs clearance`;









function MainApp () {
    return (
<>
<Outlet/>
        <main className="main">
            <MTitle/>
            <div className="ourproducts">
                <div className="ourproducts__container _container">
                    <div className="ourproducts__body">
                        <AboutProductBlock style={styleAboutProductBlock} contain={containAPBPellets} redbutton={toRedButtonfromAboutProductBlock}/>
                        <AboutProductBlock style={styleAboutProductBlock} contain={containAPBriquettes} redbutton={toRedButtonfromAboutProductBlock}/>
                        <AboutProductBlock style={styleAboutProductBlock} contain={containAPBCharcoal} redbutton={toRedButtonfromAboutProductBlock}/>
                        <AboutProductBlock style={styleAboutProductBlock} contain={containAPBPeatbriquette} redbutton={toRedButtonfromAboutProductBlock}/>
                    </div>
                </div>
            </div>
            <FormCallback />
            <div className="whywe">
                <div className="whywe__container _container">
                    <div className="whywe__body">
                        <div className="whywe__wrap">
                            <div className="whywe__title">Why we are?</div>
                            <div className="whywe__advantages">
                                <WhyweAdvantag whyweAdvantag={whyweAdvantagForestry}/>
                                <WhyweAdvantag whyweAdvantag={whyweAdvantagSupport}/>
                                <WhyweAdvantag whyweAdvantag={whyweAdvantagApproach}/>
                                <WhyweAdvantag whyweAdvantag={whyweAdvantagBioenergy}/>
                                <WhyweAdvantag whyweAdvantag={whyweAdvantagMarket}/>
                                <WhyweAdvantag whyweAdvantag={whyweAdvantagCustomers}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutcompany">
                <div className="aboutcompany__container _container">
                    <div className="aboutcompany__body">
                        <div className="aboutcompany__aboutus">
                            <div className="aboutus__wrap">
                                <div className="aboutus__header">
                                    <div className="aboutus__img">
                                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="78" height="78" rx="10" fill="url(#paint0_linear_533_128)"/>
                                            <path d="M39 18C27.4031 18 18 27.4031 18 39C18 50.5969 27.4031 60 39 60C50.5969 60 60 50.5969 60 39C60 27.4031 50.5969 18 39 18ZM40.5 49.125C40.5 49.3312 40.3312 49.5 40.125 49.5H37.875C37.6688 49.5 37.5 49.3312 37.5 49.125V36.375C37.5 36.1688 37.6688 36 37.875 36H40.125C40.3312 36 40.5 36.1688 40.5 36.375V49.125ZM39 33C38.4112 32.988 37.8506 32.7456 37.4385 32.325C37.0263 31.9044 36.7955 31.3389 36.7955 30.75C36.7955 30.1611 37.0263 29.5956 37.4385 29.175C37.8506 28.7544 38.4112 28.512 39 28.5C39.5888 28.512 40.1494 28.7544 40.5616 29.175C40.9737 29.5956 41.2045 30.1611 41.2045 30.75C41.2045 31.3389 40.9737 31.9044 40.5616 32.325C40.1494 32.7456 39.5888 32.988 39 33Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_533_128" x1="1.47621e-07" y1="36.5585" x2="78.0246" y2="36.5585" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C90000"/>
                                            <stop offset="1" stop-color="#620000"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="aboutus__title">About us</div>
                                </div>
                                <div className="aboutus__txt">
                                    <div className="aboutus__txt-1">{aboutusTxt1}</div>
                                    <div className="aboutus__txt-2">{aboutusTxt2}</div>
                                    <div className="aboutus__txt-3">{aboutusTxt3}</div>
                                    <div className="aboutus__txt-4">{aboutusTxt4}</div>
                                    <div className="aboutus__txt-5">{aboutusTxt5}</div>
                                </div>
                                <div className="aboutus__liner">
                                    <svg width="453" height="6" viewBox="0 0 453 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="453" height="5.62741" rx="2.81371" fill="url(#paint0_linear_533_137)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_533_137" x1="8.57335e-07" y1="2.63756" x2="453.143" y2="2.63827" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#C90000"/>
                                        <stop offset="1" stop-color="#620000"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="aboutcompany__delivery">
                            <div className="delivery__wrap">
                                <div className="delivery__header">
                                    <div className="delivery__img">
                                        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="78" height="78" rx="10" fill="url(#paint0_linear_533_103)"/>
                                            <path d="M17.6429 37.1801H39.5V40.8161H17.6429V37.1801ZM14 28.0901H32.2143V31.7261H14V28.0901Z" fill="white"/>
                                            <path d="M64.8524 38.2818L59.3881 25.5557C59.2479 25.2286 59.0145 24.9498 58.7169 24.754C58.4194 24.5581 58.0707 24.4538 57.7142 24.454H52.2499V20.818C52.2499 20.3358 52.058 19.8734 51.7165 19.5325C51.3749 19.1915 50.9116 19 50.4285 19H21.2856V22.636H48.6071V45.4629C47.7771 45.9439 47.0508 46.5842 46.4699 47.3468C45.8891 48.1094 45.4653 48.9792 45.2229 49.9061H33.777C33.3337 48.1923 32.2794 46.6988 30.8117 45.7054C29.344 44.712 27.5637 44.287 25.8046 44.51C24.0454 44.7331 22.4281 45.5888 21.2559 46.9169C20.0836 48.2449 19.4369 49.9541 19.4369 51.7241C19.4369 53.4941 20.0836 55.2033 21.2559 56.5313C22.4281 57.8594 24.0454 58.7151 25.8046 58.9382C27.5637 59.1612 29.344 58.7362 30.8117 57.7428C32.2794 56.7494 33.3337 55.2559 33.777 53.5421H45.2229C45.6191 55.1024 46.5252 56.4863 47.798 57.4748C49.0707 58.4633 50.6373 59 52.2499 59C53.8626 59 55.4292 58.4633 56.7019 57.4748C57.9746 56.4863 58.8808 55.1024 59.277 53.5421H63.1785C63.6616 53.5421 64.1249 53.3506 64.4665 53.0096C64.8081 52.6687 65 52.2063 65 51.7241V38.9981C65 38.7518 64.9498 38.5081 64.8524 38.2818ZM26.7499 55.3601C26.0294 55.3601 25.3251 55.1469 24.726 54.7473C24.127 54.3478 23.6601 53.7799 23.3843 53.1156C23.1086 52.4512 23.0365 51.7201 23.177 51.0148C23.3176 50.3094 23.6645 49.6616 24.174 49.1531C24.6835 48.6446 25.3326 48.2983 26.0392 48.158C26.7459 48.0177 27.4783 48.0897 28.144 48.3649C28.8096 48.6401 29.3786 49.1061 29.7788 49.704C30.1791 50.302 30.3928 51.005 30.3928 51.7241C30.3918 52.6881 30.0077 53.6124 29.3247 54.2941C28.6418 54.9758 27.7158 55.3592 26.7499 55.3601ZM52.2499 28.09H56.5121L60.4172 37.1801H52.2499V28.09ZM52.2499 55.3601C51.5295 55.3601 50.8251 55.1469 50.2261 54.7473C49.627 54.3478 49.1601 53.7799 48.8844 53.1156C48.6087 52.4512 48.5365 51.7201 48.6771 51.0148C48.8176 50.3094 49.1646 49.6616 49.674 49.1531C50.1835 48.6446 50.8326 48.2983 51.5393 48.158C52.2459 48.0177 52.9784 48.0897 53.644 48.3649C54.3097 48.6401 54.8786 49.1061 55.2789 49.704C55.6791 50.302 55.8928 51.005 55.8928 51.7241C55.8918 52.6881 55.5077 53.6124 54.8248 54.2941C54.1418 54.9758 53.2158 55.3592 52.2499 55.3601ZM61.3571 49.9061H59.277C58.8758 48.3489 57.9682 46.9685 56.6965 45.9815C55.4248 44.9945 53.8609 44.4566 52.2499 44.4521V40.8161H61.3571V49.9061Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_533_103" x1="1.47621e-07" y1="36.5585" x2="78.0246" y2="36.5585" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C90000"/>
                                            <stop offset="1" stop-color="#620000"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="delivery__title">Delivery</div>
                                </div>
                                <div className="delivery__txt">
                                    <div className="delivery__txt-1">{deliveryTxt1}</div>
                                    <div className="delivery__txt-2">{deliveryTxt2}</div>
                                    <div className="delivery__txt-3">{deliveryTxt3}</div>
                                    <div className="delivery__txt-4">{deliveryTxt4}</div>
                                    <div className="delivery__txt-5">{deliveryTxt5}</div>
                                </div>
                                <div className="delivery__liner">
                                    <svg width="453" height="6" viewBox="0 0 453 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="453" height="5.62741" rx="2.81371" fill="url(#paint0_linear_533_137)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_533_137" x1="8.57335e-07" y1="2.63756" x2="453.143" y2="2.63827" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#C90000"/>
                                        <stop offset="1" stop-color="#620000"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
}





export default MainApp;