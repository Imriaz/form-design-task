import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import AllEmployee from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllEmployee />
      {/* <Routes>
        <Route path="/" element={<AllEmployee />} />
        <Route path="AllEmployee" element={<Homepage />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/user" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
