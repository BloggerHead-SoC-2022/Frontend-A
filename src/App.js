import { Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  function navigateLogin() {
    navigate("/");
  }

  return (
    <div>
      <div>
        <button onClick={navigateLogin}>Login</button>
        <hr />
        <button onClick={navigateToRegister}>Register</button>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

function Login() {
  return (
    <form>
      <input type="email" placeholder="Email Id" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

function Register() {
  return (
    <form>
      <input type="email" placeholder="Email Id" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <button type="submit">Register</button>
    </form>
  );
}
