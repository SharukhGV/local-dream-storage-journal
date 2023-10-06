import React from 'react';
import jsPDF from 'jspdf';

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('dataJSON'));

    const formatEntry = (entry) => {
      return `
        ID: ${entry.id}
        Name: ${entry.name}
        Good Dream: ${entry.good_dream}
        Description: ${entry.dream_description}
        Topic: ${entry.topic}
        Date: ${entry.date}
        Night: ${entry.night}
        -------------------------------
      `;
    };

    const formattedData = dataFromLocalStorage.map(formatEntry).join('\n');

    const doc = new jsPDF();
    doc.setFontSize(10); // Adjust font size

    const lines = doc.splitTextToSize(formattedData, doc.internal.pageSize.getWidth() - 20);
    let cursorY = 10;

    lines.forEach((line) => {
      doc.text(10, cursorY, line);
      cursorY += 7;
      if (cursorY >= doc.internal.pageSize.getHeight() - 10) {
        doc.addPage();
        cursorY = 10;
      }
    });
    doc.save('local_storage_data.pdf');
  };

  return (
 
      <button style={{ backgroundColor: "lavender", color: "black" }} onClick={handleDownloadPDF}>💻 Download Data as PDF 📝</button>
   
  );
};

export default DownloadPDFButton;
