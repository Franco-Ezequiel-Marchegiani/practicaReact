import React from 'react';
import Header from './header';
import Banner from './banner';
import ProductList from './productList';
import Footer from './footer';
function Web(){
  return (
    <div className="container">
     <Header/>
     <Banner/>
     <ProductList/>
     <Footer/>
    </div>
  )

}
export default Web;