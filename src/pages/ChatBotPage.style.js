import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  height: 50vh;
  left: 16.15rem;
  margin-left: 16.15rem;
  background-color: white;
  padding-left: 4.3rem;
  padding-right: 4.3rem;
`;

export const Index = styled.div`
  width: 35%;
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 1rem 0rem 0rem;
  background-color: #ffa83e;

  color: #fff;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-right: 3.2rem;
  margin-left: 3.2rem;
  cursor: pointer;
`;

export const IndexGray = styled.div`
  width: 35%;
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 1rem 0rem 0rem;
  background-color: #e1e1e1;

  color: black;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-right: 3.2rem;
  margin-left: 3.2rem;
  cursor: pointer;
`;

export const Container = styled.div`
  text-align: center;
`;

export const IndexContainer = styled.div`
  flex: 1;
  display: flex;
  margin-left: 16.15rem;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  text-align: center;
  height: 5.5rem;
`;

export const Comment = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 7.7rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid #afafaf;
  background: #fff;
  font-family: var(--korea);
  resize: none;
  box-sizing: border-box;
  padding: 1.35rem 1.7rem;
  color: #000;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
`;

export const Send = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 1.4rem;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  bottom: 2.65rem;
  width: 65%;
  align-items: end;
  margin-left: 16.15rem;
  padding-left: 4.3rem;
`;

export const MyTextbox = styled.div`
  padding: 0.85rem 1.2rem;
  border-radius: 1rem;
  background: #e4e4e4;
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  max-width: 80%; /* 텍스트 박스가 너무 넓어지지 않도록 */
  word-wrap: break-word; /* 긴 단어는 줄바꿈 */
`;

export const MyWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 1rem;
`;

export const Wrapper2 = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  left: 16.15rem;
  margin-left: 16.15rem;
  background-color: white;
  padding-left: 4.3rem;
  padding-right: 4.3rem;

  max-height: 60vh;
  overflow-y: auto;
`;

export const ChatTextbox = styled.div`
  border-radius: 1rem;
  background: #ffeece;
  padding: 0.85rem 1.2rem;
  color: #000;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

export const ChatWrp = styled.div`
  width: 100%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1rem;
`;
