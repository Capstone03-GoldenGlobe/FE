import PageTitle from "../components/PageTitle";
import * as S from "./Signup1Page.style";
import Button from "../components/Botton";
import SignupProgress from "../components/SignupProgress";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

import { useState } from "react";

const Signup1Page = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const goNext = () => {
    navigate("/signup2");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeVerificationCode = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSmsRequest = async () => {
    try {
      const response = await fetch("/sms/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cellPhone: phoneNumber }),
      });

      if (!response.ok) {
        throw new Error("SMS 인증 요청에 실패했습니다.");
      }

      const data = await response.json();
      console.log("인증 요청 성공:", data);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const handleSmsVerify = async () => {
    try {
      const response = await fetch("/sms/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          cellPhone: phoneNumber, 
          certificationCode: verificationCode 
        }),
      });

      if (!response.ok) {
        throw new Error("인증 번호 확인에 실패했습니다.");
      }

      const data = await response.json();
      console.log("인증 확인 성공:", data);
      navigate("/signup2");
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />
        <SignupProgress step={1} />
        <div style={{ height: "4.8rem" }} />
        <div>
          <S.InputWrp>
            <S.NameCon>
              <S.Title>이름</S.Title>
              <InputBox
                type="text"
                value={name}
                width="9.1rem"
                onChange={onChangeName}
                placeholder={"이름"}
              />
            </S.NameCon>

            <S.GenderCon>
              <S.Title>성별</S.Title>
              <InputBox type="text" width="3.5rem" placeholder={"여"} />
            </S.GenderCon>
          </S.InputWrp>

          <S.InputWrp>
            <S.Title>생년월일</S.Title>
            <InputBox type="text" width="22.25rem" placeholder={"1960.01.01"} />
          </S.InputWrp>

          <S.InputWrp2>
            <S.Title>전화번호</S.Title>
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"01012341234"}
              value={phoneNumber}
              onChange={onChangePhoneNumber}
            />
            <Button type="S" color="o" onClick={handleSmsRequest}>
              인증 요청
            </Button>
          </S.InputWrp2>

          <S.InputWrp3>
            <S.Title>인증 번호</S.Title>
            <InputBox 
              type="text" 
              width="9.9rem" 
              placeholder={"01012341234"} 
              value={verificationCode}
              onChange={onChangeVerificationCode}
            />
            <Button type="S" color="o" onClick={handleSmsVerify}>
              인증 확인
            </Button>
          </S.InputWrp3>
        </div>

        <S.BtnWrapper>
          <Button type="L" color="g">
            이전
          </Button>
          <div style={{ marginRight: "2.2rem" }} />
          <Button type="L" color="o" onClick={goNext}>
            다음
          </Button>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
};

export default Signup1Page;
