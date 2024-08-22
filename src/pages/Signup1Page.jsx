import PageTitle from "../components/PageTitle";
import * as S from "./Signup1Page.style";
import Button from "../components/Botton";
import SignupProgress from "../components/SignupProgress";

const Signup1Page = () => {
  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />
        <SignupProgress step={1} />

        <S.BtnWrapper>
          <Button type="L" color="g">
            이전
          </Button>
          <div style={{ marginRight: "2.2rem" }} />
          <Button type="L" color="ㅐ">
            다음
          </Button>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
};

export default Signup1Page;
