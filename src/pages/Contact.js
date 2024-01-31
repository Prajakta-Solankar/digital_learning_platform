// src/components/ContactCard.js
import React from "react";

const Contact = () => {
  const url =
    "https://www.shutterstock.com/shutterstock/photos/2161258283/display_1500/stock-photo-bear-sitting-with-his-paw-on-his-head-as-if-in-despair-concept-emotions-2161258283.jpg";
  return (
    <div className="flex justify-center  w-full h-screen  bg-slate-200">
      <div className=" bg-white h-96 w-96 flex flex-col items-center justify-center mt-10 shadow-2xl ">
        <img
          className="w-32 h-32 object-cover rounded-full"
          src={url}
          alt="jaudena"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Name : gkp</div>
          <p className="text-gray-700 text-base">Email : gkp@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
