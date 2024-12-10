import { UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import profileBlue from "../assets/profileBlue.svg";
import profileRed from "../assets/profileRed.svg";
import profileGreen from "../assets/profileGreen.svg";
import plusUser from "../assets/plusUser.svg";
import plus from "../assets/plus.svg";
import Modal from "./Modal";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendChecklistGroup } from "../api/sendCheckListGroup";
import { getCheckListAll } from "../api/checkList";
import { sharedUser } from "../api/sharedUser";
import dots from "../assets/dots.svg";
import { DeleteGroupApi } from "../api/deletGroup";
import Button from "./Botton";

const ListSideBar = ({ id, data, height, containerHeight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [group, setGroup] = useState([]);
  const [suser, setSuser] = useState([]);
  const [dropdown, setDropdown] = useState([]);
  const navigate = useNavigate();
  const [heiProps, setHeiProps] = useState([]);

  // 항목 Get
  const getGroup = async () => {
    const groupResponse = await getCheckListAll(id);
    setGroup(groupResponse?.data.groups);
  };

  // console.log("높이 props", height);

  // console.log("체크리스트 데이터", data);
  // console.log("체크리스트 group", group);

  // 항목 삭제
  const deleteGroup = async (group_id) => {
    const res = await DeleteGroupApi(group_id);
    console.log("그룹 삭제", res);

    if (res.status === 200) {
      await getGroup();

      window.location.reload(); // 페이지 새로고침
    }
  };

  useEffect(() => {
    console.log("목록 업데이트");
  }, [group]);

  useEffect(() => {
    // Only update if height actually changed
    if (JSON.stringify(height) !== JSON.stringify(heiProps)) {
      setHeiProps(height);
    }
  }, [height]);

  useEffect(() => {
    const fetchSharedUser = async () => {
      try {
        const res = await sharedUser(id);
        console.log("공유 사용자", res); // 데이터를 제대로 받아오는지 확인
        setSuser(res.data);
      } catch (error) {
        console.error("Error fetching shared users:", error);
      }
    };

    fetchSharedUser();
  }, []);

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

  useEffect(() => {
    // 화면 외부 클릭 감지
    const handleClickOutside = (event) => {
      if (!dropdownRefs.current.some((ref) => ref?.contains(event.target))) {
        setDropdown([]); // 모든 드롭다운 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownRefs = useRef([]); // 각 DotBox의 ref를 저장

  const toggleDropdown = (index) => {
    setDropdown((prev) => {
      const newDropdowns = [...prev];
      newDropdowns[index] = !newDropdowns[index]; // 현재 인덱스 상태 토글
      return newDropdowns;
    });
  };

  return (
    <>
      <Wrapper>
        <Title onClick={goMain}>GoldenGlobe</Title>

        <UserWrp>
          {suser?.map((item) => (
            <Suser>
              <img
                key={item.user_id}
                src={profileBlue}
                style={{
                  width: "3rem",
                  marginRight: "0.4rem",

                  marginLeft: "5px",
                }}
              />
              <SuserName>{item.user_nickname}</SuserName>
            </Suser>
          ))}

          {/* <img
            src={profileRed}
            style={{ width: "3rem", marginRight: "0.4rem" }}
          />
          <img
            src={profileGreen}
            style={{ width: "3rem", marginRight: "0.4rem" }}
          /> */}
          {/* <img
            src={plusUser}
            style={{ width: "2.8rem", cursor: "pointer" }}
            onClick={onClickPlus}
          /> */}
          <Button type={"S"} onClick={onClickPlus} children={"공유하기"} />
        </UserWrp>

        <IndexTemp height={containerHeight}>PDF기반 준비물 추천</IndexTemp>
        {/* 그룹 목록 렌더링 */}
        {(data?.length ? data : group)?.map((item, index) => (
          <GrpWrp heightProps={heiProps[index]}>
            <Index key={index}>{item?.groupName}</Index>
            <Dots src={dots} onClick={() => toggleDropdown(index)} />
            {dropdown[index] && ( // 현재 드롭다운이 열려 있으면 렌더링
              <>
                <DotBox
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  onClick={() => deleteGroup(item.groupId)}
                >
                  삭제하기
                </DotBox>
                {/* <DotBox2
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  onClick={() => deleteGroup(item.groupId)}
                >
                  수정하기
                </DotBox2> */}
              </>
            )}
          </GrpWrp>
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
  overflow-y: auto;
  overflow: visible;
  /* 수직 스크롤바를 활성화 */
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
  margin-bottom: 10px;
`;

const Index = styled.div`
  color: #fff;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  box-sizing: border-box;
  position: fixed;
`;

const IndexTemp = styled.div`
  color: #fff;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;

  box-sizing: border-box;

  /* margin-top: 2em;
  margin-bottom: 2rem; */
  height: ${(props) => props.height}px;
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

const Suser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuserName = styled.div`
  text-align: center;
`;

const Dots = styled.img`
  margin-bottom: 0px;
  margin-left: 9rem;
  cursor: pointer;
`;

const GrpWrp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  height: ${(props) => Number(props.heightProps)}px;
`;

export const DotBox = styled.div`
  border-radius: 12px 12px 0 0;
  background: var(--White, #fff);
  /* background-color: green; */
  color: var(--Black, #000);
  text-align: center;
  width: 90px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  /* Button 14SB */
  font-family: var(--korean);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
  z-index: 1000;
  position: absolute;
  right: 0;
  margin-right: 10px;

  left: 10.5rem;

  cursor: pointer;
`;
export const DotBox2 = styled.div`
  border-radius: 0 0 12px 12px;
  background: var(--White, #fff);
  /* background-color: green; */
  color: var(--Black, #000);
  text-align: center;
  width: 90px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e1e1e1;

  /* Button 14SB */
  font-family: var(--korean);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
  z-index: 1000;
  position: absolute;
  top: 45px;
  right: 0;
  margin-right: 10px;

  left: 10.5rem;
  top: -0.2rem;
  margin-top: 40px;

  cursor: pointer;
`;
