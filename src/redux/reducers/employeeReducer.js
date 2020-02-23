import {
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_FAILURE
} from "../actions/types";

const initialState = {
  employees: [],
  loading: false,
  error: ''
}

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return { ...state, loading: true};
    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, employees: action.payload, loading: false};
    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, employees: [], loading: false, error: action.payload};
    default:
      return state;
  }
};

export default employeeReducer;