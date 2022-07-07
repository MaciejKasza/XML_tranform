import "./App.css";
import React, { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import XMLData from "./products1.xml";
import FileReaderComponnent from "./components/fileReader/FileReader";
import StructureDropDownPicker from "./components/StructureDropDownPicker";
import styled from "styled-components";
import { StoreProvider, useStore } from "./store/StoreContext";
import { getXmlStructure } from "./utils/xmlStructureChecker";

const URL = "https://kamko01.smallhost.pl/products1.xml";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
};

function App() {
  const { xml, chosenStructure, setStructure } = useStore();

  const handleClick = () => {
    const str = getXmlStructure(xml);
    if (str.join("/") === chosenStructure) {
      setStructure(str);
      console.log("Match");
    } else {
      console.log("Not match");
    }
  };
  return (
    <>
      <div className="App">
        <ReadSectionWrapper>
          <FileReaderComponnent />
          <StructureDropDownPicker />
        </ReadSectionWrapper>
      </div>
      <button onClick={handleClick}>TEST</button>
    </>
  );
}

export default App;

const ReadSectionWrapper = styled.div`
  display: flex;
  height: 320px;
`;
