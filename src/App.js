/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import { Routes,Route } from "react-router-dom";
import PopUp from "./components/Form/PopUp";


import './styles/null.css';
import './styles/App.scss';



import MainApp from './MainApp';
import ProductApp from './ProductApp';
import AboutusApp from './AboutusApp';
import ContactApp from './ContactApp';
import CertificatesApp from './CertificatesApp';
import CurrentProduct from "./components/CurrentProduct";
import Layout from "./Layout";




const currentProductPellets = {
  productNum: '1',
  productPrice: '300',
  sliderImg: require('../src/img/OurProduct/pellets.png'),
}
const currentProductBriquettes = {
  productNum: '1',
  productPrice: '300',
  sliderImg: require('../src/img/OurProduct/briquettes.png'),
}
const currentProductBoards = {
  productNum: '1',
  productPrice: '300',
  sliderImg: require('../src/img/OurProduct/boards.png'),
}



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

const containAboutProductBlockSliderPellets = new  containAboutProductBlock (
  require('../src/img/OurProduct/pellets.png'),
  'Pellets',
  'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
  'from 300$'
);
const containAboutProductBlockSliderBriquettes = new  containAboutProductBlock (
  require('../src/img/OurProduct/briquettes.png'),
  'Briquettes',
  'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
  'from 300$'
);
const containAboutProductBlockSliderBoards = new  containAboutProductBlock (
  require('../src/img/OurProduct/boards.png'),
  'Boards',
  'A brief description of the product, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text, here is a stock for a new text...',
  'from 300$'
);



function App() {
    
  
  
  



  return (
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="Main/*" element={<MainApp />}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
            <Route path="Product/*" element={<ProductApp />}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
            <Route path="About/*" element={<AboutusApp />}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
            <Route path="Contact/*" element={<ContactApp />}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
            <Route path="Certificates/*" element={<CertificatesApp />}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
            <Route path="Product/Pellets/*" element={<CurrentProduct currentProduct={currentProductPellets} containAboutProductBlockSlider={containAboutProductBlockSliderPellets}/>}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
            <Route path="Product/Briquettes/*" element={<CurrentProduct currentProduct={currentProductBriquettes} containAboutProductBlockSlider={containAboutProductBlockSliderBriquettes}/>}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
            <Route path="Product/Boards/*" element={<CurrentProduct currentProduct={currentProductBoards} containAboutProductBlockSlider={containAboutProductBlockSliderBoards}/>}>
              <Route path="callback" element={<PopUp/>}/>
            </Route>
          </Route>
          <Route path="*" element={<MainApp />} />
        </Routes>
  );
}



export default App;
