const initOrder = {
  orders: [],
  inProgress: [],
  pastOrders: [],
};

export const orderReducer = (state = initOrder, action) => {
  if (action.type === 'SET_ORDER') {
    return {
      ...state,
      orders: action.value,
    };
  }
  if (action.type === 'SET_IN_PROGRESS') {
    return {
      ...state,
      order: action.value,
    };
  }
  if (action.type === 'SET_PAST_ORDERS') {
    return {
      ...state,
      order: action.value,
    };
  }
  return state;
};
