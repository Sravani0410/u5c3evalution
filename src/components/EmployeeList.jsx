import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [list,setList]=useState({})
  const handleList=()=>{
    axios.post(`http://localhost:8080/employee`).then()
  }
  
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        <div className="employee_card">
          <img className="employee_image" />
          <span className="employee_name"></span>
          <span className="employee_title"></span>
        </div>
      </div>
    );
  };
  