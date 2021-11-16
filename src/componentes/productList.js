import React from 'react';
import Product from './product';
import imageProduct1 from '../assets/img/reloj1.jpg';
import imageProduct2 from '../assets/img/reloj2.jpg';
import imageProduct3 from '../assets/img/reloj3.jpg';
import imageProduct4 from '../assets/img/reloj4.jpg';
function ProductList(){
  return (
    <main class="productos"> 
     <Product title="Lorem, ipsum." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?" price="Precio: $450" image={imageProduct1} />
     <Product title="Lorem, ipsum." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?" price="Precio: $650" image={imageProduct2}/>
     <Product title="Lorem, ipsum." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?" price="Precio: $850" image={imageProduct3}/>
     <Product title="Lorem, ipsum." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?" price="Precio: $990" image={imageProduct4}/>
    </main>
  )

}
export default ProductList;