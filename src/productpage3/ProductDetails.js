
import './ProductDetails.css'


import React, { useEffect, useState } from 'react';



function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(data =>setProducts(data) )
    
  }, []);

  return (
   
  
<section class="new-arrivals">
<h1>New Arrivals</h1>
<div class="card-container">
  {products.map((pro)=>(

<div class="card">
<div class="label">NEW</div>
<img src= {pro.image} alt="Skullcandy - Crusher ANC 2 Wireless Headphones" class="card-image" />
<div class="card-body">
    <h2> {pro.title.slice(0,15)}...</h2>
    <p className="price">Price:<span>{pro.price}</span> </p>
    <button class="add-to-cart">Add to cart</button>
</div>
</div>

  ))}
  
</div>
</section>
  );
}

export default ProductList;
