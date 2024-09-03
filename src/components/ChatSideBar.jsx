import styled from "styled-components";
import pdf from "../assets/pdf.svg";
import trash from "../assets/trash.svg";
import plus from "../assets/plus.svg";

const ChatSideBar = () => {
  return (
    <>
      <Wrapper>
        <Title>GoldenGlobe</Title>
        <Country>🇹🇭 태국</Country>

        <PdfBox>
          <img src={pdf} style={{ width: "2.2rem" }} />
          <PdfName>호텔예약</PdfName>
          <img src={trash} />
        </PdfBox>

        <PdfBox>
          <img src={pdf} style={{ width: "2.2rem" }} />
          <PdfName>호텔예약</PdfName>
          <img src={trash} />
        </PdfBox>

        <PdfBox>
          <img src={pdf} style={{ width: "2.2rem" }} />
          <PdfName>호텔예약</PdfName>
          <img src={trash} />
        </PdfBox>

        <img src={plus} style={{ width: "2.5rem", cursor: "pointer" }} />
      </Wrapper>
    </>
  );
};

export default ChatSideBar;

const Wrapper = styled.div`
  width: 16.15rem;
  height: 100%;
  flex-shrink: 0;
  border-radius: 0rem 1.5rem 1.5rem 0rem;
  background: #ffa500;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 2.5rem;
`;

const Country = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.15rem;
  margin-bottom: 2rem;
`;

const PdfBox = styled.div`
  width: 12.65rem;
  height: 3.3828rem;
  flex-shrink: 0;
  border-radius: 0.65055rem;
  border: 1.301px solid #c9c9c9;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0.5rem;
  justify-content: space-around;
  margin-bottom: 0.87rem;
  cursor: pointer;
`;

const PdfName = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.3011rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
