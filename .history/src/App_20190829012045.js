import React from 'react';
import Navbar from './components/layouts/Navbar';
import Footer from "./components/layouts/Footer";
import Header from './components/layouts/Header'
import './App.css';
import AboutUs from "./components/Pages/AboutUs";
import Team from './components/Pages/Team';
import Speciality from './components/Pages/Speciality';
import Resources from './components/Pages/Resources';
import Achievement from './components/Pages/Achievement';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Team />
      <Speciality />
      <Resources />
      <Achievement />
      <Navbar />
      <Header />
      <Footer />
      
    </div>
  );
}

export default App;
