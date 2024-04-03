import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login"; // 수정됨
import Register from "./pages/register"; // 수정됨
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Qna from "./pages/Qna"
import ProtectedRoute from "./components/ProtectedRoutes";

// function logout() {
//   localStorage.clear();
//   return <Navigate to="/login" />;
// }

// function RegisterAndLogout() {
//   localStorage.clear();
//   return <Register />; // 수정됨
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* 수정됨 */}
        <Route path="/logout" element={<logout />} /> {/* 수정됨: 가정한 수정 */}
        {/* <Route path='/register' element={<RegisterAndLogout />} /> */}
        <Route path='/Qna' element={<Qna />} /> 
        <Route path="*" element={<NotFound />}></Route> {/* 수정됨 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
