/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import './styles/AboutusApp.scss';
import FormCallback from "./components/Form/FormCallback";
import { Outlet } from "react-router-dom";



const AboutusApp = () => {
    return (
    <>
    <Outlet />
    <div className="aboutusApp">
        <div className="aboutusApp__container _container">
            <div className="aboutusApp__body">
                <div className="aboutusApp__direction">Main / About us</div>
                <h1 className="aboutusApp__title">About us</h1>
                <div className="aboutusApp__production">
                    <div className="production__item">
                        <div className="production__img"><img className="img__production" src={require('../src/img/aboutus/production-1.png')} alt="production-1" /></div>
                        <div className="production__description">
                            <h3 className="production__title">Our production</h3>
                            <div className="production__description-block">
                                From the first years of work in the solid fuel business it became clear that we can't do without our own production facilities.
                                But, as you know, it is not a problem to buy equipment and find competent specialists, how to find a quality, constantly updated raw material base, which will provide a continuous process of producing briquettes or pellets all year round.
                            </div>
                            <div className="production__description-block">
                                So in 2013 began our endless trips to major woodworking companies in Russia. And by the summer of 2014 we managed to find a large enterprise in the Kirov region, with which we partnered to install our first press from the German company "RuF". After a short installation and commissioning we were able to reach operating capacity and produce 7-9 tons of briquettes per day in two shifts. Having successfully implemented this project, we decided not to stop the production of wood briquettes and in 2016 the first pelletizer OGM-1.5 was installed in Belokholunitsky district of Kirov region, which allows to produce more than 1 ton of premium wood pellets per hour.
                            </div>
                            <div className="production__description-block">
                                At the moment we have one production of wood briquettes and two production of pellets. The total capacity is 200-220 tons of briquettes per month and 800-900 tons of pellets per month.
                            </div>
                        </div>
                    </div>
                    <div className="production__item">
                        <div className="production__img"><img className="img__production" src={require('../src/img/aboutus/production-2.png')} alt="production-2" /></div>
                        <div className="production__description">
                            <h3 className="production__title">Our production</h3>
                            <div className="production__description-block">
                                It's no secret that for the successful development and exploration of new markets - you can not stand still and trade in one or two types of fuel.
                            </div>
                            <div className="production__description-block">
                                We have 4 types of RuF wood briquettes only:
                                <ul className="description-block__ul">
                                    <li className="description-block__li">Mix briquette (made of coniferous and birch sawdust)</li>
                                    <li className="description-block__li">Birch "dust" briquette (made of birch wood flour)</li>
                                    <li className="description-block__li">Briquettes of oak dust (from oak wood flour),</li>
                                    <li className="description-block__li">Mixture of birch "dust" briquettes with the addition of wood chips (70-80% birch flour, the rest is birch chips).</li>
                                </ul>
                            </div>
                            <div className="production__description-block">
                                Besides RuF briquettes we also sell such briquettes as Pini-Kay, Nielsen and Nestro, packed in 10 kg shrink-wrapped film.
                                But what can you do nowadays without wood pellets? And we also have 4 kinds of them:
                                <ul className="description-block__ul">
                                    <li className="description-block__li">White "premium" 6mm</li>
                                    <li className="description-block__li">Light "standard" 6mm</li>
                                    <li className="description-block__li">Dark "cappuccino" 6-8 mm</li>
                                    <li className="description-block__li">Agropellets from sunflower husks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormCallback />
        </div>
    </div>
    </>
        
    
    );
}




export default AboutusApp;