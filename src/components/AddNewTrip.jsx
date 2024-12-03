import styled from "styled-components";
import Button from "./Botton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AddNew } from "../api/addNew";
import AlertModal from "./AlertModal";

const AddNewTrip = ({ onClose }) => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickAddTrip = async () => {
    try {
      const res = await AddNew(country, city, startDate, endDate);
      console.log(res);
      // 요청 완료 후 모달 닫기

      if (res?.status === 200) {
        onClose();
        navigate("/");
      } else {
        setIsModalOpen(true);
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const onChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <Wrapper>
      <Title>새로운 여행을 추가해 보세요!</Title>
      <Box>
        <SmallTitle>여행 국가</SmallTitle>
        <Input
          placeholder="여행국가를 입력해주세요."
          value={country}
          onChange={onChangeCountry}
        />

        <SmallTitle>도시</SmallTitle>
        <Input
          placeholder="도시를 입력해주세요."
          value={city}
          onChange={onChangeCity}
        />

        <SmallTitle>여행 일정</SmallTitle>
        <DateWrp>
          <SmallInput
            placeholder="2026-01-12"
            value={startDate}
            onChange={onChangeStartDate}
          />
          ~
          <SmallInput
            placeholder="2026-01-15"
            value={endDate}
            onChange={onChangeEndDate}
          />
        </DateWrp>

        <BtnWrapper>
          <Button
            children={"생성하기"}
            type="L"
            color={"o"}
            onClick={onClickAddTrip}
          />
        </BtnWrapper>

        <AlertModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          guideText="입력하신 정보를 확인해주세요!"
          confirmText="확인"
          onConfirm={() => {
            setIsModalOpen(false);
          }}
          onCancel={() => {
            setIsModalOpen(false);
          }}
          isSingleButton={true}
          showTextInput={false}
        />
      </Box>
    </Wrapper>
  );
};

export default AddNewTrip;

export const Wrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 16.15rem;
  height: 90vh;
  z-index: 1000;
`;
export const ContentsWrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  padding-top: 3.5rem;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3rem;
`;

export const Box = styled.div`
  width: 29.05rem;
  height: 31.35rem;
  flex-shrink: 0;
  border-radius: 0.35rem;
  background: #fffaf2;
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const SmallTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  display: flex;
  align-items: start;
  margin-bottom: 0.6rem;
`;

export const Input = styled.input`
  width: 24.1rem;
  height: 3.45rem;
  flex-shrink: 0;
  border: none;
  background: #fff;
  padding: 0.75rem 0.9rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
  color: #000;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & ::placeholder {
    color: var(--gray1);
    font-family: var(--korean);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  margin-bottom: 1.8rem;
  outline: none;
`;

export const SmallInput = styled.input`
  width: 11.1rem;
  height: 3.45rem;
  flex-shrink: 0;
  border: none;
  background: #fff;
  padding: 0.75rem 0.9rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
  color: #000;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & ::placeholder {
    color: var(--gray1);
    font-family: var(--korean);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  outline: none;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.8rem;
`;

export const Content = styled.div`
  width: 13.20405rem;
  height: 8.6rem;
  flex-shrink: 0;
  border-radius: 0.30405rem;
  border: 0.869px solid #cdcdcd;
  margin-right: 3rem;
  cursor: pointer;
  margin-bottom: 3.46rem;
`;
export const CTitle = styled.div`
  color: #000;
  font-family: var(--korean);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
`;

const DateWrp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
