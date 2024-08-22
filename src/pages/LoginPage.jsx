import InputBox from "../components/InputBox";
import PageTitle from "../components/PageTitle";
import * as S from "./LoginPage.style";
import kakao from "../assets/kakao.svg";
import google from "../assets/google.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup1");
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    ButtonValid();
  };

  const onPwChange = (e) => {
    setPw(e.target.value);
    ButtonValid();
  };

  const ButtonValid = () => {
    if (email && pw) {
      setIsValid(true);
    }
  };
  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />
        <div style={{ marginTop: "2.45rem" }} />
        <S.Title>아이디</S.Title>
        <S.Input
          placeholder="아이디를 입력해주세요"
          type="email"
          onChange={onEmailChange}
          value={email}
        />
        <S.Title>비밀번호</S.Title>
        <S.Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={onPwChange}
          value={pw}
        />

        <S.Btn isValid={isValid}>로그인</S.Btn>
        <S.OptionWrapper>
          <S.Option>아이디(이메일) 찾기 | </S.Option>
          <S.Option> 비밀번호 찾기 | </S.Option>
          <S.Option onClick={goSignup}>회원가입</S.Option>
        </S.OptionWrapper>

        <S.ImgWrapper>
          <img src={kakao} style={{ width: "5.1rem", cursor: "pointer" }} />
          <div style={{ marginRight: "1.85rem" }}></div>
          <img src={google} style={{ width: "5.1rem", cursor: "pointer" }} />
        </S.ImgWrapper>
      </S.Wrapper>
    </>
  );
};

export default LoginPage;
