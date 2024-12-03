import { useEffect, useRef, useState } from "react";
import Button from "../components/Botton";
import SideBar from "../components/SideBar";
import * as S from "./MainPage.style";
import { useNavigate } from "react-router-dom";
import AddNewTrip from "../components/AddNewTrip";
import { mainPage } from "../api/main";
import AddNewModal from "../components/AddNewModal";
import trashcan from "../assets/trashcan.svg";
import { deleteTravel } from "../api/deleteTravel";
import x from "../assets/cross.svg";

const MainPage = () => {
  const [contents, setContents] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prevDataRef = useRef(); // 이전 데이터 추적

  const navigate = useNavigate();

  const nationality = {
    과테말라: "🇬🇹",
    네덜란드: "🇳🇱",
    노르웨이: "🇳🇴",
    뉴질랜드: "🇳🇿",
    대만: "🇹🇼",
    대한민국: "🇰🇷",
    덴마크: "🇩🇰",
    독일: "🇩🇪",
    라투아니아: "🇱🇹",
    러시아: "🇷🇺",
    루마니아: "🇷🇴",
    말레이시아: "🇲🇾",
    멕시코: "🇲🇽",
    미국: "🇺🇸",
    방글라데시: "🇧🇩",
    베트남: "🇻🇳",
    벨기에: "🇧🇪",
    브라질: "🇧🇷",
    브루나이: "🇧🇳",
    사우디아라비아: "🇸🇦",
    수단: "🇸🇩",
    스웨덴: "🇸🇪",
    스위스: "🇨🇭",
    스페인: "🇪🇸",
    싱가포르: "🇸🇬",
    아랍에미리트: "🇦🇪",
    아이슬란드: "🇮🇸",
    아일랜드: "🇮🇪",
    영국: "🇬🇧",
    오스트리아: "🇦🇹",
    이탈리아: "🇮🇹",
    인도: "🇮🇳",
    인도네시아: "🇮🇩",
    일본: "🇯🇵",
    자메이카: " 🇯🇲",
    중국: "🇨🇳",
    카자흐스탄: "🇰🇿",
    캄보디아: "🇰🇭",
    캐나다: "🇨🇦",
    태국: "🇹🇭",
    터키: "🇹🇷",
    튀르키예: "🇹🇷",
    파라과이: "🇵🇾",
    파키스탄: "🇵🇰",
    폴란드: "🇵🇱",
    프랑스: "🇫🇷",
    핀란드: "🇫🇮",
    필리핀: "🇵🇭",
    호주: "🇦🇺",
    홍콩: "🇭🇰",
  };

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

  const goChat = (id, country) => {
    navigate(`/chat/${id}`, { state: { country } });
  };

  const onClickAddNew = () => {
    setIsModalOpen(true);
  };

  // 삭제하기
  const TravelDelete = async (id) => {
    const res = await deleteTravel(id);

    console.log("삭제:", res);

    getData();
  };

  // 국기 추가
  const getFlagByCountry = (countryName) => {
    return nationality[countryName] || "🏳️"; // 기본값으로 "🏳️" (국기 없음) 설정
  };

  return (
    <>
      <SideBar data={data?.nickname} />

      <S.ContentsWrapper>
        <S.CTitle>내 여행 모아보기</S.CTitle>

        <S.Container>
          {data?.travelLists.map((item) => (
            <S.Content key={item.destId}>
              {/* <S.Twrp> */}
              <S.Twrp
                src={trashcan}
                onClick={() => TravelDelete(item.destId)}
              />
              {/* </S.Twrp> */}
              <S.FlagText onClick={() => goChat(item.destId, item?.country)}>
                <S.Flag>{getFlagByCountry(item?.country)}</S.Flag>

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
              onClick={() => goChat(item.destId, item?.country)}
              key={item.destId}
            >
              <S.FlagText>
                <S.Flag>{getFlagByCountry(item?.country)}</S.Flag>
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
  );
};

export default MainPage;
