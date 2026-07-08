import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Occasions from './pages/Occasions';
import Decor from './pages/Decor';
import City from './pages/City';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/collections' element={<Collections />} />
                    <Route path='/Occasions' element={<Occasions />} />
                    <Route path='/Decor' element={<Decor />} />
                    <Route path='/City' element={<City />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

