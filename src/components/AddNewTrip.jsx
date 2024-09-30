import styled from "styled-components";
import Button from "./Botton";
import { useNavigate } from "react-router-dom";

const AddNewTrip = () => {
  const navigate = useNavigate();

  const onClickAddTrip = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Title>새로운 여행을 추가해 보세요!</Title>
      <Box>
        <SmallTitle>여행 국가</SmallTitle>
        <Input placeholder="여행국가를 입력해주세요." />

        <SmallTitle>도시</SmallTitle>
        <Input placeholder="도시를 입력해주세요." />

        <SmallTitle>여행 일정</SmallTitle>
        <Input placeholder="여행 일정을 입력해주세요." />
        <BtnWrapper>
          <Button children={"생성하기"} type="L" onClick={onClickAddTrip} />
        </BtnWrapper>
      </Box>
    </Wrapper>
  );
};

export default AddNewTrip;

export const Wrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 16.15rem;
  height: 90vh;
  z-index: 100;
`;
export const ContentsWrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  padding-top: 3.5rem;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3rem;
`;

export const Box = styled.div`
  width: 29.05rem;
  height: 31.35rem;
  flex-shrink: 0;
  border-radius: 0.35rem;
  background: #fffaf2;
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const SmallTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  display: flex;
  align-items: start;
  margin-bottom: 0.6rem;
`;

export const Input = styled.input`
  width: 24.1rem;
  height: 3.45rem;
  flex-shrink: 0;
  border: none;
  background: #fff;
  padding: 0.75rem 0.9rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
  color: #000;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & ::placeholder {
    color: var(--gray1);
    font-family: var(--korean);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  margin-bottom: 1.8rem;
  outline: none;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 13.20405rem;
  height: 8.6rem;
  flex-shrink: 0;
  border-radius: 0.30405rem;
  border: 0.869px solid #cdcdcd;
  margin-right: 3rem;
  cursor: pointer;
  margin-bottom: 3.46rem;
`;
export const CTitle = styled.div`
  color: #000;
  font-family: var(--korean);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
`;
