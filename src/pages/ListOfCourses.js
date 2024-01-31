import React from "react";
import MaterialTable from "../components/MaterialTable";


const ListOfCourses = (props) => {
  return (
    <div className="w-full h-screen bg-slate-200">
    <div className="w-full flex justify-center ">
    <div className="w-[80vw]  mt-8">
    <MaterialTable rows={props.listOfCourses}/>
    </div>
    </div>
    </div>
  );
};

export default ListOfCourses;
