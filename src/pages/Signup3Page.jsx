import * as S from "./Signup3Page.style";
import PageTitle from "../components/PageTitle";
import SignupProgress from "../components/SignupProgress";
import Button from "../components/Botton";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import info from "../assets/info.svg";
import { useState } from "react";
import { SignupApi } from "../api/signup";
import AlertModal from "../components/AlertModal";

const Signup3Page = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const goNext = async () => {
    try {
      await Signup();
    } catch (err) {
      console.log("에러 발생: ", err); // 에러 전체 출력
      console.log("JSON 변환: ", err.toJSON?.());

      // 에러 메시지를 안전하게 추출
      const serverMessage = err?.response?.data
        ? err.response.data // 서버에서 받은 메시지
        : err?.message // 기본 Axios 에러 메시지
        ? err.message
        : "알 수 없는 에러가 발생했습니다."; // 기본 메시지

      setErrorMessage(serverMessage); // 에러 메시지를 상태로 저장
      setIsModalOpen2(true);
    }
  };

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpw, setConpw] = useState("");

  const savedUserData = JSON.parse(localStorage.getItem("userData"));
  // console.log(savedUserData);

  const goBack = () => {
    navigate(-1);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const Signup = async () => {
    console.log(
      "회원기입 인자 확인: ",
      savedUserData.name,
      savedUserData.birth,
      savedUserData.cellphone,
      password,
      nickname,
      (savedUserData.profile = ""),
      savedUserData.gender
    );
    const res = await SignupApi(
      savedUserData.name,
      savedUserData.birth,
      savedUserData.cellphone,
      password,
      nickname,
      (savedUserData.profile = ""),
      savedUserData.gender
    );

    console.log("회원가입 res", res);
    if (res?.status == 201) {
      setIsModalOpen(true);
    } else {
      setErrorMessage(res);
      setIsModalOpen2(true);
    }

    localStorage.removeItem("userData");
  };

  return (
    <>
      <S.Wrapper>
        <PageTitle title={"GoldenGlobe"} />
        <SignupProgress step={2} />
        <div style={{ height: "3.8rem" }} />
        <div>
          <S.InputWrp1>
            <S.Title>닉네임</S.Title>
            <div style={{ marginRight: "2rem" }} />
            <InputBox
              type="text"
              width="22.25rem"
              placeholder={"닉네임을 입력해주세요."}
              value={nickname}
              onChange={onChangeNickname}
            />
          </S.InputWrp1>

          <S.InputWrp1>
            <S.Title>비밀번호</S.Title>
            <InputBox
              type="password"
              width="22.25rem"
              placeholder={"비밀번호를 입력해주세요."}
              onChange={onChangePw}
              value={password}
            />
          </S.InputWrp1>
          <S.InputWrp1>
            <S.Title>비밀번호 확인</S.Title>
            <InputBox type="password" width="22.25rem" />
          </S.InputWrp1>
        </div>
        <S.BtnWrapper>
          <Button type="L" color="g" onClick={goBack}>
            이전
          </Button>
          <div style={{ marginRight: "2.2rem" }} />
          <Button type="L" color="o" onClick={goNext}>
            회원가입
          </Button>
        </S.BtnWrapper>

        <AlertModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          guideText="회원가입에 성공했습니다!"
          confirmText="확인"
          onConfirm={() => {
            setIsModalOpen(false);
            navigate("/login");
          }}
          onCancel={() => {
            setIsModalOpen(false);
          }}
          isSingleButton={true}
          showTextInput={false}
        />

        <AlertModal
          isOpen={isModalOpen2}
          onClose={() => {
            setIsModalOpen2(false);
          }}
          guideText={errorMessage}
          confirmText="확인"
          onConfirm={() => {
            setIsModalOpen2(false);
            navigate("/signup3");
          }}
          onCancel={() => {
            setIsModalOpen2(false);
          }}
          isSingleButton={true}
          showTextInput={false}
        />

        <AlertModal
          isOpen={isModalOpen3}
          onClose={() => {
            setIsModalOpen3(false);
          }}
          guideText="이미 가입된 전화번호입니다."
          confirmText="확인"
          onConfirm={() => {
            setIsModalOpen3(false);
            navigate("/signup3");
          }}
          onCancel={() => {
            setIsModalOpen3(false);
          }}
          isSingleButton={true}
          showTextInput={false}
        />
      </S.Wrapper>
    </>
  );
};

export default Signup3Page;
