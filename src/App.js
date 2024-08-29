import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup1Page from "./pages/Signup1Page";
import Signup2Page from "./pages/Signup2Page";
import Signup3Page from "./pages/Signup3Page";
import FindEmailPage from "./pages/FindEmailPage";
import FindEmail2Page from "./pages/FindEmail2Page";
import FindPwPage from "./pages/FindPwPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
