import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import About from './components/about/About';
import Cover from './components/cover/Cover';
import Menu from './components/menu/Menu';
import Steps from './components/steps/Steps';
import Work from './components/work/Work';
import './style.css';
import CarouselTools from './components/tools/CarouselTools';
import CarouselProjects from './components/carousel/CarouselProjects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
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
