import { useState } from "react";
import Button from "../components/Botton";
import SideBar from "../components/SideBar";
import * as S from "./MainPage.style";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [contents, setContents] = useState(true);

  const navigate = useNavigate();

  const goChat = () => {
    navigate("/chat");
  };
  return (
    <>
      <SideBar />
      {contents ? (
        <>
          <S.ContentsWrapper>
            <S.CTitle>여행 모아보기</S.CTitle>

            <S.Container>
              <S.Content onClick={goChat}>
                <S.FlagText>
                  <S.Flag>🇹🇭</S.Flag>
                  <S.CountryWrapper>
                    <S.Country>태국</S.Country>
                    <S.City>치앙마이</S.City>
                  </S.CountryWrapper>
                </S.FlagText>

                <S.Date>2024.09.10 - 09.15</S.Date>
              </S.Content>

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
              {/* ///////////////////// */}

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
              {/* ///////////////////////////// */}

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

              {/* ///////////////////////// */}

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

              {/* ///////////////////////// */}

              <S.ContentEnd>
                <S.Add>
                  새로운 여행을 <br />
                  추가하세요!
                </S.Add>
              </S.ContentEnd>
            </S.Container>
          </S.ContentsWrapper>
        </>
      ) : (
        <>
          <S.Wrapper>
            <S.Title>새로운 여행을 추가해 보세요!</S.Title>
            <S.Box>
              <S.SmallTitle>여행 국가</S.SmallTitle>
              <S.Input placeholder="여행국가를 입력해주세요." />

              <S.SmallTitle>도시</S.SmallTitle>
              <S.Input placeholder="도시를 입력해주세요." />

              <S.SmallTitle>여행 일정</S.SmallTitle>
              <S.Input placeholder="여행 일정을 입력해주세요." />
              <S.BtnWrapper>
                <Button children={"생성하기"} type="L" />
              </S.BtnWrapper>
            </S.Box>
          </S.Wrapper>
        </>
      )}
    </>
  );
};

export default MainPage;
