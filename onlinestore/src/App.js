import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;