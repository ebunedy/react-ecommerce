import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import PropTypes from 'prop-types';

const Product = ({ id, title, img, price, inCart }) => {
  const { addToCart, openModal, handleDetailPage } = useGlobalContext();
  return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <div className='card'>
        <div className='img-container p-5' onClick={() => handleDetailPage(id)}>
          <Link to='/details'>
            <img src={img} alt={title} className='card-img' />
          </Link>
          <button
            className='cart-btn'
            disabled={inCart ? true : false}
            onClick={() => {
              addToCart(id);
              openModal(id);
            }}
          >
            {inCart ? (
              <p className='text-capitalize mb-0' disabled>
                in cart
              </p>
            ) : (
              <i className='fa fa-cart-plus' />
            )}
          </button>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className='text-main-brown font-italic mb-0'>
            <span className='mr-1'>${price}</span>
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inCart: PropTypes.bool.isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s ease-in-out;
  }
  .card-footer {
    background: var(--mainBlue);
    border-top: 2px solid var(--mainWhite);
    transition: all 1s linear;
    p {
      color: var(--mainWhite);
    }
  }
  &:hover {
    .card {
      box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 2rem;
    right: 0;
    padding: 0.1rem 0.3rem;
    font-size: 1.4rem;
    background: transparent;
    border-radius: 0.6rem 0 0 0;
    border: 1px solid var(--lightShadeBrown);
    color: var(--lightShadeBrown);
    transform: translate(200%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0);
  }
`;

export default Product;
