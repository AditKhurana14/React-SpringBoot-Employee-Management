import produce from "immer";
import {
  EMPLOYEE_REGISTER_REQUEST,
  EMPLOYEE_REGISTER_SUCCESS,
  EMPLOYEE_REGISTER_FAILURE,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
  SEARCH_EMPLOYEE,
  EMPLOYEE_REGISTER_SUCCESS_MSG_REMOVE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
  GET_SINGLE_EMPLOYEE,
  GET_SINGLE_EMPLOYEE_SUCCESS,
  GET_SINGLE_EMPLOYEE_FAILURE,
  CLEAR_SINGLE_EMPLOYEE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
} from "./constants.tsx";
import { showErrorToast, showSuccessToast } from "../util/toastUtil.js";

const initialState = {
  loading: false,
  employeeData: null,
  error: null,
  employeeRegisterSuccessMsg: null,

  employeeGetLoading: false,
  employeeGetData: [],
  employeeGetError: null,

  employeeSearchString: null,
  filteredEmployeeData: [],

  employeeDeleteIdData: null,
  employeeDeleteLoading:false,
  employeeDeleteeError:null,
  employeeDeleteSuccessMsg:null,



  employeeSingleData:null,
  employeeSingleLoading:true,
  employeeSingleError:null,

  employeeUpdateData:null,
  employeeUpdateLoading:true,
  employeeUpdateError:null,
  employeeUpdateSuccessMsg:null,

  employeeEditFlow:false

};

const employeeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case EMPLOYEE_REGISTER_REQUEST:
        draft.loading = true;
        draft.error = null;
        draft.employeeData = action.payload;

        break;
      case EMPLOYEE_REGISTER_SUCCESS:
        draft.loading = false;
        draft.employeeData = action.payload;
        draft.employeeRegisterSuccessMsg = action.payload.message;
        break;
      case EMPLOYEE_REGISTER_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        showErrorToast(draft.error)

        break;

      // {*******************Get Employee*************************************************************}

      case GET_EMPLOYEE_REQUEST:
        draft.employeeGetLoading = true;
        draft.employeeGetData = [];
        draft.employeeGetError = null;

        break;

      case GET_EMPLOYEE_SUCCESS:
        draft.employeeGetLoading = false;
        draft.employeeGetData = action.payload;
        draft.filteredEmployeeData = action.payload;

        draft.employeeGetError = null;

        break;

      case GET_EMPLOYEE_FAILURE:
        draft.employeeGetLoading = false;
        draft.employeeGetData = [];
        draft.employeeGetError = action.payload;
        

        break;

      // {********************SEARCH EMPLOYEE******************************************}

      case SEARCH_EMPLOYEE:
        draft.employeeSearchString = action.payload.toLowerCase();

        if (action.payload.trim() == "") {
          draft.filteredEmployeeData = draft.employeeGetData;
        } else if (draft.employeeGetData?.length > 0) {
          const filteredData = draft.employeeGetData.filter((emp) =>
            // @ts-ignore
            emp.firstName?.toLowerCase().includes(action.payload.toLowerCase())
          );

          draft.filteredEmployeeData =
            filteredData.length > 0 ? filteredData : [];
        } else {
          draft.filteredEmployeeData = [];
        }
        break;

      // {***************************CleanRequest***********************************************}

      case EMPLOYEE_REGISTER_SUCCESS_MSG_REMOVE:
        draft.employeeRegisterSuccessMsg = null;
        draft.employeeUpdateSuccessMsg=null;

        case CLEAR_SINGLE_EMPLOYEE:
          draft.employeeSingleData=null;
          draft.employeeEditFlow=false;



        break;

      // {**********************Delete Employee***********************************************}

      case DELETE_EMPLOYEE_REQUEST:
        draft.employeeDeleteLoading = true;
        draft.error = null;
        draft.employeeDeleteIdData = action.payload;

        break;
        case DELETE_EMPLOYEE_SUCCESS:
          draft.employeeDeleteLoading = false;
          draft.error = null;
        
          console.log("DELETE_EMPLOYEE_SUCCESS Payload:", action.payload);
        
          if (typeof action.payload === "string") {
            draft.employeeDeleteSuccessMsg = action.payload; // Store message
            draft.employeeGetData = draft.employeeGetData.filter(
              //@ts-ignore
              (elem) => elem.id !== draft.employeeDeleteIdData
            );
            draft.filteredEmployeeData = draft.employeeGetData;
          } 
          break;
      

      case DELETE_EMPLOYEE_FAILURE:
        draft.employeeDeleteLoading = false;
        draft.employeeDeleteeError = action.payload;
        const errorMSg=draft.employeeDeleteeError
        showErrorToast(errorMSg)
        draft.employeeDeleteIdData = null
        break;


        // {***************************Get Single Employee**************************************************}

        case GET_SINGLE_EMPLOYEE:
          draft.employeeSingleLoading = true;
          draft.employeeSingleData = null;
          draft.employeeSingleError = null;
          draft.employeeEditFlow=true;

  
          break;
  
        case GET_SINGLE_EMPLOYEE_SUCCESS:
          draft.employeeSingleLoading = false;
          draft.employeeSingleData = action.payload;
          draft.employeeEditFlow=true
  
          draft.employeeSingleError = null;
  
          break;
  
        case GET_SINGLE_EMPLOYEE_FAILURE:
          draft.employeeSingleLoading = false;
          draft.employeeSingleData = null;
          draft.employeeSingleError = action.payload;
          draft.employeeEditFlow=false;

          
  
          break;

          // {*********************************Employee Update******************************************************}

          case UPDATE_EMPLOYEE_REQUEST:
            draft.employeeUpdateLoading = true;
            draft.employeeUpdateData = action.payload;
            draft.employeeUpdateError = null;
    
            break;
    
          case UPDATE_EMPLOYEE_SUCCESS:
            draft.employeeUpdateLoading = false;
            draft.employeeUpdateData = null;
    
            draft.employeeUpdateError = null;
            draft.employeeUpdateSuccessMsg=action.payload.message
            showSuccessToast(draft.employeeUpdateSuccessMsg)
    
            break;
    
          case UPDATE_EMPLOYEE_FAILURE:
            draft.employeeUpdateLoading = false;
            draft.employeeUpdateData = null;
            draft.employeeUpdateError = action.payload;
            
    
            break;


      default:
        return draft;
    }
  });

export default employeeReducer;
