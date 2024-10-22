import { useEffect, useRef, useState } from "react";
import ChatSideBar from "../components/ChatSideBar";
import * as S from "./ChatBotPage.style";
import sendArrow from "../assets/sendArrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import { getChatlog } from "../api/getChatlog";
import { ChatbotQA } from "../api/chatbotQA";

const ChatBotPage = () => {
  const [loading, setLoading] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isChat, setIsChat] = useState(true);
  const [IsContent, setIsContent] = useState(false);
  const { id } = useParams();
  const [chatData, setChatData] = useState([]);

  const [question, setQuestion] = useState("");

  const navigate = useNavigate();

  const goCheckList = () => {
    navigate(`/list/${id}`);
    setIsList(true);
    setIsChat(false);
  };

  const onChageQuestion = (e) => {
    setQuestion(e.target.value);
  };

  // 챗봇에 post 보내기
  const postChat = async () => {
    const res = await ChatbotQA(question, id);
  };

  const onClickSend = async () => {
    console.log("버튼 클릭");
    await postChat();
    setQuestion("");
    getChat();
  };

  // 챗봇 로그 불러오기
  const getChat = async () => {
    try {
      const res = await getChatlog(id);
      setChatData(res);
      if (res) {
        setIsContent(true);
      }
      console.log("채팅 데이터", res);
    } catch (err) {
      console.log(err);
    }
  };

  // 페이지 마운트시 챗봇 로그 불러오기
  useEffect(() => {
    getChat(id);
  }, []);

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
              <S.Wrapper2>
                {Array.isArray(chatData) &&
                  chatData?.map((item) => (
                    <>
                      {item?.qna === "Q" ? (
                        <S.MyWrp key={item.logId}>
                          <S.MyTextbox>{item?.content}</S.MyTextbox>
                        </S.MyWrp>
                      ) : (
                        <S.ChatWrp key={item.logId}>
                          <S.ChatTextbox>{item?.content}</S.ChatTextbox>
                        </S.ChatWrp>
                      )}
                    </>
                  ))}
              </S.Wrapper2>
            ) : (
              <>
                <S.Wrapper>
                  <S.Comment>
                    당신의 여행을 도와줄 챗봇이 준비 되었습니다. 무엇이든
                    물어보세요!
                  </S.Comment>
                </S.Wrapper>
              </>
            )}
          </>
        )}

        <S.InputWrapper>
          <S.TextArea value={question} onChange={onChageQuestion} />
          <S.Send src={sendArrow} onClick={onClickSend} />
        </S.InputWrapper>
      </S.Container>
    </div>
  );
};

export default ChatBotPage;
