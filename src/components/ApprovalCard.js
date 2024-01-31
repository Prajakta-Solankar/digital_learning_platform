import React from 'react';

const ApprovalCard = ({data, setShow}) => {
  // const data = {
  //   name: 'John Doe',
  //   title: 'Software Engineer',
  //   selectedDate: '2024-01-31',
  //   productCode: 'ABC123',
  //   approved: true,
  // };

  const handleApprovedClick = () => {
    // Handle the logic when the "Approved" button is clicked
    console.log('Approved button clicked');
    data.approved = "true";
    setShow(false);
    // Add your logic here
  };
  const handleBannedClick = ()=>{
    console.log("banned handler");
    setShow(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      {/* Overlay for darkening the background */}
      <div
        onClick={()=>setShow(false)}
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 cursor-pointer"
      ></div>

      {/* Card container */}
      <div className="max-w-md mx-auto bg-white w-[50vw] rounded-md overflow-hidden shadow-md p-6 mt-6 z-50 relative">
        <div className="mb-4">
          <label className="text-sm block font-medium text-gray-600">Name:</label>
          <div className="mt-1 p-2 w-full border rounded-md">{data.name}</div>
        </div>

        <div className="mb-4">
          <label className="text-sm block font-medium text-gray-600">Title:</label>
          <div className="mt-1 p-2 w-full border rounded-md">{data.title}</div>
        </div>

        <div className="mb-4">
          <label className="text-sm block font-medium text-gray-600">Selected Date:</label>
          <div className="mt-1 p-2 w-full border rounded-md">{data.selectedDate}</div>
        </div>

        <div className="mb-4">
          <label className="text-sm block font-medium text-gray-600">Product Code:</label>
          <div className="mt-1 p-2 w-full border rounded-md">{data.productCode}</div>
        </div>

        <button
          onClick={handleApprovedClick}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Approved
        </button>

        <button
          onClick={handleBannedClick}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ml-2"
        >
          Banned
        </button>
      </div>
    </div>
  );
};

export default ApprovalCard;
