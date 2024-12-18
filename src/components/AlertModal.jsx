import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Botton";

const AlertModal = ({
  isOpen,
  onClose,
  guideText,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
  isSingleButton = false,
  showTextInput = false,
}) => {
  const [inputValue, setInputValue] = useState("");
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ContentWrapper>
          <GuideText showTextInput={showTextInput}>{guideText}</GuideText>
          {showTextInput && (
            <StyledInput
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}

          <ButtonContainer isSingleButton={isSingleButton}>
            <Button
              type={"S"}
              onClick={() => onConfirm(inputValue)}
              color={"o"}
            >
              {confirmText}
            </Button>
            {!isSingleButton && (
              <Button type={"S"} onClick={onCancel} color={"g"}>
                {cancelText}
              </Button>
            )}
          </ButtonContainer>
        </ContentWrapper>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AlertModal;

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
  max-width: 68vw;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// 컨텐츠 래퍼 스타일
const ContentWrapper = styled.div`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; // 텍스트 자체를 가운데 정렬
  width: 100%;
  box-sizing: border-box;
`;

// 안내 문구 텍스트 스타일
const GuideText = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: ${(props) => (props.showTextInput ? "12px" : "28px")};
  overflow-wrap: break-word;
  word-break: keep-all;
  white-space: normal;
  width: 100%;
  max-width: 60vw;
  line-height: 1.5;
`;

// 버튼 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => (props.isSingleButton ? "0" : "12px")};
`;

const StyledInput = styled.input`
  width: 46vw;
  height: 130px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
`;
