import { Routes, Route, useParams } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import './App.css';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
