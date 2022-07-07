import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FilesDragAndDrop = ({ onUpload, file, removeFile }) => {
  const [error, setError] = useState(false);
  const drop = React.useRef(null);

  useEffect(() => {
    if (drop) {
      drop.current.addEventListener("dragover", handleDragOver);
      drop.current.addEventListener("drop", handleDrop);
    }

    return () => {
      if (drop) {
        drop.current.removeEventListener("dragover", handleDragOver);
        drop.current.removeEventListener("drop", handleDrop);
      }
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setError(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;
    console.log(files);
    if (files && files.length && files[0].name.includes(".xml")) {
      onUpload(files);
    } else {
      setError(true);
    }
  };

  const handleRemoveFile = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (file) {
      removeFile();
    }
  };

  return (
    <FilesDragAndDropContainer ref={drop} className={error ? "error" : ""}>
      {file ? "XML uploaded" : "Hey, drop me some XML"}
      <span role="img" aria-label="emoji" className="area__icon">
        &#128526;
      </span>
      {file ? (
        <span className="area__close__icon" onClick={handleRemoveFile}>
          X
        </span>
      ) : null}

      {file ? <span className="area__file__name">{file.name}</span> : null}
    </FilesDragAndDropContainer>
  );
};

const FilesDragAndDropContainer = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  font-size: 18px;
  color: #555555;
  border: 2px #c3c3c3 dashed;
  border-radius: 12px;
  text-align: center;

  &.error {
    animation-name: errorAnim;
    animation-duration: 1s;
  }

  @keyframes errorAnim {
    0% {
      background-color: white;
    }
    70% {
      background-color: #f34a4a;
    }
    100% {
      background-color: white;
    }
  }
  .area__icon {
    font-size: 48px;
    margin-top: 20px;
  }

  .area__close__icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-weight: bold;
    font-size: 23px;
    cursor: pointer;
  }
`;

export default FilesDragAndDrop;

FilesDragAndDrop.propTypes = {
  onUpload: PropTypes.func.isRequired,
};
