const initHome = {
  event: [],
  kabelData: [],
  powerbank: [],
  handsfree: [],
  speaker: [],
  travelCharger: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_EVENT') {
    return {
      ...state,
      event: action.value,
    };
  }
  if (action.type === 'SET_KABEL_DATA') {
    return {
      ...state,
      kabelData: action.value,
    };
  }
  if (action.type === 'SET_POWERBANK') {
    return {
      ...state,
      powerbank: action.value,
    };
  }
  if (action.type === 'SET_HANDSFREE') {
    return {
      ...state,
      handsfree: action.value,
    };
  }
  if (action.type === 'SET_SPEAKER') {
    return {
      ...state,
      speaker: action.value,
    };
  }
  if (action.type === 'SET_TRAVEL_CHARGER') {
    return {
      ...state,
      travelCharger: action.value,
    };
  }
  return state;
};
