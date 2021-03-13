import React from 'react';
import Title from './Title';
import { useGlobalContext } from '../context';
import Product from './Product';

const ProductList = () => {
  const { products } = useGlobalContext();
  return (
    <div className='container'>
      <Title name='our' title='products' />
      <div className='row'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
