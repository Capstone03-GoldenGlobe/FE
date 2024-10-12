import { useEffect, useRef, useState } from "react";
import Button from "../components/Botton";
import SideBar from "../components/SideBar";
import * as S from "./MainPage.style";
import { useNavigate } from "react-router-dom";
import AddNewTrip from "../components/AddNewTrip";
import { mainPage } from "../api/main";
import AddNewModal from "../components/AddNewModal";

const MainPage = () => {
  const [contents, setContents] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prevDataRef = useRef(); // 이전 데이터 추적

  const navigate = useNavigate();

  // 메인페이지 api get
  const getData = async () => {
    const res = await mainPage();
    console.log("메인", res);
    setData(res);

    if (res) {
      setContents(true);
    }
  };

  // 페이지 마운트 시
  useEffect(() => {
    getData();
  }, []);

  // 데이터 추가시
  useEffect(() => {
    if (prevDataRef.current) {
      // 데이터가 변경되었을 때만 리렌더 트리거
      console.log("새로운 데이터가 추가되었습니다.");
      setContents(true);
    }

    prevDataRef.current = data; // 이전 데이터를 업데이트
  }, [data]); // data가 변경될 때만 실행

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // 모달 닫힐때 다시 데이터 불러옴
    getData();
  };

  const goChat = (id) => {
    navigate(`/chat/${id}`);
  };

  const onClickAddNew = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <SideBar data={data?.nickname} />
      {contents ? (
        <>
          <S.ContentsWrapper>
            <S.CTitle>내 여행 모아보기</S.CTitle>

            <S.Container>
              {data?.travelLists.map((item) => (
                <S.Content
                  onClick={() => goChat(item.destId)}
                  key={item.destId}
                >
                  <S.FlagText>
                    <S.Flag>🇹🇭</S.Flag>
                    <S.CountryWrapper>
                      <S.Country>{item?.country}</S.Country>
                      <S.City>{item?.city}</S.City>
                    </S.CountryWrapper>
                  </S.FlagText>

                  <S.Date>
                    {item.startDate}~{item.endDate}
                  </S.Date>
                </S.Content>
              ))}

              <S.ContentEnd onClick={onClickAddNew}>
                <S.Add>
                  새로운 여행을 <br />
                  추가하세요!
                </S.Add>
                <AddNewModal isOpen={isModalOpen} onClose={closeModal}>
                  <AddNewTrip />
                </AddNewModal>
              </S.ContentEnd>
            </S.Container>
            <S.Line />
            <S.CTitle>공유 여행 모아보기</S.CTitle>
            <S.Container>
              {data?.shared.map((item) => (
                <S.Content
                  onClick={() => goChat(item.destId)}
                  key={item.destId}
                >
                  <S.FlagText>
                    <S.Flag>🇹🇭</S.Flag>
                    <S.CountryWrapper>
                      <S.Country>{item?.country}</S.Country>
                      <S.City>{item?.city}</S.City>
                    </S.CountryWrapper>
                  </S.FlagText>

                  <S.Date>
                    {item.startDate}-{item.endDate}
                  </S.Date>
                </S.Content>
              ))}
            </S.Container>
          </S.ContentsWrapper>
        </>
      ) : (
        <>
          <AddNewTrip />
        </>
      )}
    </>
  );
};

export default MainPage;
