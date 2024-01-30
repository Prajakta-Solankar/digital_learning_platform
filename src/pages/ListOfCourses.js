import React from "react";
import MaterialTable from "../components/MaterialTable";


const ListOfCourses = (props) => {
  return (
    <div className="w-full flex justify-center mt-3">
    <div className="w-[80vw]">
    <MaterialTable rows={props.listOfCourses}/>
    </div>
    </div>
  );
};

export default ListOfCourses;
