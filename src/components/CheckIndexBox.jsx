import Checkbox from "./Checkbox";
import styled from "styled-components";
import memo from "../assets/memo.svg";
import checkPlus from "../assets/checkPlus.svg";
import { useEffect, useState } from "react";
import { sendChecklistItem } from "../api/checkListItem";
import { memoPostApi } from "../api/memoPost";
import { memoDeleteApi } from "../api/memoDelete";
import { editMemoApi } from "../api/editMemo";
import { editItemApi } from "../api/editItem";

const CheckIndexBox = ({ data, id }) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [memoInput, setMemoInput] = useState([]);
  const [memeContent, setMemoContent] = useState("");
  const [indexInput, setIndexInput] = useState("");
  const [isEditMemo, setIsEditMemo] = useState(false);
  const [isEditItem, setIsEditItem] = useState([]);

  // data.items가 변경될 때 체크박스 상태 초기화
  useEffect(() => {
    if (data?.items) {
      const initialCheckboxes = data.items.map((item) => ({
        id: item.itemId,
        color: "#85B6FF",
        value: item.itemName,
        isChecked: item.check,
      }));
      setCheckboxes(initialCheckboxes);

      setIsEditItem(data.items.map(() => false));
    }

    if (data?.memo) {
      setIsEditMemo(true);
    }
  }, [data]);

  // checkPlus 버튼 클릭 시 체크박스를 추가하는 함수
  const addCheckbox = () => {
    const newCheckbox = {
      id: checkboxes.length > 0 ? checkboxes[checkboxes.length - 1].id + 1 : 1, // 고유 ID 생성
      color: "#85B6FF",
      value: "", // 기본값을 빈 문자열로 설정
    };
    setCheckboxes((prev) => [...prev, newCheckbox]);
    setIsEditItem((prev) => [...prev, false]);
  };

  // 메모 post 함수
  const postMemo = async () => {
    const res = await memoPostApi(memoInput[0].content, data.groupId);
    console.log("메모 포스트", res);
  };

  // 메모 수정 함수
  const putMemo = async () => {
    const res = await editMemoApi(data.groupId, memoInput[0].content);

    console.log("메모수정", res);
  };

  // memo 버튼 클릭 시 메모 추가 함수
  const addMemo = () => {
    setMemoInput((prev) => [...prev, { isSmall: false, content: "" }]);
    setIsEditMemo(true);
  };

  // 메모 크기 변경 함수
  const toggleMemoSize = (index) => {
    setMemoInput((prev) =>
      prev.map((memo, i) =>
        i === index ? { ...memo, isSmall: !memo.isSmall } : memo
      )
    );
  };

  // 메모 삭제 api
  const deleteMemoApi = async () => {
    const res = await memoDeleteApi(data.memoId);
    console.log("삭제 api", res);
  };

  // 메모 삭제 함수
  const onClickMemoDelete = () => {
    deleteMemoApi();
  };

  // 페이지가 로드될 때 API로 받아온 데이터를 상태에 저장하여 메모 표시
  useEffect(() => {
    if (data?.memo) {
      setMemoInput([{ isSmall: false, content: data.memo }]);
    }
  }, [data]);

  // item post 함수
  const postItem = async () => {
    const res = await sendChecklistItem(id, data.groupId, indexInput);

    console.log(res);
  };

  // item 수정함수
  const putItem = async (item_id, item_name) => {
    const res = await editItemApi(item_id, item_name);

    console.log("아이템 수정", res);
  };

  const onChangeIndex = (e, id, index) => {
    // 체크박스의 id를 사용하여 해당 체크박스의 값을 업데이트
    setCheckboxes((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, value: e.target.value } : checkbox
      )
    );

    setIndexInput(e.target.value);
    setIsEditItem((prev) => prev.map((item, i) => (i === index ? true : item)));
  };

  // 엔터 눌렀을 때
  // const handleKeyPress = async (e) => {
  //   if (e.key === "Enter") {
  //     postItem();
  //   }
  // };

  // 입력창이 포커스를 잃었을 때 그룹 추가
  const handleBlur = () => {
    postItem();
  };

  const editItemhandleBlur = (itemId, contents) => {
    putItem(itemId, contents);
  };

  // 입력창이 포커스를 잃었을 때 그룹 추가
  const memohandleBlur = () => {
    postMemo();
  };

  const editMemohandleBlur = () => {
    putMemo();
  };

  return (
    <ListBox>
      <div>
        <Checks>
          {checkboxes?.map((checkbox, idx) => (
            <Checkbox
              key={checkbox.id}
              color={checkbox.color}
              isCheckedProps={checkbox.isChecked}
              id={Number(checkbox.id)}
              value={checkbox ? checkbox.value : indexInput}
              onChange={(e) => onChangeIndex(e, checkbox.id, idx)}
              onBlur={() =>
                isEditItem[idx]
                  ? editItemhandleBlur(checkbox.id, indexInput)
                  : handleBlur()
              }
            />
          ))}
        </Checks>
        {memoInput.length > 0 && (
          <Memos>
            {memoInput.map((memo, index) =>
              memo.isSmall ? (
                <SmallMemo key={index} onClick={() => toggleMemoSize(index)} />
              ) : (
                <MemoWrp key={index}>
                  <Memo
                    value={memo.content}
                    onBlur={isEditMemo ? editMemohandleBlur : memohandleBlur}
                    onChange={(e) => {
                      const newContent = e.target.value;
                      setMemoInput((prev) =>
                        prev.map((m, i) =>
                          i === index ? { ...m, content: newContent } : m
                        )
                      );
                    }}
                  />
                  <TextWrp>
                    <Text onClick={() => onClickMemoDelete()}>삭제</Text>
                    <Text onClick={() => toggleMemoSize(index)}>접기</Text>
                  </TextWrp>
                </MemoWrp>
              )
            )}
          </Memos>
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
          alt="체크박스 추가"
        />
      </Emoji>
    </ListBox>
  );
};

export default CheckIndexBox;

// styled components (변경 없음)
const ListBox = styled.div`
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

const TextWrp = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
`;
