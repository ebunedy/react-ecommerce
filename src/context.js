import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';
import { storeProducts, detailProduct } from './data';

const AppContext = React.createContext();

const defaultState = {
  products: storeProducts,
  detailProduct,
  cart: [],
  isModalOpen: false,
  total: 0,
  amount: 0,
  cartTax: 0,
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleDetailPage = (id) => {
    dispatch({ type: 'DETAIL_PAGE', payload: id });
  };

  const openModal = (id) => {
    dispatch({ type: 'OPEN_MODAL', payload: id });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const addToCart = (id) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: id });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const toggleCount = (id, type) => {
    dispatch({ type: 'TOGGLE_COUNT', payload: { id, type } });
  };
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleDetailPage,
        openModal,
        closeModal,
        addToCart,
        clearCart,
        removeItem,
        toggleCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { ProductProvider, useGlobalContext };
