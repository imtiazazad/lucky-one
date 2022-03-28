import React from 'react';
import './Cart.css';

const Cart = ({cart, allreset, random, randomCart}) => {
    console.log(randomCart);
    
    return (
        <div className='cart'>
            {
                cart.map(product => (
                    <div className='cart'>
                        <h3>Name: {product.name}</h3>
                    </div>
                ) )
            }
            <div>
            <h3>Random Product: {randomCart.name}</h3>
            <button onClick={()=>random(cart)}>Choose 1 for me </button>
            <button onClick={allreset} >Choose Again </button>
            </div>
        </div>
    );
};

export default Cart;