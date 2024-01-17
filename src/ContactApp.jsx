/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import './styles/ContactApp.scss';
import FormCallback from "./components/Form/FormCallback";
import { Outlet } from "react-router-dom";

const ContactApp = () => {
    return (
    <>
    <Outlet/>
        <div className="contactApp">
            <div className="contactApp__container _container">
                <div className="contactApp__body">
                    <div className="contactApp__direction">Main / Contact</div>
                    <h1 className="contactApp__title">Contact</h1>
                    <div className="contactApp__interface">
                        <div className="contactApp__info">
                            <div className="contactApp__info-wrap">
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Company Name</div>
                                    <div className="contactApp__info-a">Phoeni̇x Bioenergy Orman Ürünleri̇<br/>Sanayi̇ Ve Diş Ti̇caret Li̇mi̇ted Şi̇rketi̇</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Adress</div>
                                    <div className="contactApp__info-a">Küçükköy Mah. Somalilar Sok. Aksoy Bblok<br/>No: 3/1 Ayvalik / Balikesi̇r / Turkey</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Tax Office</div>
                                    <div className="contactApp__info-a">Ayvalik</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Tax Number</div>
                                    <div className="contactApp__info-a">729 120 2246</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Nace Code </div>
                                    <div className="contactApp__info-a">46.19.01 - Intermediates Who Wholesale<br/>Various Goods On A Fees Or Contractual Basis</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Registry Name</div>
                                    <div className="contactApp__info-a">Ayvalik Commercy Office</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Trade Registry Number</div>
                                    <div className="contactApp__info-a">005788</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Mersi̇s Number</div>
                                    <div className="contactApp__info-a">0729120224600001</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Capital</div>
                                    <div className="contactApp__info-a">400.000,00 TL</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Bank Name</div>
                                    <div className="contactApp__info-a">Turki̇ye Vaki̇flar Bankasi̇ T.a.o.</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Branch Name</div>
                                    <div className="contactApp__info-a">Ayvalik-Balikesi̇r</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Iban Number TL </div>
                                    <div className="contactApp__info-a">TR69 0001 5001 5800 7317 6803 49</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Iban Number USD</div>
                                    <div className="contactApp__info-a">TR39 0001 5001 5804 8021 6440 31</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Iban Number EUR</div>
                                    <div className="contactApp__info-a"> TR51 0001 5001 5804 8021 6440 09</div>
                                </div>
                                <div className="contactApp__info-block">
                                    <div className="contactApp__info-q">Swift Code</div>
                                    <div className="contactApp__info-a">TVBATR2AXXX</div>
                                </div>
                            </div>
                        </div>
                        <div className="contactApp__map">
                            <iframe className="map__contactApp" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25000.4244373863!2d27.150332137597324!3d38.44024347263902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1672687060106!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <FormCallback />
        </div>
    </>
        
    );
};

export default ContactApp;