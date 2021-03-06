import { LOAD_CATEGORIES_CHARGES_SUCCESS, REMOVE_CATEGORY_CHARGES_SUCCESS,
  LOAD_CATEGORIES_INCOMES_SUCCESS,
  REMOVE_CATEGORY_INCOMES_SUCCESS, ADD_CHARGE_DATA_SUCCESS,
  ADD_INCOME_DATA_SUCCESS,
  GET_CHARGES_FROM_SUCCESS,
  GET_INCOMES_FROM_SUCCESS } from '../actions/home.actions';

const initialState = {
  charges: [],
  incomes: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_CHARGES_SUCCESS: {
      return {
        ...state,
        charges: [...action.payload],
      };
    }
    case REMOVE_CATEGORY_CHARGES_SUCCESS: {
      return {
        ...state,
        charges: state.charges.filter(charge => charge.id !== action.payload),
      };
    }
    case LOAD_CATEGORIES_INCOMES_SUCCESS: {
      return {
        ...state,
        incomes: [...action.payload],
      };
    }
    case REMOVE_CATEGORY_INCOMES_SUCCESS: {
      return {
        ...state,
        incomes: state.incomes.filter(charge => charge.id !== action.payload),
      };
    }
    case ADD_CHARGE_DATA_SUCCESS: {
      return {
        ...state, charges: [...state.charges, action.payload.data.data],
      };
    }
    case ADD_INCOME_DATA_SUCCESS: {
      return {
        ...state, incomes: [...state.incomes, action.payload.data.data],
      };
    }
    case GET_CHARGES_FROM_SUCCESS: {
      return {
        ...state,
        charges: action.payload,
      };
    }
    case GET_INCOMES_FROM_SUCCESS: {
      return {
        ...state,
        incomes: action.payload,
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
