import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import Favorite from './pages/Favorite/favorite';
import NotFound from './pages/NotFound/notFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/favorite" element={<Favorite />} /> */}
        <Route path="*" element={<NotFound />} /> {/* マッチするルートがない場合の処理 */}
      </Routes>
    </Router>
  );
}

export default App;
