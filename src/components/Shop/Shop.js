import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomCart, setRandomCart] = useState ([]);

    useEffect( () =>{
        fetch('products.json')
        .then( res => res.json())
        .then(data => setProducts(data))
    },[])

    const allreset = () => {
        setCart([])
    }

    const random = (cart) =>{
        console.log(cart);
        const rand = Math.floor(Math.random()* cart.length)
        setRandomCart(cart[rand])
        console.log(rand);
    }

    const addToCart = (product) =>{
        
        if(cart.length < 4) {
            const exist = cart.find( (products)=> (products.id) === product.id)
            if(!exist){
                const newCart = [...cart, product];
                setCart(newCart)
            }
        }
        else{
               alert('you cant add more than 4 items')
        }
        
       }
       
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart  key={cart.id} cart={cart} random={random} randomCart={randomCart} allreset={allreset} ></Cart>
            </div>
        </div>
    );
};

export default Shop;