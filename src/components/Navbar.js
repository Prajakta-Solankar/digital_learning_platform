// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Learn !</div>
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
  );
};

export default Navbar;
