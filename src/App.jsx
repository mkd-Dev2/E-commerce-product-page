import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductDetailsPage from './components/ProductDetailsPage';
import ProductsPage from './components/ProductsPage';
import Search from './components/Search';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
 const handleSearch = (query) => {
    setSearchQuery(query);
  }
  return (
    <Router>
      <div className="App">
        <Search onSearch={handleSearch}  searchQuery={searchQuery} />
        <Routes>
          <Route path="/" element={<ProductsPage searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
