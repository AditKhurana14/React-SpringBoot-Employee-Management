import {
  CLEAR_SINGLE_EMPLOYEE,
  DELETE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  EMPLOYEE_REGISTER_FAILURE,
  EMPLOYEE_REGISTER_REQUEST,
  EMPLOYEE_REGISTER_SUCCESS,
  EMPLOYEE_REGISTER_SUCCESS_MSG_REMOVE,
  GET_EMPLOYEE_FAILURE,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_SINGLE_EMPLOYEE,
  GET_SINGLE_EMPLOYEE_FAILURE,
  GET_SINGLE_EMPLOYEE_SUCCESS,
  SEARCH_EMPLOYEE,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
} from "./constants.tsx";

// {*********************************Register User**************************************************}

export const registerEmployeeRequest = (data) => ({
  type: EMPLOYEE_REGISTER_REQUEST,
  payload: data,

  
});

export const registerEmployeeSuccess = (employeeData) => ({
  type: EMPLOYEE_REGISTER_SUCCESS,
  payload: employeeData,
});

export const registerEmployeeFailure = (error) => ({
  type: EMPLOYEE_REGISTER_FAILURE,
  payload: error,
});



// {*****************Get Employees******************************************************************************}

export const getEmployeeRequest = () => ({
  type: GET_EMPLOYEE_REQUEST,
});

export const getEmployeeSuccess = (employees: any) => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload: employees,
});

export const getEmployeeFailure = (error: string) => ({
  type: GET_EMPLOYEE_FAILURE,
  payload: error,
});


// {*****************************SearchEmployee************************************************}

export const searchEmployee = (data) => ({
  type: SEARCH_EMPLOYEE,
  payload: data,
});

export const setEmployeeRegisterSuccessMsg = () => ({
  type: EMPLOYEE_REGISTER_SUCCESS_MSG_REMOVE,
});


// {**********************************Delete Employee******************************************************}

export const deleteEmployeeRequest = (id) => ({
  type: DELETE_EMPLOYEE_REQUEST,
  payload: id,
});

export const deleteEmployeeSuccess = (data) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: data,
});

export const deleteEmployeeFailure = (error) => ({
  type: DELETE_EMPLOYEE_FAILURE,
  payload: error,
});



// {************************************Get Single Employee*****************************************************************}

export const getSingleEmployee = (employeeId: number) => ({
  type: GET_SINGLE_EMPLOYEE,
  payload: employeeId,
});

export const getSingleEmployeeSuccess = (employeeData: any) => ({
  type: GET_SINGLE_EMPLOYEE_SUCCESS,
  payload: employeeData,
});

export const getSingleEmployeeFailure = (error: string) => ({
  type: GET_SINGLE_EMPLOYEE_FAILURE,
  payload: error,
});

// {****************************************Clean Autopoulate***************************************************}

export const cleanSingleEmployee = () => ({
  type: CLEAR_SINGLE_EMPLOYEE,
});


// {******************************************Update requst****************************************************************}
export const updateEmployeeRequest = (id,payload) => ({
  type: UPDATE_EMPLOYEE_REQUEST,
  payload:{id,payload},

});

export const updateEmployeeSuccess = (employeeData: any) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: employeeData,
});

export const updateEmployeeFailure = (error: string) => ({
  type: UPDATE_EMPLOYEE_FAILURE,
  payload: error,
});

