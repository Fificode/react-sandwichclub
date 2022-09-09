import React from 'react'
// import {Routes, Route} from 'react-router-dom';
import Subscribe from './Subscribe'
import Header from './Header'
import Menu from './Menu'
import BookUs from './BookUs'
import Gallery from './Gallery'

const AppContainer = () => {
  return (
    <>
    <Header/>
    <Menu />
    <BookUs />
    <Gallery />
    <Subscribe />
    </>
    // <Routes>
    //    <Route path='/home'  element={<Header />} /> 
    //    <Route path='/menu' element={<Menu />} /> 
    //     <Route path='/catering-services' element={<BookUs />} /> 
    //      <Route  element={<Gallery />} />
    //      <Route  element={<Subscribe />} />
    // </Routes>
  )
}

export default AppContainer