import styled from "styled-components";

const InputBox = ({ type, placeholder, width, value }) => {
  return (
    <Input type={type} placeholder={placeholder} value={value} width={width} />
  );
};

export default InputBox;

const Input = styled.input`
  border-radius: 0.35rem;
  border: 1px solid #afafaf;
  width: ${(props) => props.width};
  height: 4rem;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 1rem 1rem;

  &::placeholder {
    color: #afafaf;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
