import Checkbox from "./Checkbox";
import styled from "styled-components";
import memo from "../assets/memo.svg";
import checkPlus from "../assets/checkPlus.svg";
import React, { useEffect, useRef, useState } from "react";
import { sendChecklistItem } from "../api/checkListItem";
import { memoPostApi } from "../api/memoPost";
import { memoDeleteApi } from "../api/memoDelete";
import { editMemoApi } from "../api/editMemo";
import { editItemApi } from "../api/editItem";
import { DeleteItemApi } from "../api/deleteItem";
import { getCheckListAll } from "../api/checkList";

const CheckIndexBox = ({ data, id, setGroupHeight }) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [memoInput, setMemoInput] = useState([]);
  const [memeContent, setMemoContent] = useState("");
  const [indexInput, setIndexInput] = useState("");
  const [isEditMemo, setIsEditMemo] = useState(false);
  const [isEditItem, setIsEditItem] = useState([]);
  const [fetchData, setFetchData] = useState([]);

  // 높이 설정
  const boxRef = useRef(null);

  // 높이 설정
  useEffect(() => {
    if (boxRef.current) {
      const height = boxRef.current.offsetHeight; // 높이 계산
      setGroupHeight(height); // 부모 컴포넌트로 높이 전달
    }
  }, [setGroupHeight]); // data나 setGroupHeight가 변경될 때마다 실행

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

  useEffect(() => {
    if (fetchData && Array.isArray(fetchData[id])) {
      const updatedCheckboxes = fetchData[id].map((item) => ({
        id: item.itemId,
        color: "#85B6FF",
        value: item.itemName,
        isChecked: item.check || false,
      }));
      setCheckboxes(updatedCheckboxes);
      setIsEditItem(fetchData[id].map(() => false)); // 초기 isEditItem 상태 설정
    }
  }, [fetchData, id]);

  const getData = async () => {
    const res = await getCheckListAll(id);
    console.log("getData", res);
    setFetchData(res?.data.groups);
  };

  // console.log(memoInput);

  // checkPlus 버튼 클릭 시 체크박스를 추가하는 함수
  const addCheckbox = () => {
    const newCheckbox = {
      id: checkboxes.length > 0 ? checkboxes[checkboxes.length - 1].id + 1 : 1, // 고유 ID 생성
      color: "#85B6FF",
      value: "", // 기본값을 빈 문자열로 설정
      isNew: true,
    };
    setCheckboxes((prev) => [...prev, newCheckbox]);
    setIsEditItem((prev) => [...prev, false]);
  };

  // 메모 post 함수
  const postMemo = async () => {
    const res = await memoPostApi(memoInput[0]?.content, data?.groupId);
    console.log("메모 포스트", res);
  };

  // 메모 수정 함수
  const putMemo = async () => {
    const res = await editMemoApi(data?.groupId, memoInput[0]?.content);

    console.log("메모수정", res);
  };

  // memo 버튼 클릭 시 메모 추가 함수
  const addMemo = () => {
    setMemoInput((prev) => [...prev, { isSmall: false, content: "" }]);
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
  const deleteMemo = async (memoId) => {
    const res = await memoDeleteApi(memoId);
    console.log("삭제 api", res);
  };

  // 메모 삭제 함수
  const onClickMemoDelete = () => {
    console.log(data?.memoId);
    deleteMemo(data?.memoId);

    // 메모 삭제 후, UI 상태를 업데이트하여 바로 변경사항이 반영되도록 설정
    setMemoInput([]);

    // 메모 edit도 false로 바꿔줘야함
    setIsEditMemo(false);
  };

  // console.log("data", data);

  // 페이지가 로드될 때 API로 받아온 데이터를 상태에 저장하여 메모 표시
  useEffect(() => {
    if (data?.memo) {
      setMemoInput([{ isSmall: false, content: data.memo }]);
    }
  }, [data]);

  // item post 함수
  const postItem = async () => {
    try {
      const res = await sendChecklistItem(id, data.groupId, indexInput);
      console.log("POST 아이템 결과:", res);

      // const newItem = {
      //   id: res.data.itemId, // 서버에서 받은 ID
      //   color: "#85B6FF",
      //   value: indexInput,
      //   isChecked: false,
      // };
      // setCheckboxes((prev) => [...prev, newItem]); // 새로운 항목 추가
    } catch (error) {
      console.error("POST 실패:", error);
    }
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
    setIsEditItem((prev) =>
      prev.map((item, i) =>
        i === index && checkboxes[index].value ? true : item
      )
    );
  };

  // // 아이템 삭제 함수
  // const deleteItem = async (itemId) => {
  //   try {
  //     await DeleteItemApi(itemId);
  //     console.log("삭제 성공:", itemId);

  //     setCheckboxes((prev) =>
  //       prev.filter((checkbox) => checkbox.id !== itemId)
  //     ); // 상태에서 제거
  //   } catch (error) {
  //     console.error("삭제 실패:", error);
  //   }
  // };

  // // 아이템 삭제 핸들러
  // const handleDeleteItem = (itemId) => {
  //   setFetchData((prevItems) => prevItems.filter((item) => item.id !== itemId));
  // };

  // 엔터 눌렀을 때
  // const handleKeyPress = async (e) => {
  //   if (e.key === "Enter") {
  //     postItem();
  //   }
  // };

  // // 입력창이 포커스를 잃었을 때 그룹 추가
  // const handleBlur = (idx) => {
  //   postItem();
  //   // 새 항목 추가 후 해당 인덱스의 isEditItem 값을 다시 false로 설정
  //   setIsEditItem((prev) => prev.map((item, i) => (i === idx ? false : item)));
  // };

  // 입력창이 포커스를 잃었을 때 항목 추가
  const handleBlur = (idx) => {
    const checkbox = checkboxes[idx];
    if (checkbox.isNew) {
      // 새로운 아이템일 경우 post 호출
      postItem();
      // 새 항목 추가 후 해당 인덱스의 isEditItem 값을 다시 false로 설정하고 isNew를 false로 변경
      setCheckboxes((prev) =>
        prev.map((item, i) => (i === idx ? { ...item, isNew: false } : item))
      );
    }
    setIsEditItem((prev) => prev.map((item, i) => (i === idx ? false : item)));
  };

  // isEdit == true이고 inputValue의 length가 0이면 삭제
  // const editItemhandleBlur = (itemId, contents) => {
  //   if (!contents) {
  //     deleteItem(itemId);
  //   } else putItem(itemId, contents);
  // };

  // 아이템 수정 시 onBlur
  const editItemhandleBlur = (itemId, contents, idx) => {
    putItem(itemId, contents);
    setIsEditItem((prev) => prev.map((item, i) => (i === idx ? false : item)));
  };

  // 입력창이 포커스를 잃었을 때 그룹 추가
  const memohandleBlur = () => {
    postMemo();
  };
  const editMemohandleBlur = () => {
    putMemo();
  };

  return (
    <ListBox ref={boxRef}>
      <div>
        <Checks>
          {checkboxes?.map((checkbox, idx) => (
            <Checkbox
              key={checkbox.id}
              color={checkbox.color}
              isCheckedProps={checkbox.isChecked}
              id={Number(checkbox.id)}
              value={checkbox ? checkbox.value : indexInput}
              // onDelete={deleteItem}
              onChange={(e) => {
                onChangeIndex(e, checkbox.id, idx);
              }}
              onBlur={() =>
                isEditItem[idx] && !checkboxes[idx].isNew
                  ? editItemhandleBlur(checkbox.id, indexInput, idx)
                  : handleBlur(idx)
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

const ListBox = styled.div`
  height: auto;
  box-sizing: border-box;
  padding: 1.5rem 3rem;
  /* background-color: white; */
  background-color: none;
  text-align: start;
  border-bottom: 1px solid #d3d3d3;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  overflow: visible;
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
