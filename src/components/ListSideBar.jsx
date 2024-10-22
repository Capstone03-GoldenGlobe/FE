import { UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import profileBlue from "../assets/profileBlue.svg";
import profileRed from "../assets/profileRed.svg";
import profileGreen from "../assets/profileGreen.svg";
import plusUser from "../assets/plusUser.svg";
import plus from "../assets/plus.svg";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendChecklistGroup } from "../api/sendCheckListGroup";
import { getCheckListAll } from "../api/checkList";
import { sharedUser } from "../api/sharedUser";

const ListSideBar = ({ id, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [group, setGroup] = useState([]);
  const navigate = useNavigate();

  // 항목 Get
  const getGroup = async () => {
    const groupResponse = await getCheckListAll(id);
    setGroup(groupResponse?.data.groups);
  };

  // // 페이지가 로드될 때 그룹 목록 가져오기
  // useEffect(() => {
  //   getGroup(); // 컴포넌트 마운트 시 그룹 가져오기
  // }, [group]);

  // 항목 추가 눌렀을 때
  const addGroup = () => {
    setGroupName(""); // 입력값 초기화
    setIsClicked(true); // 입력창 열기
  };

  // 공유 가족 추가 버튼 눌렀을 떄
  const onClickPlus = () => {
    setIsModalOpen(true);
  };

  // 그룹 추가 POST 요청
  const postGroup = async () => {
    try {
      const res = await sendChecklistGroup(groupName, id);
      console.log(res);

      // 상태 초기화
      setGroupName("");
      setIsClicked(false);

      if (res.status === 200) {
        await getGroup();

        window.location.reload(); // 페이지 새로고침
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 엔터 키 입력 시 그룹 추가
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await postGroup(); // POST 요청 후 상태 업데이트
    }
  };

  // 입력창이 포커스를 잃었을 때 그룹 추가
  const handleBlur = () => {
    postGroup(); // 포커스가 벗어났을 때도 POST 요청
  };

  const goMain = () => {
    navigate("/");
  };

  // 공유중인 사용자 가져오기
  const getSharedUser = async () => {
    const res = sharedUser(id);
  };

  return (
    <>
      <Wrapper>
        <Title onClick={goMain}>GoldenGlobe</Title>
        <Country>🇹🇭 태국</Country>
        <UserWrp>
          <img
            src={profileBlue}
            style={{ width: "3rem", marginRight: "0.4rem" }}
          />
          <img
            src={profileRed}
            style={{ width: "3rem", marginRight: "0.4rem" }}
          />
          <img
            src={profileGreen}
            style={{ width: "3rem", marginRight: "0.4rem" }}
          />
          <img
            src={plusUser}
            style={{ width: "2.8rem", cursor: "pointer" }}
            onClick={onClickPlus}
          />
        </UserWrp>

        {/* 그룹 목록 렌더링 */}
        {(data?.length ? data : group)?.map((item, index) => (
          <Index key={index}>{item?.groupName}</Index>
        ))}

        {/* 그룹 입력창 */}
        {isClicked && (
          <GrpInput
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onKeyPress={handleKeyPress}
            onBlur={handleBlur}
          />
        )}

        {/* 항목 추가 버튼 */}
        <img
          src={plus}
          style={{ width: "2.5rem", cursor: "pointer", marginTop: "3rem" }}
          onClick={addGroup}
        />
      </Wrapper>

      {/* 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        guideText={"가족을 추가해주세요!"}
        confirmText="추가하기"
        cancelText="취소"
        onConfirm={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        isSingleButton={true}
        showTextInput={true}
        id={id}
      />
    </>
  );
};

export default ListSideBar;

const Wrapper = styled.div`
  width: 16.15rem;
  height: 100%;
  flex-shrink: 0;
  border-radius: 0rem 1.5rem 1.5rem 0rem;
  background: #ffa500;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  padding-bottom: 3rem;

  max-height: 100vh; /* 최대 높이를 뷰포트의 높이로 설정 */
  overflow-y: auto; /* 수직 스크롤바를 활성화 */
`;
const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 2.5rem;
  cursor: pointer;
`;

const Country = styled.div`
  color: #fff;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.15rem;
`;

const UserWrp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Index = styled.div`
  color: #fff;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 2.1rem;
`;

const GrpInput = styled.input`
  width: 9.45rem;
  border: none;
  background-color: #ffa500;
  border-bottom: 0.15rem solid white;
  height: 1.6rem;
  font-size: 1.4rem;
  font-family: var(--korean);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  margin-top: 3rem;
  box-sizing: border-box;
  padding-bottom: 2px;
  color: white;
  padding-left: 3px;
  text-align: center;
`;
