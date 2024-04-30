import logo from './logo.svg';
import './App.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Header from './Header';
import AddTask from './AddTask';
import ReadTask from './ReadTask';

import Test from './Test';

function App() {
  return (
    <>
     <Header/>
     <Test/>
     <Container>
      <Row className="justify-content-md-center">
        <Col lg="6">
          
          <AddTask/>
          <ReadTask/>
        </Col>
      </Row>
    </Container>
     
      
    </>
  );
}

export default App;
