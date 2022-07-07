import React, { useState } from "react";
import styled from "styled-components";

const DropDown = ({ label, options, onChange }) => {
  return (
    <LabelStyled>
      {label}
      <select name="options" id="options" onChange={onChange}>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </LabelStyled>
  );
};

export default DropDown;

const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
