import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from '../redux/actions/';

const EmployeeList = ({employees, fetchEmployees}) => {
  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])
  return(
    employees.loading ? (
      <h2>Loading</h2>
    ) : (
      <div>
      <h2>Employees List</h2>
          {
            employees.employees.map(e => <p key={e.id}>{e.employee_name}</p>)
          }
      </div>
    )
  )


};

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList)

