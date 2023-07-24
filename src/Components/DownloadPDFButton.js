import React from 'react';
import jsPDF from 'jspdf';

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    // Step 1: Retrieve data from local storage
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('dataJSON'));

    // Step 2: Format the data (you can adjust this based on your data structure)
    const formattedData = JSON.stringify(dataFromLocalStorage, null, 2);

    // Step 3: Generate the PDF
    const doc = new jsPDF();
    doc.text('Local Storage Data', 10, 10); // Add a title
    doc.text(formattedData, 10, 20); // Add the formatted data to the PDF

    // Step 4: Offer the PDF download
    doc.save('local_storage_data.pdf');
  };

  return (
    <div className='buttonPDF'>
      <button  onClick={handleDownloadPDF}>Download Local Storage Data as PDF</button>
    </div>
  );
};

export default DownloadPDFButton;
