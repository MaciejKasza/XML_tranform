import React, { createContext, useContext, useEffect, useState } from "react";

export const useStore = () => {
  return useContext(StoreContext);
};
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [xml, setXml] = useState(null);
  const [chosenStructure, setChosenStructure] = useState();

  useEffect(() => {
    console.log("XML: ", xml);
    console.log("Structure: ", chosenStructure);
  }, [xml, chosenStructure]);

  const values = { chosenStructure, setChosenStructure, xml, setXml };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;
