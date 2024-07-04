import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  // ! Then by this id we can make a request to our backend ans so on...
  const { productId } = useParams();
  return <div>Product - {productId}</div>;
};

export default Product;
