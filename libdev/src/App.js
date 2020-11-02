import React, { useState, useEffect } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
