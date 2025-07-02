const SET_RATES = "rates/setRates";

const initialState = {};

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATES:
      return action.payload || state;
    default:
      return state;
  }
};

export const setRates = (rates) => ({
  type: SET_RATES,
  payload: rates,
});
