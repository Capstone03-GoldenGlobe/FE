import { useEffect, useState } from "react";
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

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await mainPage();
      console.log("메인", res);
      setData(res);

      if (res) {
        setContents(true);
      }
    };

    getData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goChat = () => {
    navigate("/chat");
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
            <S.CTitle>여행 모아보기</S.CTitle>

            <S.Container>
              {data?.travelLists.map((item) => (
                <S.Content onClick={goChat} key={item.destId}>
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

              {/* ///////////////// */}

              <S.Content>
                <S.FlagText>
                  <S.Flag>🇹🇭</S.Flag>
                  <S.CountryWrapper>
                    <S.Country>태국</S.Country>
                    <S.City>치앙마이</S.City>
                  </S.CountryWrapper>
                </S.FlagText>

                <S.Date>2024.09.10 - 09.15</S.Date>
              </S.Content>

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
            {data?.shared.map((item) => (
              <S.Content onClick={goChat} key={item.destId}>
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
