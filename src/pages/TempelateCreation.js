// TemplateCreation.js

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TemplateCreation = (props) => {
  const [formData, setFormData] = useState({
    productName: "",
    title: "",
    selectedDate: null, // Use selectedDate to store the chosen date
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const generateProductCode = () => {
    const { productName, title, selectedDate } = formData;
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : "";
    const productCode = `${productName}${title}${formattedDate}`;
    alert(`Generated Product Code: ${productCode}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Template Creation</h1>

      {/* Form */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="p-2 border"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 border"
          onChange={handleInputChange}
        />

        {/* Date Picker */}
        <DatePicker
          selected={formData.selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select Date"
          className="p-2 border"
        />
      </div>

      {/* Button to Generate Product Code */}
      <button
        className="bg-blue-500 text-white p-2 mt-4"
        onClick={generateProductCode}
      >
        Generate Product Code
      </button>
      {/* Display Generated Product Code */}
      {formData.productName && (
        <p className="mt-4">
          Generated Product Code:{" "}
          {`${formData.productName}${
            formData.title
          }${formData.selectedDate?.toLocaleDateString("en-US")}`}
        </p>
      )}
    </div>
  );
};

export default TemplateCreation;
