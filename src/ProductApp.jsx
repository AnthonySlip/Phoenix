import React from "react";
import FormCallback from "./components/Form/FormCallback";
import AboutProductBlock from "./components/AboutProductBlock";
import './styles/ProductApp.scss';
import { Outlet } from "react-router-dom";

class containAboutProductBlock  {
    constructor(img,title, subtitle, price){
        this.img = img;
        this.title = title;
        this.subtitle = subtitle;
        this.price = price;
    }
    apb = 'productApp__apb';
    apbBody = 'productApp__apb-body';
    apbImg = 'productApp__apb-img';
    apbTitle = 'productApp__apb-title';
    apbSubtitle = 'productApp__apb-subtitle';
    apbPrice = 'productApp__apb-price';
}

const productAppPelletsWhite = new  containAboutProductBlock (
    require('../src/img/OurProduct/pellets.png'),
    'White 15 kg / big bags',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);

const productAppPelletsBlack = new  containAboutProductBlock (
    require('../src/img/OurProduct/pellets.png'),
    'Dark 15 kg / big bags',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);

const productAppBriquettesConiferous = new  containAboutProductBlock (
    require('../src/img/OurProduct/briquettes.png'),
    'Coniferous briquettes',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);
const productAppBriquettesBirch = new  containAboutProductBlock (
    require('../src/img/OurProduct/briquettes.png'),
    'Birch briquettes',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);


const productAppBoardsConifer = new  containAboutProductBlock (
    require('../src/img/OurProduct/boards.png'),
    'Conifer',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);

const productAppBoardsLarch = new  containAboutProductBlock (
    require('../src/img/OurProduct/boards.png'),
    'Larch',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);
const productAppBoardsBoarding = new  containAboutProductBlock (
    require('../src/img/OurProduct/boards.png'),
    'Boarding products',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);

const productAppBoardsPlanken = new  containAboutProductBlock (
    require('../src/img/OurProduct/boards.png'),
    'Planken',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);
const productAppBoardsTimber = new  containAboutProductBlock (
    require('../src/img/OurProduct/boards.png'),
    'Timber',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);
const productAppBoardsLinings  = new  containAboutProductBlock (
    require('../src/img/OurProduct/boards.png'),
    'Linings',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);
const productAppBoardsOSB = new  containAboutProductBlock (
    require('../src/img/OurProduct/boards.png'),
    'OSB board',
    'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
    'from 300$'
);

const toRedButtonfromProductAppPellets = {
    link: '/Product/Pellets',
    txt: 'More info',
    redbutton: 'productApp__redbutton',
    redbuttonLink: 'productApp__redbutton-link',
};
const toRedButtonfromProductAppBriquettes = {
    link: '/Product/Briquettes',
    txt: 'More info',
    redbutton: 'productApp__redbutton',
    redbuttonLink: 'productApp__redbutton-link',
};
const toRedButtonfromProductAppBoards = {
    link: '/Product/Boards',
    txt: 'More info',
    redbutton: 'productApp__redbutton',
    redbuttonLink: 'productApp__redbutton-link',
};


function ProductApp () {
    return (
<>
<Outlet/>
        <div className="productApp">
            <div className="productApp__container _container">
                <div className="productApp__body">
                    <div className="productApp__direction">Main / Product</div>
                    <div className="productApp__title">Our products</div>
                    <div className="productApp__window"></div>
                    <div className="productApp__catalog">
                        <div className="productApp__row">
                            <div className="catalog__item">
                                <div className="catalog__title">Pellets</div>
                                <div className="catalog__body">
                                    <AboutProductBlock style={productAppPelletsWhite} contain={productAppPelletsWhite} redbutton={toRedButtonfromProductAppPellets}/>
                                    <AboutProductBlock style={productAppPelletsBlack} contain={productAppPelletsBlack} redbutton={toRedButtonfromProductAppPellets}/>
                                </div>
                            </div>
                            <div className="catalog__item">
                                <div className="catalog__title">Briquettes</div>
                                <div className="catalog__body">
                                    <AboutProductBlock style={productAppBriquettesConiferous} contain={productAppBriquettesConiferous} redbutton={toRedButtonfromProductAppBriquettes}/>
                                    <AboutProductBlock style={productAppBriquettesBirch} contain={productAppBriquettesBirch} redbutton={toRedButtonfromProductAppBriquettes}/>
                                </div>
                            </div>
                        </div>
                        <div className="productApp__row">
                            <div className="catalog__item">
                                <div className="catalog__title">Boards</div>
                                <div className="catalog__body">
                                    <AboutProductBlock style={productAppBoardsConifer} contain={productAppBoardsConifer} redbutton={toRedButtonfromProductAppBoards}/>
                                    <AboutProductBlock style={productAppBoardsLarch} contain={productAppBoardsLarch} redbutton={toRedButtonfromProductAppBoards}/>
                                    <AboutProductBlock style={productAppBoardsBoarding} contain={productAppBoardsBoarding} redbutton={toRedButtonfromProductAppBoards}/>
                                    <AboutProductBlock style={productAppBoardsPlanken} contain={productAppBoardsPlanken} redbutton={toRedButtonfromProductAppBoards}/>
                                </div>
                            </div>
                        </div>
                        <div className="productApp__row">
                        <div className="catalog__item">
                            {/* <div className="catalog__title">Boards</div> */}
                                <div className="catalog__body">
                                    <AboutProductBlock style={productAppBoardsTimber} contain={productAppBoardsTimber} redbutton={toRedButtonfromProductAppBoards}/>
                                    <AboutProductBlock style={productAppBoardsLinings} contain={productAppBoardsLinings} redbutton={toRedButtonfromProductAppBoards}/>
                                    <AboutProductBlock style={productAppBoardsOSB} contain={productAppBoardsOSB} redbutton={toRedButtonfromProductAppBoards}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <FormCallback />
</>
    );
}

export default ProductApp;