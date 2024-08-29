import styled from "styled-components";
import arrow from "../assets/signinArrow.svg";

const FindEmailProgress = ({ step }) => {
  return (
    <>
      <Wrapper>
        {step === 1 ? (
          <>
            <Step1Wrp>
              <Num>{step}</Num>
              <Text>본인 인증</Text>
            </Step1Wrp>
          </>
        ) : (
          <>
            <Step1Wrp2>
              <Num2>1</Num2>
              <Text2>본인 인증</Text2>
            </Step1Wrp2>
          </>
        )}
        <img src={arrow} style={{ marginRight: "2.15rem" }} />
        {step === 2 ? (
          <>
            <Step1Wrp>
              <Num>{step}</Num>
              <Text>아이디 확인</Text>
            </Step1Wrp>
          </>
        ) : (
          <>
            <Step1Wrp2>
              <Num2>2</Num2>
              <Text2>아이디 확인</Text2>
            </Step1Wrp2>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default FindEmailProgress;

const Wrapper = styled.div`
  display: flex;
  margin-top: 2.85rem;
`;

const Step1Wrp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Num = styled.div`
  background-color: #ffa500;
  color: white;
  border-radius: 50%;
  margin-right: 1.65rem;
  width: 2.65rem;
  height: 2.65rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  font-family: Pretendard;
  line-height: normal;
`;

const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 2.15rem;
`;

const Step1Wrp2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Num2 = styled.div`
  background-color: white;
  color: black;
  border: 1px solid #afafaf;
  border-radius: 50%;
  margin-right: 1.65rem;
  width: 2.65rem;
  height: 2.65rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  font-family: Pretendard;
  line-height: normal;
`;

const Text2 = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 2.15rem;
`;
