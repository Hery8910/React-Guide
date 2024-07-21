
import React from 'react';
import { PageRoutes } from './PageRoutes';
import { NavBar } from './components/NavBar.jsx';
import { Footer } from './components/Footer';
import  './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
