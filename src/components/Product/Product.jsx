import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name, img, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6> 
                <p className='subtitle'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>    
            </div>
            <button className='add-cart'>Add to cart</button>        
        </div>
    );
};

export default Product;         