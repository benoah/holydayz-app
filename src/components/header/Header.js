

// bootsrap import 
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";


export default function Header() {
// The first piece of state will hold all of the information that we retrieve from the json place holder,
//  the second state will hold a copy of the first state and then the second states value will change when 
// we search for a word in the data.
    return (
        <div className="NavContainer">
            <Container>
            <Row>
                <Col>
                <Navbar expand="lg">
<Navbar.Brand className=" col-3  col-md-4 NavContainer_Brand NavContainer_Brand_gradient-text" href="#">Holidayz
</Navbar.Brand>
<Navbar.Toggle className=" navbarToogle" aria-controls="basic-navbar-nav">
<span></span>
<span></span>
<span></span>
<p className="NavContainer_Menutext">
menu
</p>
</Navbar.Toggle>
<Navbar.Collapse id="basic-navbar-nav">
<FormControl type="text"   placeholder="search " className="rounded-pill rounded-end ccol-md-4  formNav ">
</FormControl>
</Navbar.Collapse>
<Navbar.Collapse id="basic-navbar-nav">
<Nav className=" NavContainer_Link col col-md-4  offset-md-5"   >
<Nav.Link className="NavContainer_Link_item" href="#">Home</Nav.Link>
<Nav.Link className="NavContainer_Link_item" href="#">Hotels</Nav.Link>
<Nav.Link className="NavContainer_Link_item" href="#">Contact</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
</Col>
</Row>
</Container>

 </div>
    )
}
