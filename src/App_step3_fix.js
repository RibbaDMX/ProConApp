import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>ProCon ist voll super!</h1>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
