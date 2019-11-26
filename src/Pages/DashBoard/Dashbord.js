import React, { Component } from 'react';
// import { Button, Checkbox, Form, Header} from 'semantic-ui-react'
// import { Button, Form, FormGroup, Label, Input, Card, Row, Col,CardDeck,CardImg,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col, CardHeader, CardFooter
} from 'reactstrap';
import { Grid, Image, Icon, Input } from 'semantic-ui-react'
import './Dash.css';
import imge from "../../img/banner-job.png";
import Slider from "react-slick";


import Logo from '../../img/man.png'
import vxlogo from '../../img/vx.png';
import Dialog from '../../img/dialog.png';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    var settings = {
      dots: true

    };
    return (
      <div style={{backgroundColor:'#F5F5F5'}}>

        <div>
          {/* Header nev */}
          <Navbar color="light" light expand="md">
            <NavbarBrand><p className="text-center font-weight-bold">vxPlore-Jobs</p></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <img style={{ height: "60px" }} src={Logo} />
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {/* Header nev end */}
        <div style={{ paddingTop: "20px" ,paddingBottom:"20px" }}>
          <p style={{ fontSize: "40px" }} className="text-center font-weight-bold">
            Welcome Mr Jhone
             </p>

        </div>
        {/* slider */}
        <div>
        
          <div className="container" style={{ paddingLeft: "30px", alignItems: 'center', justifyContent: 'center', paddingRight: "30px" }}>
          <div><p style={{ fontSize: "26px" }} className=" font-weight-bold">Recommended Jobs</p></div>
            <Slider {...settings}>
              <div className="Cardstyle">
                {/* <img style={{ height: "500px" }} src={imge} /> */}
                <Row stye={{ height: "500px" }}>
                  <Col  sm="6">
                    <Card>
                      <CardImg top height="250px" width="40px" src={Dialog} alt="Card image cap" />
                      <CardBody>
                        <CardTitle><p className="text-center font-weight-bold" style={{ fontSize: "40px" }} >Vizuamatix Pvt Ltd</p></CardTitle>
                        
                        <CardText><p className="text-center font-weight-bold" style={{fontSize: "20px"}}>Data Secienatist</p></CardText>
                        {/* <Button>Button</Button> */}
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardImg top height="250px" width="40px" src={vxlogo} alt="Card image cap" />
                      <CardBody>
                        <CardTitle><p  className="text-center font-weight-bold" style={{ fontSize: "40px" }} >Vizuamatix Pvt Ltd</p></CardTitle>
                        
                        <CardText><p className="text-center font-weight-bold" style={{fontSize: "20px"}}>Software engineer</p></CardText>
                        {/* <Button>Button</Button> */}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div>
                <Row stye={{ height: "500px" }}>
                  <Col sm="6">
                  <Card>
                      <CardImg top height="250px" width="40px" src={Dialog} alt="Card image cap" />
                      <CardBody>
                        <CardTitle><p className="text-center font-weight-bold"  className="text-center font-weight-bold" style={{ fontSize: "40px" }} >Vizuamatix Pvt Ltd</p></CardTitle>
                        
                        <CardText><p className="text-center font-weight-bold" style={{fontSize: "20px"}}>Data Secienatist</p></CardText>
                        {/* <Button>Button</Button> */}
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                  <Card>
                      <CardImg top height="250px" width="40px" src={Dialog} alt="Card image cap" />
                      <CardBody>
                        <CardTitle><p className="text-center font-weight-bold" style={{ fontSize: "40px" }} >Vizuamatix Pvt Ltd</p></CardTitle>
                        
                        <CardText><p className="text-center font-weight-bold" style={{fontSize: "20px"}}>Data Secienatist</p></CardText>
                        {/* <Button>Button</Button> */}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col sm="6">
                  <Card>
                     
                      <CardImg top height="250px" width="40px" src={Dialog} alt="Card image cap" />
                    
                      <CardBody>
                        <CardTitle><p className="text-center font-weight-bold" style={{ fontSize: "40px" }} >Vizuamatix Pvt Ltd</p></CardTitle>
                        
                        <CardText><p className="text-center font-weight-bold" style={{fontSize: "20px"}}>Data Secienatist</p></CardText>
                        {/* <Button>Button</Button> */}
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                  <Card>
                      <CardImg top height="250px" width="40px" src={Dialog} alt="Card image cap" />
                      <CardBody>
                        <CardTitle><p className="text-center font-weight-bold" style={{ fontSize: "40px" }} >Vizuamatix Pvt Ltd</p></CardTitle>
                        
                        <CardText><p  className="text-center font-weight-bold" style={{fontSize: "20px"}}>Data Secienatist</p></CardText>
                        {/* <Button>Button</Button> */}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>



            </Slider>
          </div>



        </div>
        <div>
          {/* Search */}
          <Row>
            <Col xs="12" style={{ paddingLeft: "320px", paddingBottom: "60px",paddingTop:"50px" }} className="mt-10">
              <Input icon='search' placeholder='Job Search...' />
            </Col>
          </Row>

        </div>
        <div style={{ paddingLeft: "300px", alignItems: 'center', justifyContent: 'center', paddingRight: "300px" }}>
          <Row>
            <Col>
              <div>
                <Card>
                <div style={{backgroundColor:"#F7F7F7" ,}}>
                  <CardBody>
                    
                    <CardTitle><p  className="font-weight-bold"style={{fontSize:"20px", fontStyle:"bold"}}>Vizuamatix</p></CardTitle>
 
                   

                  </CardBody>
                  </div>
                  <CardImg  height="200px" width="20px" top width="50%" src={imge} alt="Card image cap" />
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card>
                  <div style={{background:"#F7F7F7"}}>
                  <CardHeader>
                    <p className="font-weight-bold" style={{fontSize:"20px", fontStyle:"bold"}}>Requermant</p>
                    </CardHeader>
                    </div>
                 <div>
                  <CardBody>
                    <CardTitle>We are Looking</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="primary">Apply Now</Button>{' '}
                  </CardBody>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          {/* 2nd div */}
          <div style={{ paddingTop: "40px" }}>
            <Row>
              <Col >
                <div>
                  <Card>
                  <div style={{backgroundColor:"#F7F7F7" ,}}>
                    <CardBody>
                    <CardTitle><p className="font-weight-bold" style={{fontSize:"20px", fontStyle:"bold"}}>Dialog</p></CardTitle>

                    </CardBody>
                    </div>
                    <CardImg top  height="200px" width="20px" width="50%" src={imge} alt="Card image cap" />
                  </Card>
                </div>
              </Col>
              <Col>
                <div>
                  <Card>
                  <div style={{background:"#F7F7F7"}}>
                    <CardHeader>
                      <p className="font-weight-bold" style={{fontSize:"20px", fontStyle:"bold"}}>Requermant</p>
                      </CardHeader>
                      </div>
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button color="primary">Apply Now</Button>{' '}
                    </CardBody>

                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* <footer className="footer">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer> */}

      </div>
      //   <div>
      //   <Navbar color="Dark" light>
      //     <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
      //     <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      //     <Collapse isOpen={!this.state.collapsed} navbar>

      //     </Collapse>
      //   </Navbar>
      // </div>
    );
  }
}