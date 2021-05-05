import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import options from '../data/Data';

import 'react-bootstrap-typeahead/css/Typeahead.css';

// bootsrap import 
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";


export default function Header() {

    const TypeaheadExample = () => {
        const [selected, setSelected] = useState([]);
      
        return (
          <Typeahead
            id="basic-example"
            onChange={setSelected}
            options={options}
            placeholder="Choose a state..."
            selected={selected}
          />
        );
      };
// The first piece of state will hold all of the information that we retrieve from the json place holder,
//  the second state will hold a copy of the first state and then the second states value will change when 
// we search for a word in the data. /Users/kristine/Desktop/holydayz-app/src/components/image/logo/logo.jpg
    return (
        <div className="NavContainer">
            <Container>
            <Row>
                <Col>
                <Navbar expand="lg">
<Navbar.Brand className="col-sm-4 col-lg-4" href="#">
  <div className='content-white '>Holidayz
  <div className='circ-pink'/>
  
  </div>
  

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
<TypeaheadExample className="col-lg-4 d-flex pt-2 justify-content-center"/>
</Navbar.Collapse>
<Navbar.Collapse id="basic-navbar-nav">
<Nav className=" NavContainer_Link col-lg-3 offset-lg-4"   >
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
