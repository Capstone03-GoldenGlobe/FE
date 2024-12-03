import InputBox from "../components/InputBox";
import PageTitle from "../components/PageTitle";
import * as S from "./LoginPage.style";
import kakao from "../assets/kakao.svg";
import google from "../assets/google.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signin } from "../api/signin";

const LoginPage = () => {
  const [isValid, setIsValid] = useState(false);
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup1");
  };
  const goFindEmail = () => {
    navigate("/findemail");
  };

  const goFindPw = () => {
    navigate("/findpw");
  };

  const onPhoneChange = (e) => {
    setCellphone(e.target.value);
    ButtonValid(e.target.value, password);
  };

  const onPwChange = (e) => {
    setPassword(e.target.value);
    ButtonValid(cellphone, e.target.value);
  };

  const ButtonValid = (cellphone, password) => {
    if (cellphone && password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  //로그인하기
  const Login = async (e) => {
    e.preventDefault();

    try {
      const res = await Signin(cellphone, password);
      console.log(res);

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("이메일/비밀번호가 일치하지 않습니다");
    }
  };

  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />

        <div style={{ marginTop: "2.45rem" }} />
        <S.Title>아이디</S.Title>
        <S.Input
          placeholder="전화번호를 입력해주세요"
          type="email"
          onChange={onPhoneChange}
          value={cellphone}
        />
        <S.Title>비밀번호</S.Title>
        <S.Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={onPwChange}
          value={password}
        />

        <S.Btn isValid={isValid} onClick={Login}>
          로그인
        </S.Btn>

        <S.OptionWrapper>
          <S.Option onClick={goFindPw}> 비밀번호 찾기 | </S.Option>
          <S.Option onClick={goSignup}>회원가입</S.Option>
        </S.OptionWrapper>
        {/* 
        <S.ImgWrapper>
          <img src={kakao} style={{ width: "5.1rem", cursor: "pointer" }} />
          <div style={{ marginRight: "1.85rem" }}></div>
          <img src={google} style={{ width: "5.1rem", cursor: "pointer" }} />
        </S.ImgWrapper> */}
      </S.Wrapper>
    </>
  );
};

export default LoginPage;
