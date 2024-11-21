import styled from "styled-components";
import check from "../assets/check.svg";
import { useEffect, useState } from "react";
import { isMemoCheckedApi } from "../api/isCheck";
import x from "../assets/cross.svg";
import { DeleteItemApi } from "../api/deleteItem";

const Checkbox = ({
  color,
  value,
  onChange,
  onKeyPress,
  onBlur,
  isCheckedProps,
  id,
}) => {
  const [isChecked, setIsChecked] = useState(isCheckedProps || false);

  // Sync isChecked with isCheckedProps on mount and when isCheckedProps changes
  useEffect(() => {
    setIsChecked(isCheckedProps);
  }, [isCheckedProps]);

  const handleCheckBox = () => {
    checkPut();
  };

  // 체크 on/off 수정 api
  const checkPut = async () => {
    const res = await isMemoCheckedApi(id);

    console.log("체크 표시", res);
    setIsChecked(res?.data.data.ischecked);
  };

  // 아이템 삭제 함수
  const deleteItem = async (itemId) => {
    const res = await DeleteItemApi(itemId);

    console.log("아이템 삭제", res);
    // 삭제 후 새로고침
    window.location.reload();
    // if (res?.data.status === 200) {
    //   onDelete(itemId); // 삭제 성공 시 부모 상태 업데이트
    //   console.log("삭제성공");
    // }
  };

  return (
    <>
      <Wrp>
        <Box isChecked={isChecked} color={color} onClick={handleCheckBox}>
          {isChecked && <img src={check} style={{ width: "15px" }} />}
        </Box>
        <Input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
        />
        <img
          src={x}
          style={{ cursor: "pointer" }}
          onClick={() => deleteItem(id)}
        />
      </Wrp>
    </>
  );
};

export default Checkbox;

const Wrp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 3rem;
`;

const Box = styled.div`
  width: 1.275rem;
  height: 1.275rem;
  flex-shrink: 0;
  background-color: ${(props) => (props.isChecked ? props.color : "white")};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.isChecked ? "none" : "1px solid #D3D3D3")};
  margin-right: 1rem;
`;

const Input = styled.input`
  color: #000;
  text-align: start;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  width: 10rem;
  padding-left: 1rem;
`;
