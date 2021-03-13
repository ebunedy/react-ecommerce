import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PhoneButton, ButtonContainer } from './StyledButtons';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { cart } = useGlobalContext();
  return (
    <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
      <Link to='/'>
        <PhoneButton>
          <i className='fa fa-mobile' />
        </PhoneButton>
      </Link>

      <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
          <span className='mr-2'>
            <i className='fa fa-cart-plus' /> {cart.length}
          </span>
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.5);
  .navbar-brand {
    &:hover {
      color: var(--milkyWhite);
    }
  }
`;

export default Navbar;
