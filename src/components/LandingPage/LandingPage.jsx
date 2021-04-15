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
 
       
        <h2> Register Page:</h2>
        <p>To access the New York Time Best Sellers List, please login by pressing the login<br></br>
         button below the form. If you don't have a
        login, please register by completeing the form below.
        </p>
        
          <RegisterForm />

       
            <h4>Already have a log in?</h4>
            <Button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </Button>
         

      </center>
  );
}

export default LandingPage;
