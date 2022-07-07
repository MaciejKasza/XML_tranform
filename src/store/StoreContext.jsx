import React, { createContext, useContext, useEffect, useState } from "react";

export const useStore = () => {
  return useContext(StoreContext);
};
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [xml, setXml] = useState(null);
  const [chosenStructure, setChosenStructure] = useState();
  const [xmlFields, setXmlFields] = useState([]);
  const [structure, setStructure] = useState([]);

  useEffect(() => {
    console.log("XML: ", xml);
    console.log("Chosen structure: ", chosenStructure);
    console.log("Structure: ", structure);
  }, [xml, chosenStructure, structure]);

  const values = {
    chosenStructure,
    setChosenStructure,
    xml,
    setXml,
    structure,
    setStructure,
    xmlFields,
    setXmlFields,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;
