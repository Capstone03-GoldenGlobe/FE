import { useNavigate } from "react-router-dom";
import ListSideBar from "../components/ListSideBar";
import * as S from "./CheckListPage.style";
import CheckIndexBox from "../components/CheckIndexBox";

const CheckListPage = () => {
  const navigate = useNavigate();

  const goChatBot = () => {
    navigate("/chat");
  };

  const goCheckList = () => {
    navigate("/list");
  };

  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <ListSideBar />
        <S.Container>
          <S.IndexContainer>
            <S.IndexGray onClick={goChatBot}>챗봇</S.IndexGray>
            <S.Index onClick={goCheckList}>체크리스트</S.Index>
          </S.IndexContainer>

          <S.Weather>🇺🇸 미국 샌프란시스코의 현재 기온: 32℃</S.Weather>

          <CheckIndexBox />
          <CheckIndexBox />
          <CheckIndexBox />
          <CheckIndexBox />
          <CheckIndexBox />
        </S.Container>
      </div>
    </>
  );
};

export default CheckListPage;
