import React from 'react';
import { ButtonContainer } from '../StyledButtons';
import { useGlobalContext } from '../../context';
import styled from 'styled-components';

const CartFooter = () => {
  const { total, clearCart } = useGlobalContext();
  return (
    <FooterWrapper>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${total}</span>
        </h4>
      </div>
      <ButtonContainer
        cartBtn
        className='clear-btn'
        onClick={() => clearCart()}
      >
        clear cart
      </ButtonContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  .cart-total h4 {
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 0;
  }
  .cart-total {
  }
  .clear-btn {
    position: relative;
    left: 45%;
    width: 6rem;
    font-size: 1rem;
    margin-top: 1rem;
    margin-right: 0;
  }
`;

export default CartFooter;
