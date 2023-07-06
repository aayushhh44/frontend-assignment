import React, { createContext, useState } from 'react';
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchProducts = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?title=${searchTerm}`
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetails = async (id) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StoreContext.Provider value={{ products, fetchProducts, searchProducts, getProductDetails, productDetails }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;