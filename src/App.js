import './css/App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';
import Header from './components/header/header';
import Fiche from './pages/fiche/fiche'; 
import Footer from './components/footer/footer';
import Error from './pages/error/error'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;