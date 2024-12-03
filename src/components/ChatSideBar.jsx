import styled from "styled-components";
import pdf from "../assets/pdf.svg";
import trash from "../assets/trash.svg";
import plus from "../assets/plus.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { PostPDF2 } from "../api/postPDF2";
import { getPDFname } from "../api/getPDFname";

const ChatSideBar = ({ country }) => {
  const navigate = useNavigate();
  // 파일 선택창을 열기 위한 참조값
  const fileInputRef = useRef(null);

  const { id } = useParams();

  const [fileName, setFile] = useState("");
  const [data, setData] = useState();

  const nationality = {
    과테말라: "🇬🇹",
    네덜란드: "🇳🇱",
    노르웨이: "🇳🇴",
    뉴질랜드: "🇳🇿",
    대만: "🇹🇼",
    대한민국: "🇰🇷",
    덴마크: "🇩🇰",
    독일: "🇩🇪",
    라투아니아: "🇱🇹",
    러시아: "🇷🇺",
    루마니아: "🇷🇴",
    말레이시아: "🇲🇾",
    멕시코: "🇲🇽",
    미국: "🇺🇸",
    방글라데시: "🇧🇩",
    베트남: "🇻🇳",
    벨기에: "🇧🇪",
    브라질: "🇧🇷",
    브루나이: "🇧🇳",
    사우디아라비아: "🇸🇦",
    수단: "🇸🇩",
    스웨덴: "🇸🇪",
    스위스: "🇨🇭",
    스페인: "🇪🇸",
    싱가포르: "🇸🇬",
    아랍에미리트: "🇦🇪",
    아이슬란드: "🇮🇸",
    아일랜드: "🇮🇪",
    영국: "🇬🇧",
    오스트리아: "🇦🇹",
    이탈리아: "🇮🇹",
    인도: "🇮🇳",
    인도네시아: "🇮🇩",
    일본: "🇯🇵",
    자메이카: " 🇯🇲",
    중국: "🇨🇳",
    카자흐스탄: "🇰🇿",
    캄보디아: "🇰🇭",
    캐나다: "🇨🇦",
    태국: "🇹🇭",
    터키: "🇹🇷",
    튀르키예: "🇹🇷",
    파라과이: "🇵🇾",
    파키스탄: "🇵🇰",
    폴란드: "🇵🇱",
    프랑스: "🇫🇷",
    핀란드: "🇫🇮",
    필리핀: "🇵🇭",
    호주: "🇦🇺",
    홍콩: "🇭🇰",
  };

  // 국기 추가
  const getFlagByCountry = (countryName) => {
    return nationality[countryName] || "🏳️"; // 기본값으로 "🏳️" (국기 없음) 설정
  };

  // api에 post 보내기
  const postPdf = async (id, fileName) => {
    try {
      const res = await PostPDF2(id, fileName);
      console.log(res);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const goMain = () => {
    navigate("/");
  };

  // 파일 탐색기 열기
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // 파일 선택해서 state에 넣기
  const onClickAddPdf = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
    postPdf(id, file);

    await getData();
  };

  // pdf 이름 get 받아오기
  const getData = async () => {
    const res = await getPDFname(id);
    console.log("pdf 이름:", res.data);
    setData(res?.data);
  };

  // 페이지 마운트 시
  useEffect(() => {
    getData();
  }, []);

  // PDF 열기
  const onClickPDF = useCallback((pdfPath) => {
    if (pdfPath) {
      window.open(pdfPath, "_blank");
      console.log(pdfPath);
    } else {
      alert("PDF 경로가 없습니다.");
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Title onClick={goMain}>GoldenGlobe</Title>
        <Country>
          {getFlagByCountry(country)} {country}
        </Country>

        {data?.map((item) => (
          <PdfBox>
            <img src={pdf} style={{ width: "2.2rem" }} />
            <PdfName onClick={() => onClickPDF(item.pdfPath)}>
              {item?.pdfName.split(".").slice(0, -1).join(".")}
            </PdfName>
            <img src={trash} />
          </PdfBox>
        ))}

        {/* input 요소는 화면에 표시되지 않음 */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }} // 숨기기
          onChange={onClickAddPdf}
        />

        <img
          src={plus}
          style={{ width: "2.5rem", cursor: "pointer" }}
          onClick={handleButtonClick}
        />
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
  cursor: pointer;
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
