import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5.2rem;
  margin-bottom: 2.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 23.18735rem;
  display: flex;
  margin-bottom: 0.45rem;
`;

export const Input = styled.input`
  width: 23.18735rem;
  height: 4.05rem;
  flex-shrink: 0;
  border-radius: 0.22255rem;
  border: 0.89px solid #afafaf;
  margin-bottom: 2.45rem;
  box-sizing: border-box;
  padding: 1.1rem 1.1rem;
  color: black;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #afafaf;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Btn = styled.button`
  width: 23.2rem;
  height: 4.0522rem;
  flex-shrink: 0;
  border-radius: 0.35rem;
  background: ${(props) => (props.isValid ? "#FFD892" : "#E4E4E4")};
  color: black;
  cursor: pointer;
  border: none;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 3.4rem;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Option = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.25rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
