import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className='prdct_dtls'>
      <img src={product.image} alt={product.title} />
      <h2 className='pr_title'>{product.title}</h2>
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Description:</b> {product.description}</p>
      <div className="btns">
      <button>Buy Now</button>
      <button className='btnr'>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;