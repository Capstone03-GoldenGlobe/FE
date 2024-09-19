import SideBar from "../components/SideBar";
import * as S from "./Mypage.style";
import profile from "../assets/profile.svg";
import Button from "../components/Botton";
import { useState } from "react";

const Mypage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickIsEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    setIsEdit(false);
  };
  return (
    <>
      <SideBar />

      <S.Wrapper>
        <S.ProfileWrp>
          <img src={profile} style={{ width: "4.5rem" }} />
          <S.Welcom>닉네임님 환영합니다!</S.Welcom>
        </S.ProfileWrp>
        <S.Line />
        <S.GreyText>회원 정보</S.GreyText>

        <S.UserWrp>
          <S.User1>
            <S.UserTitle>이름</S.UserTitle>
            <S.UserInfo>김근주</S.UserInfo>
          </S.User1>
          <S.User2>
            <S.UserTitle>닉네임</S.UserTitle>
            {isEdit ? (
              <>
                <S.UserInfoInput />
              </>
            ) : (
              <S.UserInfo>근주근주</S.UserInfo>
            )}
          </S.User2>
        </S.UserWrp>

        {/*  */}
        <S.UserWrp>
          <S.User1>
            <S.UserTitle>아이디</S.UserTitle>
            <S.UserInfo>asdfs</S.UserInfo>
          </S.User1>
          <S.User1>
            <S.UserTitle1>생년월일</S.UserTitle1>
            {isEdit ? (
              <>
                <S.UserInfoInput />
              </>
            ) : (
              <S.UserInfo>1950. 10. 10</S.UserInfo>
            )}
          </S.User1>
        </S.UserWrp>

        <S.Line />
        <S.GreyText>연락 정보</S.GreyText>
        <S.UserWrp>
          <S.UserCall>
            <S.UserTitle2>핸드폰</S.UserTitle2>
            {isEdit ? (
              <S.UserInfoInputLong />
            ) : (
              <S.UserInfo2>010-1111-2222</S.UserInfo2>
            )}
          </S.UserCall>
        </S.UserWrp>

        <S.UserWrp>
          <S.UserCall>
            <S.UserTitle2>이메일</S.UserTitle2>
            {isEdit ? (
              <S.UserInfoInputLong />
            ) : (
              <S.UserInfo2>skljd@naver.com</S.UserInfo2>
            )}
          </S.UserCall>
        </S.UserWrp>

        <S.UserWrp>
          <S.UserCall>
            <S.UserTitle2>비상 연락망</S.UserTitle2>
            {isEdit ? (
              <S.UserInfoInputLong />
            ) : (
              <S.UserInfo2>010-1234-1234 (딸)</S.UserInfo2>
            )}
          </S.UserCall>
        </S.UserWrp>
        {isEdit ? (
          <Button type={"L"} onClick={onClickSave}>
            저장하기
          </Button>
        ) : (
          <Button type={"L"} onClick={onClickIsEdit}>
            수정하기
          </Button>
        )}
        <div style={{ height: "3rem" }} />
      </S.Wrapper>
    </>
  );
};
export default Mypage;
