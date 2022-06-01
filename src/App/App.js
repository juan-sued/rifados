import '../css/reset.css';
import '../css/styles.css';
//imports css

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//imports react

import Home_Page from '../components/Home_Page/Home_Ṕage';
// import pages

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_Page />} />
      </Routes>
    </BrowserRouter>
  );
}
