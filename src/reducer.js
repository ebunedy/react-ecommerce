const reducer = (state, action) => {
  if (action.type === 'DETAIL_PAGE') {
    const detailPage = state.products.find(
      (item) => item.id === action.payload
    );
    return { ...state, detailProduct: detailPage };
  }
  if (action.type === 'OPEN_MODAL') {
    const modalPage = state.products.find((item) => item.id === action.payload);
    return { ...state, detailProduct: modalPage, isModalOpen: true };
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'ADD_ITEM_TO_CART') {
    const cartItem = state.products.find((item) => item.id === action.payload);
    cartItem.count = 1;
    cartItem.inCart = true;
    return { ...state, cart: [...state.cart, cartItem] };
  }
  if (action.type === 'CLEAR_CART') {
    const newProducts = state.products.map((item) => {
      if (item.inCart) {
        item.inCart = false;
      }
      return item;
    });
    return { ...state, products: newProducts, cart: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          item.inCart = false;
        }
        return item;
      })
      .filter((item) => item.inCart === true);
    return { ...state, cart: newCart };
  }
  if (action.type === 'TOGGLE_COUNT') {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            item.count = item.count + 1;
          }
          if (action.payload.type === 'dec') {
            item.count = item.count - 1;
          }
        }
        return item;
      })
      .filter((item) => {
        if (item.count === 0) {
          item.inCart = false;
        }
        return item.count !== 0;
      });
    return { ...state, cart: newCart };
  }
  if (action.type === 'GET_TOTAL') {
    const newCart = state.cart;
    if (newCart.length > 0) {
      const { total } = newCart.reduce(
        (cartTotal, cartItem) => {
          const { price, count } = cartItem;
          const totalAmount = price * count;
          cartTotal.total += totalAmount;
          return cartTotal;
        },
        { total: 0 }
      );
      return { ...state, total: total.toFixed(2) };
    }
    return { ...state };
  }
};

export default reducer;
