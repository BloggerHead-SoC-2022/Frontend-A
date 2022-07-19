import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "./pages/login/login";
import Home from "./components/Home";
import RegisterUser from "./pages/register/register";
import { useState } from "react";


function App() {
  const [jwt_token, setToken] = useState(null)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home jwt_token={jwt_token} />} />
          <Route path="/login" element={<LoginUser setToken={setToken} />}/>
          <Route path="/register" element={<RegisterUser />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
