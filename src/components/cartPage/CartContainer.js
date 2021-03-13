import React from 'react';
import Title from '../Title';
import EmptyCart from './EmptyCart';
import Cart from './Cart';
import { useGlobalContext } from '../../context';
import CartFooter from './CartFooter';

const CartContainer = () => {
  const { cart } = useGlobalContext();
  if (cart.length > 0) {
    return (
      <div className='container'>
        <Title name='your' title='cart' />
        {cart.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
        <CartFooter />
      </div>
    );
  }
  return (
    <section>
      <EmptyCart />
    </section>
  );
};

export default CartContainer;
