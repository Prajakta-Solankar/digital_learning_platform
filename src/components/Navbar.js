// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApprovalCard from "./ApprovalCard";

const Navbar = (props) => {
    const [productCode , setProductCode] = useState("");
    const [show, setShow] = useState(false);
    let [obj, setObj] = useState({});
    const searchProductHandler = ()=>{
        for( let i of props.listOfCourses){
            if(i.productCode === productCode)setObj(i);
        }
        if(obj.name === undefined){
            alert("No product mathches with the entered product code !");
        }else{
            setShow(true);
        }

    }
  return (
    <div>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Learn !</div>
        <div>
          <input placeholder="search product" className="rounded-md p-1" onChange={(e)=> setProductCode(e.target.value)} />
          <button className="bg-white ml-2 w-16 rounded-md hover:bg-slate-200" onClick={searchProductHandler}> Search </button>
        </div>
        <div className="flex space-x-4">
          <Link to="/create_course" className="text-white hover:text-gray-300">
            CreateCourse
          </Link>
          <Link to="/list_of_course" className="text-white hover:text-gray-300">
            ListOfCourses
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
    {show && <ApprovalCard  data={obj} setShow={setShow} setObj={setObj}/>}
    </div>
  );
};

export default Navbar;
