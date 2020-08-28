import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';

import './styles/style.css';

function App() {
  return (
    <>
      <Header />
      <div className='main-content'>
        <MainPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
