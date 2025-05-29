import React, { useRef, useState } from "react";

const FileUploader = ({ onInsertImage }) => {
  const fileRef = useRef();
  const [fileName, setFileName] = useState("No file chosen");

  const handleClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "No file chosen");

    onInsertImage(e);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileRef}
        onChange={handleChange}
        className="hidden"
      />
      <button
        type="block w-full"
        onClick={handleClick}
        className="block w-full text-white"
      >
        {`Upload File : ${fileName ?? fileName}`}
      </button>
    </div>
  );
};

export default FileUploader;
