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
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={AboutUs} />
      <Route exact path="/Team/" component={Team} />
      <Route exact path="/Speciality/" component={Speciality} />
      <Route exact path="/Resources/" component={Resources} />
      <Route exact path="Achievement/" component={Achievement} />
      <Navbar />
      <Header />
      <Footer />
      
    </div>
  );
}

export default App;
