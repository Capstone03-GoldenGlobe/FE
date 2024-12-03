import SideBar from "../components/SideBar";
import * as S from "./Mypage.style";
import profile from "../assets/profile.svg";
import Button from "../components/Botton";
import { useEffect, useState } from "react";
import { getMypage } from "../api/mypage";

const Mypage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState();
  const [name, setName] = useState();

  const onClickIsEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    setIsEdit(false);
  };
  useEffect(() => {
    mypageApi();
  }, []);

  // mypage api
  const mypageApi = async () => {
    const res = await getMypage();

    console.log(res);

    setData(res);
    setName(res?.name);
  };
  return (
    <>
      <SideBar data={data?.nickname} />

      <S.Wrapper>
        <S.ProfileWrp>
          <img src={profile} style={{ width: "4.5rem" }} />
          <S.Welcom>{data?.nickname}님 환영합니다!</S.Welcom>
        </S.ProfileWrp>
        <S.Line />
        <S.GreyText>회원 정보</S.GreyText>

        <S.UserWrp>
          <S.User1>
            <S.UserTitle>이름</S.UserTitle>
            <S.UserInfo>{data?.name}</S.UserInfo>
          </S.User1>
          <S.User2>
            <S.UserTitle>닉네임</S.UserTitle>
            {isEdit ? (
              <>
                <S.UserInfoInput placeholder={data?.nickname} />
              </>
            ) : (
              <S.UserInfo>{data?.nickname}</S.UserInfo>
            )}
          </S.User2>
        </S.UserWrp>

        {/*  */}
        <S.UserWrp>
          <S.User1>
            <S.UserTitle>아이디</S.UserTitle>
            <S.UserInfo>{data?.cellphone}</S.UserInfo>
          </S.User1>
          <S.User1>
            <S.UserTitle1>생년월일</S.UserTitle1>
            {isEdit ? (
              <>
                <S.UserInfoInput placeholder={data?.birth} />
              </>
            ) : (
              <S.UserInfo>{data?.birth}</S.UserInfo>
            )}
          </S.User1>
        </S.UserWrp>

        <S.Line />
        {/* <S.GreyText>연락 정보</S.GreyText>
        <S.UserWrp>
          <S.UserCall>
            <S.UserTitle2>전화번호</S.UserTitle2>
            {isEdit ? (
              <S.UserInfoInputLong />
            ) : (
              <S.UserInfo2>010-1111-2222</S.UserInfo2>
            )}
          </S.UserCall>
        </S.UserWrp> */}

        {/* <S.UserWrp>
          <S.UserCall>
            <S.UserTitle2>이메일</S.UserTitle2>
            {isEdit ? (
              <S.UserInfoInputLong />
            ) : (
              <S.UserInfo2>skljd@naver.com</S.UserInfo2>
            )}
          </S.UserCall>
        </S.UserWrp> */}
        <div style={{ height: "3rem" }} />

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
