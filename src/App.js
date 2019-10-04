import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Form,Button,InputGroup,Col, Row,Image,FormControl,Modal,Card,Nav,Navbar,CardGroup,NavItem} from 'react-bootstrap';
import {FaUserAlt,FaExpeditedssl,FaRegEnvelope,IoMdCall,FaAngleRight, GiOrange} from 'react-icons/all';
import './App.css';


var createReactClass = require('create-react-class');
        
      const App = createReactClass({

        getInitialState() {
          return { showModal1: false,showModal2:false,
                  email:'',emailerror:'',
                  password:'',passworderror:'',
                  phonenumber:'',phonenumbererror:'',
                  name:'',nameerror:''};
        },
      
        close(event) {

          let Email = this.state.email;
          let EmailError = "";
          let Password = this.state.password;
          let PasswordError = "";
          let PhoneNumber = this.state.phonenumber;
          let PhoneNumberError = "";
          let Name = this.state.name;
          let NameError = "";

              if(Email === "")
              {
                EmailError = "Email is Required";
                this.setState({emailerror:EmailError});
              }
              if(Email !== ""){
                EmailError = "";
                this.setState({emailerror:EmailError});
              }

              if(Password === "")
              {
                PasswordError = "Password is Required";
                this.setState({passworderror:PasswordError});
              }
              if(Password !== ""){
                PasswordError = "";
                this.setState({passworderror:PasswordError});
              }
              if(PhoneNumber === "")
              {
                PhoneNumberError = "Phone Number is Required";
                this.setState({phonenumbererror:PhoneNumberError});
              }
              if(PhoneNumber !== ""){
                PhoneNumberError = "";
                this.setState({phonenumbererror:PhoneNumberError});
              }
              if(Name === "")
              {
                NameError = "Name is Required";
                this.setState({nameerror:NameError});
              }
              if(Name !== ""){
                NameError = "";
                this.setState({nameerror:NameError});
              }
              else
              {
                this.setState({ showModal1: false });
                this.setState({ showModal2: false }); 
              }
        },

        onChange(event)
        {
          let Email="";
          let Password="";
          let Name="";
          let PhoneNumber="";

          if(event.target.name === 'Email')
            {
                Email = event.target.value;
            }
            this.setState({email:Email},function(){
              console.log(this.state.email);
            });  

            if(event.target.name === 'Password'){
              Password = event.target.value;
            }
            this.setState({password:Password},function(){
              console.log(this.state.password);
            });

            if(event.target.name === 'PhoneNumber'){
              PhoneNumber = event.target.value;
            }
            this.setState({phonenumber:PhoneNumber},function(){
              console.log(this.state.phonenumber);
            });

            if(event.target.name === 'Name'){
              Name = event.target.value;
            }
            this.setState({name:Name},function(){
              console.log(this.state.name);
            });
        },
      
        open() {
          this.setState({ showModal1: true });
          this.setState({ showModal2: true });
        },
  
    render() {
      return (
          <Card>
            <Card.Header>

             <Navbar collapseOnSelect expand="lg" bg="grey">
              <Navbar.Brand href="#home" style={{color: 'lightblue'}}>TODAY</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#Features" style={{color: 'lightblack'}}>Features</Nav.Link>
                    <Nav.Link href="#Work" style={{color: 'lightblack'}}>How it Works</Nav.Link>
                    <Nav.Link href="#Touch" style={{color: 'lightblack' }}>Get in touch</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Card.Header>
            <Card.Body>
            <div>
            <Card.Img src="https://www.thebridgepe.co.za/wp-content/uploads/2018/05/fashionworld_logo.png"/>
            <Row>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <Button variant="outline-info" onClick={()=>this.setState({showModal1:true,showModal2:false})}>
                   LogIn Now<FaAngleRight/>
                 </Button>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="outline-info" onClick={()=>this.setState({showModal1:false,showModal2:true})}>
                    SignUp <FaAngleRight/>
                  </Button>
            </Row>
          <Modal show={this.state.showModal1} onHide={()=>this.setState({showModal2:false}),this.close}>
            
            <Modal.Body>
            <Form noValidate>
              <Row>
              <Col md="12">
                <Form.Group controlId="EmailID">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="Email"><FaRegEnvelope/></InputGroup.Text>
                    </InputGroup.Prepend>
                  <FormControl type="Email" placeholder="Email" aria-describedby="Email" name="Email" onChange={this.onChange}/>
                  </InputGroup>
                  <span className="color">{this.state.emailerror}</span>
                </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col md="12">
                <Form.Group controlId="Password">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="Password"><FaExpeditedssl/></InputGroup.Text>
                    </InputGroup.Prepend>
                  <FormControl type="Password" placeholder="Password" aria-describedby="Password" name="Password" onChange={this.onChange}/>
                  </InputGroup>
                  <span className="color">{this.state.passworderror}</span>
                </Form.Group>
              </Col>
              </Row>
              <Row>
                <Col md="12">
                    <Button type="submit" size="lg" onClick={this.close}>LogIn Now</Button>
                </Col>
              </Row>
              </Form>
            </Modal.Body>            
          </Modal>

          <Modal show={this.state.showModal2} onHide={()=>this.setState({showModal1:false}),this.close}>
            
            <Modal.Body>
            <Form noValidate>
            <Row>
              <Col md="12">
                <Form.Group controlId="Name">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="Name"><FaUserAlt/></InputGroup.Text>
                    </InputGroup.Prepend>
                  <FormControl type="Text" placeholder="Name" aria-describedby="Name" name="Name" onChange={this.onChange}/>
                  </InputGroup>
                  <span className="color">{this.state.nameerror}</span>
                </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col md="12">
                <Form.Group controlId="EmailID">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="Email"><FaRegEnvelope/></InputGroup.Text>
                    </InputGroup.Prepend>
                  <FormControl type="Email" placeholder="Email" aria-describedby="Email" name="Email" onChange={this.onChange}/>
                  </InputGroup>
                  <span className="color">{this.state.emailerror}</span>
                </Form.Group>
              </Col>
              </Row>

              <Row>
              <Col md="12">
                  <Form.Group controlId="PhoneNumber">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="PhoneNumber"><IoMdCall/></InputGroup.Text>
                    </InputGroup.Prepend>
                  <FormControl type="text" placeholder="PhoneNumber" aria-describedby="PhoneNumber" name="PhoneNumber" onChange={this.onChange}/>
                  </InputGroup>
                  <span className="color">{this.state.phonenumbererror}</span>
                  </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col md="12">
                <Form.Group controlId="Password">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="Password"><FaExpeditedssl/></InputGroup.Text>
                    </InputGroup.Prepend>
                  <FormControl type="Password" placeholder="Password" aria-describedby="Password" name="Password" onChange={this.onChange}/>
                  </InputGroup>
                  <span className="color">{this.state.passworderror}</span>
                </Form.Group>
              </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Button variant="primary" size="lg" onClick={this.close}>SignUp Now</Button>
                </Col>
              </Row>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
            </Card.Body>
            <Card.Footer style={{backgroundColor:'Blue'}}>
                 <CardGroup>
                    <Card style={{backgroundColor:'lightgrey'}}>
                      <Card.Body>
                        <Card.Title style={{padding:5,
                                            paddingLeft:8,
                                            margin:10,
                                            display:"inline-block",
                                            borderRadius: "50%",
                                            backgroundColor:"orange",
                                            width:30,
                                            height:30}}>1</Card.Title>
                        <Card.Text>
                          Well Designed components & Templates
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:'lightgrey'}}>
                      <Card.Body>
                        <Card.Title style={{padding:5,
                                            paddingLeft:8,
                                            margin:10,
                                            display:"inline-block",
                                            borderRadius: "50%",
                                            backgroundColor:"orange",
                                            width:30,
                                            height:30}}>2</Card.Title>
                        <Card.Text>
                          Great documentation & Organized Files
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:'lightgrey'}}>
                      <Card.Body>
                        <Card.Title style={{padding:5,
                                            paddingLeft:8,
                                            margin:10,
                                            display:"inline-block",
                                            borderRadius: "50%",
                                            backgroundColor:"orange",
                                            width:30,
                                            height:30}}>3</Card.Title>
                        <Card.Text>
                          Save Hours of Dancing
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:'lightgrey'}}>
                      <Card.Body>
                        <Card.Title style={{padding:5,
                                            paddingLeft:8,
                                            margin:10,
                                            display:"inline-block",
                                            borderRadius: "50%",
                                            backgroundColor:"orange",
                                            width:30,
                                            height:30}}>4</Card.Title>
                        <Card.Text>
                            Well Designed components & Templates
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
            </Card.Footer>
          </Card>
      );
    }
  });
  
  //React.render (<App />, document.getElementById('container'));

export default App;

