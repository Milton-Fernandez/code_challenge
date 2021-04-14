import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import Button from 'react-bootstrap/Button'
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {

  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
       <center>
 
       

        
          <RegisterForm />

       
            <h4>Already a Member?</h4>
            <Button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </Button>
         

      </center>
  );
}

export default LandingPage;
