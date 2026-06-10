import { Route, Routes } from 'react-router-dom';
import { BrandNav } from './components/BrandNav';
import { SiteFooter } from './components/SiteFooter';
import Home from './pages/Home';
import Services from './pages/Services';
import MapPage from './pages/Map';
import Agency from './pages/Agency';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-800">
      <BrandNav />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/agency" element={<Agency />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
