import { useNavigate } from "react-router-dom";
import Button from "../components/Botton";
import FindEmailProgress from "../components/FindEmailProgress";
import InputBox from "../components/InputBox";
import PageTitle from "../components/PageTitle";
import * as S from "./FindEmailPage.style";

const FindEmailPage = () => {
  const navigate = useNavigate();

  const goNext = () => {
    navigate("/findemail2");
  };
  return (
    <>
      <S.Wrapper>
        <PageTitle title={"아이디 찾기"} />
        <FindEmailProgress step={1} />

        <div>
          <S.Top>계정에 등록된 휴대폰 번호를 입력해주세요.</S.Top>
          <S.InputWrp2>
            <S.Title>전화번호</S.Title>
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"01012341234"}
            />
            <Button type="S" color="o">
              인증 요청
            </Button>
          </S.InputWrp2>

          <S.Top>인증 메일로 전송된 인증 번호를 입력해주세요.</S.Top>
          <S.InputWrp3>
            <S.Title>인증 번호</S.Title>
            <InputBox type="text" width="9.9rem" placeholder={"0000"} />
            <Button type="S" color="o" onClick={goNext}>
              인증 확인
            </Button>
          </S.InputWrp3>
        </div>
      </S.Wrapper>
    </>
  );
};

export default FindEmailPage;
