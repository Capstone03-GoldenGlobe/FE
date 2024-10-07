import { useRef, useState } from "react";
import ChatSideBar from "../components/ChatSideBar";
import * as S from "./ChatBotPage.style";
import sendArrow from "../assets/sendArrow.svg";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const ChatBotPage = () => {
  const [loading, setLoading] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isChat, setIsChat] = useState(true);
  const [IsContent, setIsContent] = useState(true);

  const navigate = useNavigate();

  const goCheckList = () => {
    navigate("/list");
    setIsList(true);
    setIsChat(false);
  };
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <ChatSideBar />
      <S.Container>
        <S.IndexContainer>
          <S.Index isChat={isChat}>챗봇</S.Index>
          <S.IndexGray onClick={goCheckList} isList={isList}>
            체크리스트
          </S.IndexGray>
        </S.IndexContainer>

        {/* 흰 바탕 */}
        {loading ? (
          <>
            <S.Wrapper>
              <S.Comment>PDF를 분석하고 있습니다.</S.Comment>
              <Flex align="center" gap="middle">
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: "7rem",
                        color: "#ffa83e",
                        marginBottom: "3.35rem",
                        marginTop: "4rem",
                      }}
                      spin
                    />
                  }
                />
              </Flex>

              <S.Comment>잠시만 기다려주세요!</S.Comment>
            </S.Wrapper>
          </>
        ) : (
          <>
            {IsContent ? (
              <>
                <S.Wrapper2>
                  <S.MyWrp>
                    <S.MyTextbox>호텔이 어디에 있어?</S.MyTextbox>
                  </S.MyWrp>
                  <S.MyWrp>
                    <S.MyTextbox>당장 말해.</S.MyTextbox>
                  </S.MyWrp>

                  <S.ChatWrp>
                    <S.ChatTextbox>호텔은 여기 입니다.</S.ChatTextbox>
                  </S.ChatWrp>
                  <S.InputWrapper>
                    <S.TextArea />
                    <S.Send src={sendArrow} />
                  </S.InputWrapper>
                </S.Wrapper2>
              </>
            ) : (
              <>
                <S.Wrapper>
                  <S.Comment>
                    당신의 여행을 도와줄 챗봇이 준비 되었습니다. 무엇이든
                    물어보세요!
                  </S.Comment>

                  <S.InputWrapper>
                    <S.TextArea />
                    <S.Send src={sendArrow} />
                  </S.InputWrapper>
                </S.Wrapper>
              </>
            )}
          </>
        )}
      </S.Container>
    </div>
  );
};

export default ChatBotPage;
