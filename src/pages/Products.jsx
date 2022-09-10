import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {response} from "../data/response";


export const Products = () => {


  const [cart, setCart] = useState(0);

  const handleAdd = () => {
    setCart(cart+1);
  }

  return (
    <div>
      <div className='navbarbtn'>
        <Link to="/cart">
          <div 
            className='btnnavcart'
          > 
            <i class="fa-sharp fa-solid fa-cart-shopping"></i> 
            {cart} 
          </div>
        </Link>
      </div>
       {response && <div className='main-container animate__animated animate__fadeIn'>
        {
          response.map((product) => {
            return(
              <div key={product.id}  className="card-product" >
                 <Link to={`/product/${product.id}`}>
                <img 
                  src={product.image_url}
                  alt={product.title}
                />
                <div className='divdescription'>
                  <div className='producttxt'>{product.title} </div>
                  <div className='description1'>{product.short_description} </div>
                  <div className='pricetxt'>${product.price} </div>
                </div>
                </Link>
                  <div className='pricetxtnew'>${(product.price - product.discount)} </div>
                <div> <button 
                  className="btn btn-outline-primary"
                  onClick={handleAdd}
                >Add to Cart</button> </div>
              </div>
            )
          })
        }
      </div>}
    </div>
  )
}
