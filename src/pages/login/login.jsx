import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopBar from '../../components/navbar/Navbar';
// import './login.css';

function LoginUser({ setToken }) {

  const [email, setEmail] = useState("")
  const [pswd, setPswd] = useState("")

  function login() {
    fetch("https://localhost:5000/api/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({
        "email": email,
        "password": pswd
    })
    }).then((res=>console.log(res)))
  }

  return (
    <div className='loginform'>
    <TopBar />
    <Form action='' onSubmit={(e)=>{e.preventDefault(); login()}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPswd(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default LoginUser;