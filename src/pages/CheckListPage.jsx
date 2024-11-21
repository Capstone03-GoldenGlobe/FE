import { useNavigate, useParams } from "react-router-dom";
import ListSideBar from "../components/ListSideBar";
import * as S from "./CheckListPage.style";
import CheckIndexBox from "../components/CheckIndexBox";
import { getCheckListAll } from "../api/checkList";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const CheckListPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [groupHeight, setGroupHeight] = useState([]); // 공유 상태: 사이드바 높이
  const groupHeightsRef = useRef([]);

  const { id } = useParams();

  const goChatBot = () => {
    navigate(`/chat/${id}`);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getCheckListAll(id);
      console.log(res);
      setData(res?.data.groups || []);
    };

    getData();
  }, [id]);

  console.log("res.data.groups", data);

  // 그룹 높이 업데이트 함수 (useCallback)
  const updateGroupHeight = useCallback((index, height) => {
    setGroupHeight((prevHeights) => {
      const updatedHeights = [...prevHeights];
      // 동일한 높이일 경우 상태를 변경하지 않음 (렌더링 방지)
      if (updatedHeights[index] !== height) {
        updatedHeights[index] = height;
        return updatedHeights;
      }
      return prevHeights;
    });
    // setGroupHeight((prevHeights) => {
    //   if (prevHeights[index] === height) {
    //     return prevHeights; // 높이가 동일하면 상태 변경하지 않음
    //   }
    //   const updatedHeights = [...prevHeights];
    //   updatedHeights[index] = height;
    //   return updatedHeights;
    // });
    // setGroupHeight((prevHeights) => {
    //   const updatedHeights = [...prevHeights];
    //   updatedHeights[index] = height; // 항상 새로운 값으로 변경
    //   return updatedHeights;
    // });
  }, []);

  return (
    <>
      <div>
        <ListSideBar data={data ? data : null} id={id} height={groupHeight} />
        <S.Container>
          <S.IndexContainer>
            <S.IndexGray onClick={goChatBot}>챗봇</S.IndexGray>
            <S.Index>체크리스트</S.Index>
          </S.IndexContainer>

          <S.Weather>🇫🇷 프랑스 파리의 현재 기온: 32℃</S.Weather>
          {data?.map((list, index) => (
            <CheckIndexBox
              key={list.groupId}
              data={list}
              id={id}
              setGroupHeight={(height) => updateGroupHeight(index, height)}
            />
          ))}
        </S.Container>
      </div>
    </>
  );
};

export default CheckListPage;
