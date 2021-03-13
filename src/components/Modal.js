import React from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import { ButtonContainer } from './StyledButtons';
import { Link } from 'react-router-dom';

const Modal = () => {
  const {
    detailProduct: { title, img, price },
    closeModal,
    isModalOpen,
  } = useGlobalContext();

  if (!isModalOpen) {
    return null;
  }
  return (
    <ModalWrapper>
      <div className='container '>
        <div className='row'>
          <div
            id='modal'
            className='col-8 mx-auto col-md-6 
            col-lg-4 text-center text-capitalize py-5'
          >
            <h5>item added to cart</h5>
            <img src={img} alt={title} className='img-fluid' />
            <h5>{title}</h5>
            <h5 className='text-muted'>price: ${price}</h5>
            <div>
              <ButtonContainer onClick={() => closeModal()}>
                store
              </ButtonContainer>
              <Link to='/cart'>
                <ButtonContainer cartBtn onClick={() => closeModal()}>
                  go to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    border-radius: 0.3rem;
  }
`;

export default Modal;
