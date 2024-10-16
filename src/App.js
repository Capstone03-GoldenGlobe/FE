import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup1Page from "./pages/Signup1Page";
import Signup2Page from "./pages/Signup2Page";
import Signup3Page from "./pages/Signup3Page";
import FindEmailPage from "./pages/FindEmailPage";
import FindEmail2Page from "./pages/FindEmail2Page";
import FindPwPage from "./pages/FindPwPage";
import MainPage from "./pages/MainPage";
import Mypage from "./pages/Mypage";
import ChatBotPage from "./pages/ChatBotPage";
import CheckListPage from "./pages/CheckListPage";
import AddNewTrip from "./components/AddNewTrip";
import { useEffect, useState } from "react";

function App() {
  const [isLogedin, setIsLogedin] = useState(false);

  // 로그인 상태 확인 함수
  const checkLoginStatus = () => {
    if (localStorage.getItem("accessToken")) {
      // 로그인된 상태로 설정
      setIsLogedin(true);
    } else {
      // 로그인되지 않은 상태로 설정
      setIsLogedin(false);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 로그인 상태 확인
  useEffect(() => {
    checkLoginStatus();
  }, [localStorage.getItem("accessToken")]);

  // 컴포넌트가 처음 렌더링될 때 로그인 상태 확인
  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route
            exact
            path="/"
            element={isLogedin ? <MainPage /> : <Navigate to="/login" />}
          />

          {/* 로그인 페이지 */}
          <Route exact path="/login" element={<LoginPage />} />

          {/* 회원가입1 페이지 */}
          <Route exact path="/signup1" element={<Signup1Page />} />

          {/* 회원가입2 페이지 */}
          <Route exact path="/signup2" element={<Signup2Page />} />

          {/* 회원가입2 페이지 */}
          <Route exact path="/signup3" element={<Signup3Page />} />

          {/* 이메일 찾기 페이지 */}
          <Route exact path="/findemail" element={<FindEmailPage />} />

          {/* 이메일 찾기21 페이지 */}
          <Route exact path="/findemail2" element={<FindEmail2Page />} />

          {/* 이메일 찾기21 페이지 */}
          <Route exact path="/findpw" element={<FindPwPage />} />

          {/* 마이페이지 */}
          <Route exact path="/mypage" element={<Mypage />} />
          {/* 챗봇 페이지 */}
          <Route exact path="/chat/:id" element={<ChatBotPage />} />
          {/* 체크리스트 페이지 */}
          <Route exact path="/list/:id" element={<CheckListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
