import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name, img, price, ratings, seller} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6> 
                <p className='subtitle'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>    
            </div>
            <button className='add-cart' onClick={()=> handleAddToCart(props.product)}>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>        
        </div>
    );
};

export default Product;         