import axios from 'axios';
import {
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_FAILURE
} from './types.js';

export const fetchEmployees = () => {
  return async dispatch => {
    dispatch(fetchEmployeesRequest());

    try {
      const employees = await axios.get(
        'http://dummy.restapiexample.com/api/v1/employees'
      );
      dispatch(fetchEmployeesSuccess(employees));
    } catch (error) {
      dispatch(fetchEmployeesFailure(error));
    }
  };
};

export const fetchEmployeesRequest = () => {
  return {
    type: FETCH_EMPLOYEES_REQUEST
  };
};
export const fetchEmployeesSuccess = employees => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees.data.data
  };
};
export const fetchEmployeesFailure = error => {
  return {
    type: FETCH_EMPLOYEES_FAILURE,
    payload: error.message
  };
};
