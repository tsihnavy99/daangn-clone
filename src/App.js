import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Fleamarket from './pages/Fleamarket';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fleamarket" element={<Fleamarket/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
