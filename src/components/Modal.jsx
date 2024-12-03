import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Botton";
import { Share } from "../api/share";

const color = ["red", "orange", "green", "blue"];

// Modal 컴포넌트
const Modal = ({
  isOpen,
  onClose,
  guideText,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
  isSingleButton = false,
  showTextInput = false,
  id,
}) => {
  const [cellPhone, setCellphone] = useState("");

  if (!isOpen) return null;

  const onChangeShare = (e) => {
    setCellphone(e.target.value);
  };

  const shareFamily = async () => {
    try {
      const res = await Share(cellPhone, color[2], id);
      console.log(res);
      console.log(id);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ContentWrapper>
          <GuideText showTextInput={showTextInput}>{guideText}</GuideText>
          {showTextInput && (
            <>
              <InputWrp>
                <Text>아이디</Text>
                <StyledInput
                  type="text"
                  value={cellPhone}
                  onChange={onChangeShare}
                  placeholder="01012345678"
                />
              </InputWrp>
            </>
          )}

          <ButtonContainer isSingleButton={isSingleButton}>
            <Button type={"L"} onClick={shareFamily}>
              {confirmText}
            </Button>
          </ButtonContainer>
        </ContentWrapper>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
// 모달 배경 스타일
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// 모달 컨테이너 스타일
const ModalContainer = styled.div`
  width: 26.55rem;
  height: 22rem;
  flex-shrink: 0;
  margin-left: 16rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// 컨텐츠 래퍼 스타일
const ContentWrapper = styled.div`
  padding-top: 3.15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; // 텍스트 자체를 가운데 정렬
  width: 100%;
`;

// 안내 문구 텍스트 스타일
const GuideText = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: ${(props) => (props.showTextInput ? "3rem" : "24px")};
`;

// 버튼 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => (props.isSingleButton ? "0" : "12px")};
`;

const InputWrp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.45rem;
`;

const StyledInput = styled.input`
  width: 17rem;
  color: #000;

  font-family: var(--korean);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;

  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  box-sizing: border-box;
`;

const Text = styled.p`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.45rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 1.3rem;
`;
