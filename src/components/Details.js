import React from 'react';
import { useGlobalContext } from '../context';
import { ButtonContainer } from './StyledButtons';
import { Link } from 'react-router-dom';

const Details = () => {
  const {
    detailProduct: { id, title, company, img, info, price, inCart },
    addToCart,
    openModal,
  } = useGlobalContext();
  return (
    <div className='container py'>
      <div className='row'>
        <div className='col-10 text-center mx-auto text-slanted my-5'>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
          <img className='img-fluid' src={img} alt={title} />
        </div>
        <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
          <h4>model: {title}</h4>
          <h5 className='text-title text-muted text-uppercase mt-3 mb-2'>
            made by: <span className='text-uppercase'>{company}</span>
          </h5>
          <h5 className='text-blue'>
            <strong>
              price: <span>$</span>
              {price}
            </strong>
          </h5>
          <p className='text-capitalize font-weight-bold mt-3 mb-0'>text</p>
          <p className='text-muted lead'>{info}</p>
          <div>
            <Link to='/'>
              <ButtonContainer>back home</ButtonContainer>
            </Link>
            <ButtonContainer
              cartBtn
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? 'in Cart' : 'add to cart'}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
