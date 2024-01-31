import React, { useState } from "react";
import TemplateCreation from "./pages/TempelateCreation";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListOfCourses from "./pages/ListOfCourses";
import Contact from "./pages/Contact";

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
          <Navbar listOfCourses= {listOfCourses}/>
          <Routes>
            <Route path="/create_course" element={<TemplateCreation addCourse={addCourse} />} />
            <Route path="/list_of_course" element={<ListOfCourses listOfCourses={listOfCourses}/>}/>
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          
        </>
      ): <Login loginHandler={loginHandler}/>}
    </>
  );
}

export default App;
