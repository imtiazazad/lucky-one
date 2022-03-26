import React from 'react';
import './product.css'

const Product = (props) => {
    
    const {name, img, price} = props.product;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3 className='product-name'>Name: {name}</h3>
            <h4>Price: {price}</h4>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn'>Add to Cart</button>
        </div>
    );
};

export default Product;