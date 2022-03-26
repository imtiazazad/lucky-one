import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css'

const Product = ({product, handleAddToCart}) => {
    const {name, img, price} = product;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3 className='product-name'>Name: {name}</h3>
            <h4>Price: {price}</h4>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn'><p>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        
        </div>
    );
};

export default Product;