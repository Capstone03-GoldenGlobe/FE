import * as S from "./Signup3Page.style";
import PageTitle from "../components/PageTitle";
import SignupProgress from "../components/SignupProgress";
import Button from "../components/Botton";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import info from "../assets/info.svg";

const Signup3Page = () => {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />
        <SignupProgress step={3} />
        <div style={{ height: "3.8rem" }} />
        <div>
          <S.InputWrp2>
            <S.Title>닉네임</S.Title>
            <div style={{ marginRight: "2rem" }} />
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"닉네임을 입력해주세요."}
            />
            <Button type="S" color="o">
              중복 확인
            </Button>
          </S.InputWrp2>

          <S.InputWrp>
            <S.Title>아이디</S.Title>
            <div style={{ marginRight: "2rem" }} />
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"aaa@naver.com"}
            />
            <img src={info} />
          </S.InputWrp>

          <S.InputWrp1>
            <S.Title>비밀번호</S.Title>
            <InputBox
              type="password"
              width="22.25rem"
              placeholder={"비밀번호를 입력해주세요."}
            />
          </S.InputWrp1>
          <S.InputWrp1>
            <S.Title>비밀번호 확인</S.Title>
            <InputBox
              type="password"
              width="22.25rem"
              placeholder={"aaa@naver.com"}
            />
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
