import styled from "styled-components";
import check from "../assets/check.svg";
import { useState } from "react";

const Checkbox = ({ color, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Wrp>
        <Box isChecked={isChecked} color={color} onClick={handleCheckBox}>
          {isChecked && <img src={check} style={{ width: "15px" }} />}
        </Box>
        <Input value={value} onChange={onChange} />
      </Wrp>
    </>
  );
};

export default Checkbox;

const Wrp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 3rem;
`;

const Box = styled.div`
  width: 1.275rem;
  height: 1.275rem;
  flex-shrink: 0;
  background-color: ${(props) => (props.isChecked ? props.color : "white")};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.isChecked ? "none" : "1px solid #D3D3D3")};
  margin-right: 1rem;
`;

const Input = styled.input`
  color: #000;
  text-align: start;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  width: 10rem;
  padding-left: 1rem;
`;
