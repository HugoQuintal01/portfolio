import React from 'react';

import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import About from './components/about/About';
import Cover from './components/cover/Cover';
import Menu from './components/menu/Menu';
import Steps from './components/steps/Steps';
import Work from './components/work/Work';
import CarouselTools from './components/tools/CarouselTools';
import CarouselProjects from './components/carousel/CarouselProjects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import NewCursor from './components/cursor/NewCursor';
import Anchor from './components/anchor/anchor';



function App() {
  return (
    <div className="App">
            <NewCursor />
            <Anchor />
            <Menu />
            <Cover />
            <CarouselTools />
            <About />
            <Steps />
            <CarouselProjects />
            <Work />
            <Contact />
            <Footer />
    </div>
  );
}

export default App;