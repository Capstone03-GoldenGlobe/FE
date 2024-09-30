import { UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import profileBlue from "../assets/profileBlue.svg";
import profileRed from "../assets/profileRed.svg";
import profileGreen from "../assets/profileGreen.svg";
import plusUser from "../assets/plusUser.svg";
import plus from "../assets/plus.svg";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListSideBar = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickPlus = () => {
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
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

        {data.map((item) => (
          <Index>{item?.groupName}</Index>
        ))}

        <img
          src={plus}
          style={{ width: "2.5rem", cursor: "pointer", marginTop: "3rem" }}
        />
      </Wrapper>
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

  position: fixed;
  left: 0;
  top: 0;
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
