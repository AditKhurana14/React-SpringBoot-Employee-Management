import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/index.tsx";
import InputBox from "../../Components/InputField/index.tsx"; // Make sure this path is correct
import "./style.css";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  getEmployeeRequest,
  registerEmployeeRequest,
  setEmployeeRegisterSuccessMsg,
  updateEmployeeRequest,
} from "../../redux/actions.tsx";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employeeRegisterSuccessMsg = useSelector(
    (state: any) => state.employee?.employeeRegisterSuccessMsg
  );
  const employeeSingleData = useSelector(
    (state: any) => state.employee.employeeSingleData
  );

  const employeeSingleloading = useSelector(
    (state: any) => state.employee.employeeSingleLoading
  );

  const employeeEditFlow = useSelector(
    (state: any) => state.employee.employeeEditFlow
  );

  const employeeUpdateSuccessMsg = useSelector(
    (state: any) => state.employee.employeeUpdateSuccessMsg
  );

  const { control, handleSubmit,reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    if(employeeEditFlow==true){
      dispatch(updateEmployeeRequest(employeeSingleData.id,data));


    }else{
      dispatch(registerEmployeeRequest(data))
    }
  };


  useEffect(() => {
    if (employeeRegisterSuccessMsg === "Employee saved successfully") {
      setTimeout(() => {
        navigate("/");
        dispatch(getEmployeeRequest());

        dispatch(setEmployeeRegisterSuccessMsg());
      }, 2000);
    }
    else if (employeeUpdateSuccessMsg ==="Employee Updated") {
      setTimeout(() => {
        navigate("/");
        dispatch(getEmployeeRequest());

        dispatch(setEmployeeRegisterSuccessMsg());
      }, 2000);
    }
  }, [employeeRegisterSuccessMsg,employeeUpdateSuccessMsg, dispatch, navigate]);


  useEffect(() => {
    if (employeeSingleData) {
      reset({
        first_name: employeeSingleData.first_name || "",
        last_name: employeeSingleData.last_name || "",
        email: employeeSingleData.email || "",
      });
    } else {
      reset({
        first_name: "",
        last_name: "",
        email: "",
      });
    }
  }, [employeeSingleData, reset]);

  return (
    <div>
      <div className="navbar-div">
        <Navbar />
      </div>
      <div className="form-heading-container">
        <div className="form-heading">Register Employee</div>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="first_name_container">
              {/* Add Controller for InputBox */}
              <Controller
                name="first_name" // Use your actual name
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <InputBox
                    label="First Name"
                    value={field.value||""}
                    onChange={field.onChange}
                    error={!!error}
                    helperText={error ? error.message : ""}
                  />
                )}
              />
            </div>
            <div className="last_name_container">
              {/* Add Controller for InputBox */}
              <Controller
                name="last_name" // Use your actual name
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <InputBox
                    label="Last Name"
                    value={field.value||""}
                    onChange={field.onChange}
                    error={!!error}
                    helperText={error ? error.message : ""}
                  />
                )}
              />
            </div>
            <div className="email_container">
              {/* Add Controller for InputBox */}
              <Controller
                name="email" // Use your actual name
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field, fieldState: { error } }) => (
                  <InputBox
                    label="Email"
                    value={field.value|| ""}
                    onChange={field.onChange}
                    error={!!error}
                    helperText={error ? error.message : ""}
                  />
                )}
              />
            </div>
            <div className="submit-btn-container">
              {!employeeEditFlow ? (
              <button className="btn-submit" type="submit">
               
                Submit
              </button>
               ):( <button className="btn-submit" type="submit">
               
                Update
              </button>)}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;
