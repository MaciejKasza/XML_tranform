import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import { useStore } from "../store/StoreContext";

const StructureDropDownPicker = (props) => {
  const [selectedOption, setSelectedOption] = useState("rss/chanell/item");
  const { chosenStructure, setChosenStructure } = useStore();

  useEffect(() => {
    setChosenStructure("rss/chanell/item");
  }, []);

  const handleOptionChange = (e) => {
    setChosenStructure(e.target.value);
    setSelectedOption(e.target.value);
  };

  const options = [
    { label: "rss/chanell/item", value: "rss/chanell/item" },
    { label: "products/product", value: "products/product" },
    { label: "root/channel/item", value: "root/channel/item" },
  ];

  return (
    <StructureDropDownPickerStyled>
      <DropDown
        label="XML structure"
        options={options}
        onChange={handleOptionChange}
      ></DropDown>
    </StructureDropDownPickerStyled>
  );
};

export default StructureDropDownPicker;

const StructureDropDownPickerStyled = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
`;
