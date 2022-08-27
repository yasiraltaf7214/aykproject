import Home from './Component/Home';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio';
import Testimonial from './Component/Testimonial';
import AppBarUI from './Component/AppBarUI';
import Footer from './Component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
        <BrowserRouter>
          <AppBarUI />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
