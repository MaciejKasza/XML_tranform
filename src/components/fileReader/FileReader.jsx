import React, { useState } from "react";
import styled from "styled-components";
import XMLParser from "react-xml-parser";

import FilesDragAndDrop from "./FilesDragAndDrop";
import FilesInput from "./FilesInput";
import { useStore } from "../../store/StoreContext";

const FileReaderComponnent = (props) => {
  const [file, setFile] = useState();
  const [fileContent, setFileContent] = useState("");
  const [error, setError] = useState(null);

  const { xml, setXml } = useStore();

  const onUpload = (files) => {
    console.log("onUpload", files[0]);
    if (files.length > 1) {
      console.warn("Only one file can be uploaded!");
      setError("Only one file can be uploaded!");
      return null;
    }
    try {
      setFile(files[0]);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        setFileContent(new XMLParser().parseFromString(text));
        setXml(new XMLParser().parseFromString(text));
      };
      reader.readAsText(files[0]);
    } catch (err) {
      removeFile();
      setError("Something went wrong!");
      console.error("Something went wrong: ", err);
    }
  };

  const removeFile = () => {
    console.log("Filed removed");
    setFile(null);
    setFileContent(null);
    setXml(null);
  };

  return (
    <FileReacerWrapper>
      <FilesDragAndDrop
        onUpload={onUpload}
        error={error}
        file={file}
        removeFile={removeFile}
      />
      <FilesInput
        onUpload={onUpload}
        error={error}
        file={file}
        removeFile={removeFile}
      />

      {/* <pre>{JSON.stringify(fileContent, undefined, 4)}</pre> */}
      {console.log(fileContent)}
    </FileReacerWrapper>
  );
};

export default FileReaderComponnent;

const FileReacerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  gap: 15px;
  height: 100%;
  pre {
    /* max-width: 70vh; */
  }
`;
