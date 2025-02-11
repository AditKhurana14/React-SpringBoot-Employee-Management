import React, { useState } from "react";
//@ts-ignore
import Searchicon from '../../assets/svg/search.svg'
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanSingleEmployee } from "../../redux/actions.tsx";


function Navbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddEmployee=()=>{
    dispatch(cleanSingleEmployee())
    
    navigate("/addEmployee");

  }
  return (
    <nav className="navbar">
      <div className="logo">Employee Management</div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
        <img  className="search-icon"src={Searchicon} alt="" />

          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <button className="btn-add-emp" onClick={handleAddEmployee}>Add Employee</button>
         
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
