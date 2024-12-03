import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-left: 16.15rem;
`;

export const IndexContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  text-align: center;
  height: 5.5rem;
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

export const Weather = styled.div`
  height: 4.25rem;
  box-sizing: border-box;
  padding: 1.5rem 3rem;
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: white;
  text-align: start;
  border-bottom: 1px solid #d3d3d3;
  /* border-top: 1px solid #d3d3d3; */
`;

// export const ListBox = styled.div`
//   height: ${(props) => props.height};
//   box-sizing: border-box;
//   padding: 1.5rem 3rem;

//   background-color: white;
//   text-align: start;
//   border-bottom: 1px solid #d3d3d3;
// `;

export const Check = styled.input`
  background-color: red;
`;

export const Reco = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  box-sizing: border-box;
  padding: 1.5rem 3rem;
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: white;
  text-align: start;
  border-bottom: 1px solid #d3d3d3;
`;
export const PreItem = styled.div`
  margin-right: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
