import { useNavigate, useParams } from "react-router-dom";
import ListSideBar from "../components/ListSideBar";
import * as S from "./CheckListPage.style";
import CheckIndexBox from "../components/CheckIndexBox";
import { getCheckListAll } from "../api/checkList";
import { useEffect, useState } from "react";

const CheckListPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const { id } = useParams();

  const goChatBot = () => {
    navigate(`/chat/${id}`);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getCheckListAll(id);
      console.log(res);
      setData(res?.data.groups);
    };

    getData();
  }, []);

  console.log("res.data.groups", data);

  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <ListSideBar data={data ? data : null} id={id} />
        <S.Container>
          <S.IndexContainer>
            <S.IndexGray onClick={goChatBot}>챗봇</S.IndexGray>
            <S.Index>체크리스트</S.Index>
          </S.IndexContainer>

          <S.Weather>🇫🇷 프랑스 파리의 현재 기온: 32℃</S.Weather>
          {data?.map((list) => (
            <CheckIndexBox data={list} id={id} />
          ))}
        </S.Container>
      </div>
    </>
  );
};

export default CheckListPage;
