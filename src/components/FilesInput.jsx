import React from "react";
import styled from "styled-components";

const FilesInput = ({ onUpload, file, removeFile }) => {
  const hiddenFileInput = React.useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    console.log("INput;", e.target.files);
    onUpload(e.target.files);
  };

  const handleButtonClick = (e) => {
    hiddenFileInput.current.click();
  };

  return (
    <FilesInputStyled>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        accept="text/xml"
      />
      <span id="button" onClick={handleButtonClick}>
        Select File
      </span>
    </FilesInputStyled>
  );
};

const FilesInputStyled = styled.div`
  input {
    display: none;
  }

  #button {
    padding: 5px 15px;
    border-radius: 10px;
    background-color: #06f980;

    font-weight: bold;
    cursor: pointer;
  }
`;
export default FilesInput;
