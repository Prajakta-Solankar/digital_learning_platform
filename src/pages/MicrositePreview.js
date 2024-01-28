// MicrositePreview.js

import React from 'react';

const MicrositePreview = ({ formData }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Microsite Preview</h1>

      {/* Display Form Data */}
      <div>
        <p>Product Name: {formData.productName}</p>
        <p>Title: {formData.title}</p>
        <p>Date: {formData.selectedDate?.toLocaleDateString('en-IN')}</p>
      </div>

      {/* Action Button to navigate or Finalize */}
      <button className="bg-blue-500 text-white p-2 mt-4">
        Next Step / Finalize
      </button>
    </div>
  );
};

export default MicrositePreview;
