import './App.css';
import Calculator from './components/calculator/Calculator';
import Header from './components/header/Header';
import OurJob from './components/ourJob/OurJob';
import MySwiper from './components/MySwiper/MySwiper';
import Gmap from './components/Gmap/Gmap';
import OurWorkers from './components/OurWorkers/OurWorkers';
import Footer from './components/footer/Footer';
import Coments from './components/coments/Coments';
import AboutCompany from './components/AboutCompany/AboutCompany';
import CeilingTypes from './components/CeilingTypes/CeilingTypes';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <MySwiper/>
      <Calculator/>
      <CeilingTypes/>
      <OurJob/>
      <Coments/>
      <Gmap/>
      <OurWorkers/>
      <AboutCompany/>
      <Footer/>
    </div>
  );
}

export default App;
