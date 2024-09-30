import styled from "styled-components";

const InputBox = ({ type, placeholder, width, value, onChange, readOnly }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      width={width}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default InputBox;

const Input = styled.input`
  border-radius: 0.35rem;
  border: 1px solid #afafaf;
  width: ${(props) => props.width};
  height: 3.3rem;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 1rem 1rem;
  color: #000;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  /* background-color props로 넣기*/
  display: flex;
  align-items: center;
  justify-content: center;
  &::placeholder {
    color: #afafaf;
    font-family: var(--korean);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
`;
