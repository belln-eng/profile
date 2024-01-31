import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/home';
import Favorite from './pages/Favorite/favorite';
import NotFound from './pages/NotFound/notFound';
import { initBody } from './utility/initBody'
import { Home2 } from './pages/Home/home2';

function App() {
  useEffect(() => {
    initBody();
  }, []);

  return (
    <Router>
      {/* <Router basename="/profile"> */}
      <Routes>
        <Route path="/" element={<Home2 />} />
        {/* <Route path="/favorite" element={<Favorite />} /> */}
        <Route path="*" element={<NotFound />} /> {/* マッチするルートがない場合の処理 */}
      </Routes>
    </Router>
  );
}

export default App;
