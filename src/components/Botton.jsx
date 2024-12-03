import styled from "styled-components";

// type: L,S
//  color: gray = g, orange = o
const Button = ({ type, children, color, onClick }) => {
  return (
    <>
      <Btn type={type} color={color} onClick={onClick}>
        {children}
      </Btn>
    </>
  );
};

export default Button;

const Btn = styled.button`
  background-color: ${(props) =>
    props.color === "g"
      ? "#E1E1E1"
      : props.color === "o"
      ? "#FFA500"
      : "white"};
  width: ${(props) => (props.type == "L" ? "9.5rem" : "5.8rem")};
  height: ${(props) => (props.type == "L" ? "3.35rem" : "3.3rem")};
  color: ${(props) => (props.color == "o" ? "white" : "black")};
  font-size: 1.12rem;
  border-radius: 0.35rem;
  border: none;

  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;
