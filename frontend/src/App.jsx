import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import login from "./pages/login"
import register from "./pages/register"
import Home from "./pages/home"
import notFound from "./pages/notFound"
import ProtectedRoute from "./components/ProtectedRoutes"
import qna from"./pages/qna"

function logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <register />

}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
          />
        <Route path="/login" element={<login />} />
        <Route path="/logout" element={<logout />} />
        <Route path='/register' element={<RegisterAndLogout />} />
        <Route path='/qna' element={<qna/>} />
        <Route path="*" element={<notFound />}> hi </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
