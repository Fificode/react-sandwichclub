import React from 'react';
import BookUs from './containers/BookUs';
import Footer from './containers/Footer';
import Gallery from './containers/Gallery';
import Header from './containers/Header';
import Menu from './containers/Menu';
import Navbar from './containers/Navbar';
import Subscribe from './containers/Subscribe';


function App() {
  return (
    <>
     <Navbar />
     <Header />
     <Menu />
     <BookUs />
     <Gallery />
     <Subscribe />
     <Footer />
    </>
  );
}

export default App;
