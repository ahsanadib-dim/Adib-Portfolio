/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Jersiqo from '@/pages/Jersiqo';
import DigitalContent from '@/pages/DigitalContent';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <CustomCursor />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jersiqo" element={<Jersiqo />} />
            <Route path="/digital-content" element={<DigitalContent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

