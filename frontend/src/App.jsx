import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import login from "./pages/login"
import register from "./pages/register"
import Home from "./pages/home"
import notFound from "./pages/notFound"
import ProtectedRoute from "./components/ProtectedRoutes"

function logout(){
  localStorage.clear()
  return <Navigate to="/login/"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
          />
        <Route path="/login" element={<Login />}/>


      </Routes>
    
    
    
    
    
    
    </BrowserRouter>
  
  
  
    )
}

export default App
