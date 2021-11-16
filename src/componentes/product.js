import React from 'react';
function Product(props){
  return (
    <article>
       <img src={props.image} alt="Reloj"/>
       <h2>{props.title}</h2>
       <p>{props.description}</p>
        <h2>{props.price}</h2>
        <button>Ver más</button>
    </article>
  )

}
export default Product;