import React, { useRef } from 'react';

function UploadJSON({setFileData}) {
//   const [fileData, setFileData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setFileData(jsonData);
          // You can update your app's state or perform any other necessary actions here
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };

      reader.readAsText(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <button style={{backgroundColor:"lavender", color:"black"}} onClick={triggerFileInput}>📩 Upload JSON File for Repopulation ↩️</button>
    </div>
  );
}

export default UploadJSON;
