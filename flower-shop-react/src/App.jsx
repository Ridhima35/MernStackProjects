import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/ShopByCollections';
import Occasions from './pages/Occasions';
import Decor from './pages/Decor';
import City from './pages/City';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/collections' element={<Collections />} />
                        <Route path='/collections/:categoryId' element={<Collections />} />
                        <Route path='/Occasions' element={<Occasions />} />
                        <Route path='/Decor' element={<Decor />} />
                        <Route path='/City' element={<City />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
