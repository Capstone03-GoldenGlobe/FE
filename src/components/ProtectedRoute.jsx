import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogedin, children }) => {
  if (!isLogedin) {
    // 로그인되지 않은 경우 로그인 페이지로 이동
    return <Navigate to="/login" />;
  }
  // 로그인된 경우 해당 컴포넌트 렌더링
  return children;
};

export default ProtectedRoute;
