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
    doc.setFontSize(10); // Adjust font size

    const lines = doc.splitTextToSize(formattedData, doc.internal.pageSize.getWidth() - 20);
    let cursorY = 10;

    lines.forEach((line) => {
      doc.text(10, cursorY, line);
      cursorY += 7; // Adjust this value to control the line spacing
      if (cursorY >= doc.internal.pageSize.getHeight() - 10) {
        doc.addPage();
        cursorY = 10;
      }
    });
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
