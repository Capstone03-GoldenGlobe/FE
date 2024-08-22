import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup1Page from "./pages/Signup1Page";
import Signup2Page from "./pages/Signup2Page";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
