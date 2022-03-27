import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {cart} = props;
    const {chooseAgain} = props;
    
    
    return (
        <div>
            {
                cart.map(product => (
                    <div className='cart'>
                        <h3>Name: {product.name}</h3>
                    </div>
                ) )
                
            }
            <div>
            
            <button onClick={chooseAgain()}>Choose Again </button>

            </div>
            
        </div>
    );
};

export default Cart;