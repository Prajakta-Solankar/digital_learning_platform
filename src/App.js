import React, { useState } from "react";
import TemplateCreation from "./pages/TempelateCreation";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListOfCourses from "./pages/ListOfCourses";

function App() {
  const listOfCourses = [];
  const [isLogin, setIsLogin] = useState( false);
  const addCourse = (obj) => {
    listOfCourses.push(obj);
  };
  const loginHandler = ()=>{
    setIsLogin(true);
  }
  return (
    <>
      {isLogin ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/create_course" element={<TemplateCreation addCourse={addCourse} />} />
            <Route path="/list_of_course" element={<ListOfCourses listOfCourses={listOfCourses}/>}/>
          </Routes>
          
        </>
      ): <Login loginHandler={loginHandler}/>}
    </>
  );
}

export default App;
