import SideBar from "../components/SideBar";
import * as S from "./Mypage.style";
import profile from "../assets/profile.svg";

const Mypage = () => {
  return (
    <>
      <SideBar />

      <S.Wrapper>
        <img src={profile} />
      </S.Wrapper>
    </>
  );
};
export default Mypage;
