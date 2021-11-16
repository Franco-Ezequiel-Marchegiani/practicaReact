import React from 'react';
import imageProduct1 from '../assets/img/reloj1.jpg'
import imageProduct2 from '../assets/img/reloj1.jpg'
import imageProduct3 from '../assets/img/reloj1.jpg'
import imageProduct4 from '../assets/img/reloj1.jpg'
function Product(){
    let imagenes = [imageProduct1, imageProduct2, imageProduct3, imageProduct4]
  return (
    <article>
       <img src={imageProduct1} alt="Reloj"/>
       <h2>Lorem, ipsum.</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
        <h2>Precio: $450</h2>
        <button>Ver más</button>
    </article>
  )

}
export default Product;