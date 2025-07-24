import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ScrollToTop from './pages/ScrollToTop';

import Main from './pages/Main/Main'; // دي الصفحة اللي فيها كل الأقسام مجتمعة
import Other from './pages/Other/other'; // الصفحة التانية اللي عايزاها

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;
