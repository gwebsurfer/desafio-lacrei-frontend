import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Home from '../pages/Home/Home';
import PessoaUsuaria from '../pages/PessoaUsuaria/PessoaUsuaria';
import Profissional from '../pages/Profissional/Profissional';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pessoa-usuaria' element={<PessoaUsuaria />} />
        <Route path='/profissional' element={<Profissional />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
