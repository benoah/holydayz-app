import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function Login() {
    return (
        <Container className="ContactContainer LoginContainer">
        <h1>Login</h1>
        <Container className="contact2" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1564667005686-cce951e72bd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'}} id="contact">          
               <Container className="container">
                   
                 <Row className="row contact-container">
                   <Col className="col-lg-12">
                     <Container className="card card_shadow">
                       <Row className="row">
                         <Col className="col-lg-8">
                           <Container className="contact-box p-4">
                           <Form>
                      <Row className="row">
                        <div className="col-lg-12">
                          <div className="form-group mt-3">
                            <input className="form-control" type="text" placeholder="name" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-3">
                            <input className="form-control" type="text" placeholder="email" />
                          </div>
                        </div>
                        <div className="col-lg-12 text-center">
                           <button type="submit" className="btn btn-test "><span> Login <i className="ti-arrow-right" /></span></button>
                         </div>
                      </Row>
                    </Form>
                           </Container>
                         </Col>
                         <div className="col-lg-4 backgroundImage bg-image" >
                           <div className="detail-box p-4">
                             <h5 className="smalltitel mb-3 ">ADDRESS</h5>
                             <p className=" op-7">601 Sherwood Ave.
                               <br /> San Bernandino</p>
                             <h5 className=" smalltitel mb-3 mt-4">CALL US</h5>
                             <p className=" op-7">251 546 9442
                               <br /> 630 446 8851</p>
                               {/*
                               
                               
                                     <div className="round-social light">
                               <a className="ml-0 text-decoration-none text-dark border border-dark rounded-circle"><i className="fab fa-facebook-f"></i></a>
                               <a className="text-decoration-none text-dark border border-dark rounded-circle"><i className="fab fa-facebook-f"></i></a>
                               <a className="text-decoration-none text-dark border border-dark rounded-circle"><i className="fab fa-facebook-f"></i></a>
                             </div>
                               
                               
                               */}
                       
                           </div>
                         </div>
                       </Row>
                     </Container>
                   </Col>
                 </Row>
               </Container>
             </Container>
        </Container>
    )
}
