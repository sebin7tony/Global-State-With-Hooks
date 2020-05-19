import React from 'react';
import {StoreProvider} from './store/useStore'
import Login from './components/Login'
import UserInfo from './components/UserInfo'

function App() {
  return (
    <StoreProvider>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-2">Global store with React hooks</h1>
          <p className="lead">This example demonstrate global state implemented in react hooks using useContext & useReducer</p>
        </div>
      </div>
      <div className="row">
        <Login />
        <UserInfo />
      </div>
    </StoreProvider>
  );
}

export default App;
