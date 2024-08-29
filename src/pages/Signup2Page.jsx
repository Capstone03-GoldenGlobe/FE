import * as S from "./Signup2Page.style";
import PageTitle from "../components/PageTitle";
import SignupProgress from "../components/SignupProgress";
import Button from "../components/Botton";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

const Signup2Page = () => {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/signup3");
  };
  const goBack = () => {
    navigate("/signup1");
  };
  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />
        <SignupProgress step={2} />
        <div>
          <S.Top>이메일은 아이디로 사용됩니다.</S.Top>
          <S.InputWrp2>
            <S.Title>이메일</S.Title>
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"aaa@naver.com"}
            />
            <Button type="S" color="o">
              인증 요청
            </Button>
          </S.InputWrp2>

          <S.Top>인증 메일로 전송된 인증 번호를 입력해주세요.</S.Top>
          <S.InputWrp3>
            <S.Title>인증 번호</S.Title>
            <InputBox type="text" width="9.9rem" placeholder={"0000"} />
            <Button type="S" color="o">
              인증 확인
            </Button>
          </S.InputWrp3>
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

export default Signup2Page;
