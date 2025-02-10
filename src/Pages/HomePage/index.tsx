import React, { useState } from "react";
import Navbar from "../../Components/Navbar/index.tsx";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../assets/Loading.gif";

import { InputAdornment, TextField } from "@mui/material";
import {
  deleteEmployeeRequest,
  getEmployeeRequest,
  getSingleEmployee,
  searchEmployee,
} from "../../redux/actions.tsx";

const HomePage = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const employeeData = useSelector(
    (state: any) => state.employee.filteredEmployeeData
  );

  const employeeDataLoading = useSelector(
    (state: any) => state.employee.employeeGetLoading
  );

  
  const [search, setSearch] = useState("");

  useEffect(() => {
      dispatch(getEmployeeRequest());
    
  }, [ dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value; // Get value from input
    setSearch(searchValue); // Update state (optional, depending on your use case)
    dispatch(searchEmployee(searchValue)); // Dispatch the search value directly
  };

  const handleDelete = (id: number) => {
    dispatch(deleteEmployeeRequest(id));
  };
  const handleEdit=(id:number)=>{

    dispatch(getSingleEmployee(id));
     navigate("/addEmployee")


  }

  return (
    <div>
      <div className="navbar-div">
        <Navbar />
      </div>

      <div className="table-container">
        <div className="table-inner-container">
          <div className="Search-container">
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={search}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {employeeDataLoading ? (
            <div className="table-body">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={8} className="loader-td">
                      <div className="loader-div">
                        <img
                          src={Loader}
                          alt="Loading..."
                          className="img-loader"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="table-body">
              <table className="styled-table">
                <thead className="sticky-header">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData?.map((elem, index) => (
                    <tr className="active-row" key={elem.id}>
                      <td>{elem.first_name}</td>
                      <td>{elem.last_name}</td>
                      <td>{elem.email}</td>
                      <td>
                        <CiEdit size={24}
                         style={{
                          cursor: "pointer",
                          zIndex: 101,
                          position: "relative",
                          pointerEvents: "auto",
                        }}
                        onClick={()=>handleEdit(index+1)} />
                      </td>
                      <td style={{ zIndex: 100 }}>
                        <MdDelete
                        size={24}
                          style={{
                            color:"red",
                            cursor: "pointer",
                            zIndex: 101,
                            position: "relative",
                            pointerEvents: "auto",
                          }}
                          onClick={() => handleDelete(index + 1)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
