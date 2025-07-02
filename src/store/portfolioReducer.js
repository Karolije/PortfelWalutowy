const ADD_POSITION = "portfolio/addPosition";
const REMOVE_POSITION = "portfolio/removePosition";
const LOAD_POSITIONS = "portfolio/loadPositions";

const LS_KEY = "portfolioPositions";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem(LS_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.warn("Błąd ładowania localStorage", e);
  }
  return [];
};

const saveToLocalStorage = (positions) => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(positions));
  } catch (e) {
    console.warn("Błąd zapisu localStorage", e);
  }
};

const initialState = loadFromLocalStorage();

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSITION:
      const newStateAdd = [...state, action.payload];
      saveToLocalStorage(newStateAdd);
      return newStateAdd;

    case REMOVE_POSITION:
      const newStateRemove = state.filter((pos, i) => i !== action.payload);
      saveToLocalStorage(newStateRemove);
      return newStateRemove;

    case LOAD_POSITIONS:
      return action.payload || [];

    default:
      return state;
  }
};

export const addPosition = (position) => ({
  type: ADD_POSITION,
  payload: position,
});
export const removePosition = (index) => ({
  type: REMOVE_POSITION,
  payload: index,
});
export const loadPositions = (positions) => ({
  type: LOAD_POSITIONS,
  payload: positions,
});
