import styled from "styled-components";

const SignupProgress = ({ step }) => {
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
          <></>
        )}
      </Wrapper>
    </>
  );
};

export default SignupProgress;

const Wrapper = styled.div`
  display: flex;
`;

const Step1Wrp = styled.div`
  display: flex;
`;

const Num = styled.div`
  background-color: var(--main);
  color: white;
  border-radius: 50%;
  margin-right: 1.65rem;
`;

const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
