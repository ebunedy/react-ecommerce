import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.38rem;
  background: transparent;
  color: ${(prop) =>
    prop.cartBtn ? 'var(--mainBlue)' : 'var(--lightShadeBrown)'};
  border: ${(prop) =>
    prop.cartBtn
      ? '1.5px solid var(--mainBlue)'
      : '1.5px solid var(--lightShadeBrown)'};
  border-radius: 0.4rem;
  cursor: pointer;
  margin: 1rem 0.3rem 0.2rem 0;
  transition: all 0.4s ease-in-out;
  outline: none;
  &:hover {
    background: var(--milkyWhite);
  }
`;
export const PhoneButton = styled.button`
  text-transform: capitalize;
  font-size: 3rem;
  background: transparent;
  color: var(--lightShadeBrown);
  border: none;
  cursor: pointer;
  margin: 0.2rem 0.3rem 0 0;
  transition: all 0.4s ease-in-out;
  outline: none;
  &:hover {
    color: var(--milkyWhite);
  }
`;
