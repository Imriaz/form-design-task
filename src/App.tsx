import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AddEmployee from './components/AddEmployee';
import AllEmployee from './components/Homepage/AllData/AllEmployee';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AllData from './components/Homepage/AllData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllEmployee />} />
        <Route path="AllEmployee" element={<AllData />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Homepage /> */}
      <Footer />
    </div>
  );
}

export default App;
