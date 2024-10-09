import styled from "styled-components";
import profile from "../assets/profile.svg";
import mypage from "../assets/mypage.svg";
import logout from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import { Logout } from "../api/logout";

const SideBar = ({ data }) => {
  const navigate = useNavigate();

  const onClickLogout = async () => {
    try {
      const res = await Logout();
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const goMain = () => {
    navigate("/");
  };
  const goNew = () => {
    navigate("/");
  };
  const goCheck = () => {
    navigate("/list");
  };
  const goBot = () => {
    navigate("/chat");
  };
  const goMypage = () => {
    navigate("/mypage");
  };

  return (
    <>
      <Wrapper>
        <Title>GoldenGlobe</Title>
        <Profile>
          <img
            src={profile}
            style={{ marginRight: "0.8rem", width: "4.1rem" }}
          />
          <Text>
            안녕하세요
            <br /> {data}님!
          </Text>
        </Profile>
        <Index onClick={goMain}>여행 모아보기</Index>
        <Index onClick={goNew}>새로운 여행 추가</Index>
        <Index onClick={goCheck}>준비물 확인하기</Index>
        <Index onClick={goBot}>챗봇에게 질문하기</Index>
        <Line />
        <div>
          <Sub onClick={goMypage}>
            <img
              src={mypage}
              style={{ width: "2rem", marginRight: "0.8rem" }}
            />
            마이페이지
          </Sub>

          <Sub onClick={onClickLogout}>
            <img
              src={logout}
              style={{ width: "2rem", marginRight: "0.8rem" }}
            />
            로그아웃
          </Sub>
        </div>
      </Wrapper>
    </>
  );
};

export default SideBar;

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
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.9rem;
  margin-bottom: 4.2rem;
`;

const Text = styled.div`
  color: #fff;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Index = styled.div`
  margin-bottom: 2.75rem;
  color: #fff;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const Line = styled.div`
  width: 13.05rem;
  height: 0.1rem;
  background: #fff;
  margin-top: 30%;
`;
const Sub = styled.div`
  margin-top: 1.95rem;
  color: #fff;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: row;

  align-items: center;

  cursor: pointer;
`;
