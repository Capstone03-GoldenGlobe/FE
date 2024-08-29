import Button from "../components/Botton";
import FindEmailProgress from "../components/FindEmailProgress";
import PageTitle from "../components/PageTitle";
import * as S from "./FindEmailPage.style";
import google from "../assets/google.svg";
import { useNavigate } from "react-router-dom";

const FindEmail2Page = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const goFindPw = () => {
    navigate("/findpw");
  };

  return (
    <>
      <S.Wrapper>
        <PageTitle title={"아이디 찾기"} />
        <FindEmailProgress step={2} />

        <S.Top>인증한 휴대폰 번호로 가입된 계정입니다.</S.Top>

        <S.Box>doto1116@ewhain.net</S.Box>

        <S.BtnWrapper>
          <Button type="L" color="g" onClick={goFindPw}>
            비밀번호 찾기
          </Button>
          <div style={{ marginRight: "2.2rem" }} />
          <Button type="L" color="o" onClick={goLogin}>
            로그인
          </Button>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
};

export default FindEmail2Page;
