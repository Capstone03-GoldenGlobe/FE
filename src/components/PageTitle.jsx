import styled from "styled-components";

const PageTitle = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default PageTitle;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
