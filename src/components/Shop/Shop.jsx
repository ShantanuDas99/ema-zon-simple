import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    // step1: get id
    for (const id in storedCart) {

      // step2: get the product by id
      const addedProduct = products.find((product) => product.id === id);
    //   console.log(addedProduct);
      
      // step3: set quantity
      if (addedProduct) {
        const quantity = storedCart[id];

        // step4: add the added product 
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    
    // step5: set the cart 
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];

    const exist = cart.find(pd => pd.id === product.id);
    if(!exist){
        product.quantity = 1;
        newCart = [...cart, product];
    }
    else{
        exist.quantity = exist.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id);
        newCart = [...remaining, exist];
    }


    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
