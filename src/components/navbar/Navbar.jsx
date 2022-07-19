import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import VariantsExample from '../button/button1';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <>
      
      <Navbar bg="red" variant="dark" className="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://thumbs.dreamstime.com/b/bh-logo-b-h-design-white-bh-letter-bh-b-h-letter-logo-design-initial-letter-bh-linked-circle-uppercase-monogram-logo-bh-logo-b-h-197016459.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BloggerHead
          </Navbar.Brand>
          {/* <Navbar className="justify-content-end button"> */}
          
          <Link to='/login'><div className="button"><VariantsExample /></div></Link>
          <Link to='/register'>
      <Button variant="flat" size="xl">
        Register
      </Button>
      </Link>
          {/* <VariantExample /> */}
        {/* </Navbar> */}
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;