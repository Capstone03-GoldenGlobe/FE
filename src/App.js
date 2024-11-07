import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 초기 로딩 상태 추가

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 가져오기
    const checkLoginStatus = async () => {
      // 로딩 시작
      setIsLoading(true);

      // 로그인 상태 확인
      const isAuthenticated = Boolean(localStorage.getItem("accessToken"));
      setIsLogedin(isAuthenticated);

      // 로딩 완료
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  // 로딩 중일 때는 빈 화면 또는 로딩 스피너 등을 표시할 수 있습니다.
  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 보여줄 UI
  }

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
