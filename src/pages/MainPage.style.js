import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  left: 16.15rem;
  margin-left: 16.15rem;
`;
export const ContentsWrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  padding-top: 3.5rem;
  padding-left: 4rem;

  left: 16.15rem;
  margin-left: 16.15rem;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3rem;
`;

export const Box = styled.div`
  width: 29.05rem;
  height: 31.35rem;
  flex-shrink: 0;
  border-radius: 0.35rem;
  background: #fffaf2;
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const SmallTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  display: flex;
  align-items: start;
  margin-bottom: 0.6rem;
`;

export const Input = styled.input`
  width: 24.1rem;
  height: 3.45rem;
  flex-shrink: 0;
  border: none;
  background: #fff;
  padding: 0.75rem 0.9rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
  color: #000;
  font-family: var(--korean);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & ::placeholder {
    color: var(--gray1);
    font-family: var(--korean);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  margin-bottom: 1.8rem;
  outline: none;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 13.20405rem;
  height: 8.6rem;
  flex-shrink: 0;
  border-radius: 0.30405rem;
  border: 0.869px solid #cdcdcd;
  margin-right: 3rem;
  cursor: pointer;
  margin-bottom: 3.46rem;
`;
export const CTitle = styled.div`
  color: #000;
  font-family: var(--korean);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
`;

export const Flag = styled.div`
  font-size: 5rem;
  width: 4.5rem;
  height: 4rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

export const Country = styled.div`
  color: #000;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.3899rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const City = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1.56365rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CountryWrapper = styled.div`
  margin-top: 1.7rem;
`;

export const FlagText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Date = styled.div`
  color: #b3b3b3;
  text-align: center;
  font-family: var(--korean);
  font-size: 1.0424rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.7rem;
`;

export const Add = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4921rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContentEnd = styled.div`
  width: 13.20405rem;
  height: 8.6rem;
  flex-shrink: 0;
  border-radius: 0.30405rem;
  border: 0.869px solid #cdcdcd;
  margin-right: 3rem;
  cursor: pointer;
  margin-bottom: 3.46rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 70rem;
  height: 0.05rem;
  background: #d9d9d9;
  margin-bottom: 3rem;
`;

export const Trash = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const Twrp = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-left: 5px;
  padding-top: 5px;
  z-index: 0;
  position: absolute;
`;
