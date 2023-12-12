import React from 'react';
import CaixaDeTextoInterativa from './components/vetor'; // Corrigindo a importação
import './components/vetor.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from'./components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />

      <CaixaDeTextoInterativa />

      <Footer />
    </div>
  );
}

export default App;
