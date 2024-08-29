import Button from "../components/Botton";
import InputBox from "../components/InputBox";
import PageTitle from "../components/PageTitle";
import * as S from "./FindEmailPage.style";

const FindPwPage = () => {
  return (
    <>
      <S.Wrapper>
        <PageTitle title={"비밀번호 찾기"} />
        <div>
          <S.Top>
            가입한 이메일을 입력해 주세요. <br />
            이메일을 통해 비밀번호 변경 링크가 전송됩니다.
          </S.Top>
          <S.InputWrp2>
            <S.Title>이메일</S.Title>
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"01012341234"}
            />
            <Button type="S" color="o">
              인증 요청
            </Button>
          </S.InputWrp2>

          <S.Top>아래 이메일로 비밀번호 변경 링크를 전송했습니다.</S.Top>
        </div>
      </S.Wrapper>
    </>
  );
};

export default FindPwPage;
