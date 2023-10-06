import React from 'react';

function DownloadJSON({ fileName }) {
  const downloadJSON = () => {
    const storedData = JSON.parse(localStorage.getItem('dataJSON'));
    const jsonContent = JSON.stringify(storedData);
        const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'data.json';
    a.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <button  style={{ backgroundColor: "lavender", color: "black" }} onClick={downloadJSON}>💻 Download JSON File for Repopulation 🌐</button>
  );
}

export default DownloadJSON;
