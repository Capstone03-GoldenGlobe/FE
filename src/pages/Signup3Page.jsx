import * as S from "./Signup3Page.style";
import PageTitle from "../components/PageTitle";
import SignupProgress from "../components/SignupProgress";
import Button from "../components/Botton";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import info from "../assets/info.svg";
import { useState } from "react";
import { SignupApi } from "../api/signup";

const Signup3Page = () => {
  const navigate = useNavigate();

  const goNext = async () => {
    try {
      await Signup();
      console.log("회원가입 성공");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpw, setConpw] = useState("");

  const savedUserData = JSON.parse(localStorage.getItem("userData"));
  console.log(savedUserData);

  const goBack = () => {
    navigate(-1);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const Signup = async () => {
    console.log(
      "회원기입 인자 확인: ",
      savedUserData.name,
      savedUserData.birth,
      savedUserData.cellphone,
      password,
      nickname,
      (savedUserData.profile = ""),
      savedUserData.gender
    );
    const res = await SignupApi(
      savedUserData.name,
      savedUserData.birth,
      savedUserData.cellphone,
      password,
      nickname,
      (savedUserData.profile = ""),
      savedUserData.gender
    );

    console.log("회원가입 res", res);
    localStorage.removeItem("userData");
  };

  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />
        <SignupProgress step={2} />
        <div style={{ height: "3.8rem" }} />
        <div>
          <S.InputWrp2>
            <S.Title>닉네임</S.Title>
            <div style={{ marginRight: "2rem" }} />
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"닉네임을 입력해주세요."}
              value={nickname}
              onChange={onChangeNickname}
            />
            <Button type="S" color="o">
              중복 확인
            </Button>
          </S.InputWrp2>

          {/* 이메일 추가 */}
          {/* <S.InputWrp1>
            <S.Title>이메일</S.Title>
            <InputBox
              type="email"
              width="22.25rem"
              placeholder={"aaa@naver.com"}
              value={email}
              onChange={onChangeEmail}
            />
          </S.InputWrp1> */}
          {/* /////// */}

          {/* <S.InputWrp>
            <S.Title>아이디</S.Title>
            <div style={{ marginRight: "2rem" }} />
            <InputBox
              readOnly={true}
              type="text"
              width="22.25rem"
              value={"slkdjf"}
            />
            <img src={info} />
          </S.InputWrp> */}

          <S.InputWrp1>
            <S.Title>비밀번호</S.Title>
            <InputBox
              type="password"
              width="22.25rem"
              placeholder={"비밀번호를 입력해주세요."}
              onChange={onChangePw}
              value={password}
            />
          </S.InputWrp1>
          <S.InputWrp1>
            <S.Title>비밀번호 확인</S.Title>
            <InputBox type="password" width="22.25rem" />
          </S.InputWrp1>
        </div>
        <S.BtnWrapper>
          <Button type="L" color="g" onClick={goBack}>
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

export default Signup3Page;
