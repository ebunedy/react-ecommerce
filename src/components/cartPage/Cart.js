import React from 'react';
import styled from 'styled-components';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { ButtonContainer } from '../StyledButtons';
import { useGlobalContext } from '../../context';

const Cart = ({ id, img, title, price, count }) => {
  const { removeItem, toggleCount } = useGlobalContext();
  return (
    <CartWeapper>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <h6>
          Price
          <span className=' text-main-brown'> ${price}</span>
        </h6>
        <ButtonContainer
          cartBtn
          className='remove-btn'
          onClick={() => removeItem(id)}
        >
          remove
        </ButtonContainer>
      </div>
      <div className='btn'>
        <ButtonContainer
          cartBtn
          className='arrow up'
          onClick={() => toggleCount(id, 'inc')}
        >
          <FaAngleUp />
        </ButtonContainer>
        <h6 className='amount'>{count}</h6>
        <ButtonContainer
          cartBtn
          className='arrow down'
          onClick={() => toggleCount(id, 'dec')}
        >
          <FaAngleDown />
        </ButtonContainer>
      </div>
    </CartWeapper>
  );
};

const CartWeapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }
  .amount {
    text-align: center;
    margin-top: 0.5rem 0 0 0;
    font-size: 1.25rem;
    line-height: 1;
  }
  .arrow {
    margin: none;
    border: none;
    font-size: 1.5rem;
    padding: 0 0 0 0.3rem;
    margin-top: 0;
  }
  .down {
    margin-top: 0;
  }
  .remove-btn {
    font-size: 1rem;
    margin-top: 0.3rem;
  }
`;

export default Cart;
