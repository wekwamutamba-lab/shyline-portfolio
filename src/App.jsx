import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { ProjectDetail } from './pages/ProjectDetail';
import { WorkCategory } from './pages/WorkCategory';
import { Contact } from './pages/Contact';
import { StudioNotes } from './pages/StudioNotes';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />

      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:cat/:project" element={<ProjectDetail />} />
          <Route path="/work/:cat" element={<WorkCategory />} />
          <Route path="/notes" element={<StudioNotes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;