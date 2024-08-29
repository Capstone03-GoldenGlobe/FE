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
  font-family: var(--korean);
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
