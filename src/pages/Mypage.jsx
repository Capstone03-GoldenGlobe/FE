import SideBar from "../components/SideBar";
import * as S from "./Mypage.style";
import profile from "../assets/profile.svg";
import Button from "../components/Botton";
import { useEffect, useState } from "react";
import { getMypage } from "../api/mypage";
import { editMypageApi } from "../api/editMypage";

const Mypage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const [cellphone, setCellphone] = useState("");

  const onClickIsEdit = () => {
    setIsEdit(true);
  };

  const onClickSave = () => {
    setIsEdit(false);
    EditMypage();
  };

  useEffect(() => {
    mypageApi();
  }, []);

  // 마이페이지 수정 api
  const EditMypage = async () => {
    const updatedData = {
      name: name || data?.name, // 수정하지 않았으면 기존 값 사용
      nickname: nickname || data?.nickname,
      cellphone: cellphone || data?.cellphone,
      birth: birth || data?.birth,
    };

    try {
      const res = await editMypageApi(
        updatedData.name,
        updatedData.nickname,
        updatedData.cellphone,
        updatedData.birth
      );

      console.log("마이페이지 수정", res);

      if (res.status === 200) {
        // 수정 성공 시 최신 데이터 불러오기
        await mypageApi();
        setIsEdit(false); // 수정 모드 종료
      } else {
        console.error("마이페이지 수정 실패:", res);
      }
    } catch (error) {
      console.error("마이페이지 수정 중 에러:", error);
    }
  };

  // mypage api
  const mypageApi = async () => {
    const res = await getMypage();

    console.log(res);

    setData(res);
    setName(res?.name);
    setNickname(res?.nickname ?? "");
    setCellphone(res?.cellphone ?? "");
    setBirth(res?.birth ?? "");
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
                <S.UserInfoInput
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
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
                <S.UserInfoInput
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
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
          <Button type={"L"} color={"o"} onClick={onClickSave}>
            저장하기
          </Button>
        ) : (
          <Button type={"L"} color={"o"} onClick={onClickIsEdit}>
            수정하기
          </Button>
        )}
        <div style={{ height: "3rem" }} />
      </S.Wrapper>
    </>
  );
};
export default Mypage;
