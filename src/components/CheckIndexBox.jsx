import Checkbox from "./Checkbox";
import styled from "styled-components";
import memo from "../assets/memo.svg";
import checkPlus from "../assets/checkPlus.svg";
import { useEffect, useState } from "react";

const CheckIndexBox = ({ data }) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [memoInput, setMemoInput] = useState([]);
  const [memeContent, setMemoContent] = useState("");

  // checkPlus 버튼 클릭 시 체크박스를 추가하는 함수
  const addCheckbox = () => {
    setCheckboxes((prevCheckboxes) => [
      ...prevCheckboxes,
      <Checkbox key={prevCheckboxes.length} color={"#85B6FF"} />,
    ]);
  };

  // memo 버튼 클릭 시 메모 추가 함수
  const addMemo = () => {
    setMemoInput((prev) => [...prev, { isSmall: false }]);
  };

  // 메모 크기 변경 함수
  const toggleMemoSize = (index) => {
    setMemoInput((prev) =>
      prev.map((memo, i) =>
        i === index ? { ...memo, isSmall: !memo.isSmall } : memo
      )
    );
  };

  useEffect(() => {
    data?.items.map((item) => (
      <Checkbox key={item.itemId} color={"#85B6FF"} value={item.itemName} />
    ));
  }, [data]);

  // 페이지가 로드될 때 API로 받아온 데이터를 상태에 저장하여 메모 표시
  useEffect(() => {
    if (data?.memo) {
      setMemoInput([{ isSmall: false, content: data.memo }]);
    }
  }, [data]);

  console.log("props 확인", data);
  return (
    <>
      <ListBox>
        <div>
          <Checks>
            {data?.items.map((item) => (
              <Checkbox
                key={item.itemId}
                color={"#85B6FF"}
                value={item.itemName}
              />
            ))}
          </Checks>
          {memoInput ? (
            <Memos>
              {memoInput.map((memo, index) =>
                memo.isSmall ? (
                  <SmallMemo
                    key={index}
                    onClick={() => toggleMemoSize(index)}
                  />
                ) : (
                  <MemoWrp key={index}>
                    <Memo value={data?.memo} />
                    <Text onClick={() => toggleMemoSize(index)}>접기</Text>
                  </MemoWrp>
                )
              )}
            </Memos>
          ) : (
            <></>
          )}
        </div>
        <Emoji>
          <img
            src={memo}
            style={{
              width: "2.4rem",
              marginRight: "0.5rem",
              cursor: "pointer",
            }}
            alt="메모"
            onClick={addMemo}
          />
          <img
            src={checkPlus}
            style={{ width: "2.4rem", cursor: "pointer" }}
            onClick={addCheckbox}
          />
        </Emoji>
      </ListBox>
    </>
  );
};

export default CheckIndexBox;

const ListBox = styled.div`
  /* height: ${(props) => props.height}; */
  height: auto;
  box-sizing: border-box;
  padding: 1.5rem 3rem;
  background-color: white;
  text-align: start;
  border-bottom: 1px solid #d3d3d3;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Emoji = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const Checks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap; /* 요소가 넘치면 줄 바꿈 */
  gap: 0.5rem; /* 요소 사이 간격 */
`;

const Memo = styled.textarea`
  width: 15.05rem;
  height: 9rem;
  flex-shrink: 0;
  border-radius: 0.35rem;
  background: #fff08d;

  position: static;
  top: 10rem;
  right: 10rem;

  resize: none;
  border: none;
  box-sizing: border-box;
  padding: 1rem;
  color: #000;

  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Memos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;

  flex-wrap: wrap; /* 요소가 넘치면 줄 바꿈 */
  gap: 0.5rem; /* 요소 사이 간격 */
`;

const MemoWrp = styled.div`
  width: 15.05rem;
  height: 11rem;
  flex-shrink: 0;
  border-radius: 0.35rem;
  background: #fff08d;

  box-sizing: border-box;
  margin-right: 1rem;
  text-align: end;
  cursor: pointer;
  padding-right: 1rem;
`;

const SmallMemo = styled.div`
  width: 3rem;
  height: 2.85rem;
  flex-shrink: 0;
  border-radius: 0.35rem;
  background: #fff08d;
  margin-right: 1rem;
`;

const Text = styled.div`
  color: #a2a1a1;
  font-family: var(--korean);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
