import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import FormCallback from "./components/Form/FormCallback";
import './styles/CertificatesApp.scss';





export default function CertificatesApp() {

    const [menuCertificate, setMenuCertificate] = useState ('menuCertificateHidden');
    const [isCertificate, setIsCertificate] = useState (false);


    const isActive = () => {
        if (!isCertificate){
            setMenuCertificate('menuCertificateActive');
        }else{
            setMenuCertificate('menuCertificateHidden');
        }
        setIsCertificate(!isCertificate);
    }


return (
<>
<Outlet/>

<div className={menuCertificate}>
    <div className="back" onClick={isActive}>
        <span className="back__item"></span>
        <span className="back__item"></span>
    </div>
    <img src={require('./img/certificates/certificate1.png')} alt="" className="certificate" />
</div>


    <div className="certificatesApp">
        <div className="certificatesApp__container _container">
            <div className="certificatesApp__body">
                <div className="certificatesApp__direction">Main / About us</div>
                <h1 className="certificatesApp__title">Certificates</h1>
                <h5 className="certificatesApp__subtitle">Here we have collected certificates that once again confirm our competence in the manufacture of bio-energy products.</h5>

                <div className="certificatesApp__certificate-txt">
                    <ul className="certificatesApp__certificate-list">
                        <li className="certificatesApp__certificate-item" onClick={isActive}>Certificate 1 10.10.2090</li>
                        <li className="certificatesApp__certificate-item" onClick={isActive}>Certificate 2 10.10.2090</li>
                        <li className="certificatesApp__certificate-item" onClick={isActive}>Certificate 3 10.10.2090</li>
                    </ul>
                </div>
                

                <div className="certificatesApp__certificates">
                    <div className="certificatesApp__certificate">
                        <img src={require('./img/certificates/certificate1.png')} alt="certificate-1" className="img__certificate" />
                    </div>
                    <div className="certificatesApp__certificate">
                        <img src={require('./img/certificates/certificate1.png')} alt="certificate-1" className="img__certificate" />
                    </div>
                    <div className="certificatesApp__certificate">
                        <img src={require('./img/certificates/certificate1.png')} alt="certificate-1" className="img__certificate" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FormCallback />
</>
);
}
