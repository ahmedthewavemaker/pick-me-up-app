import React from 'react';
import { Route, Link } from 'react-router-dom'
import Landing from './Landing/Landing'
import Signup from './Signup/Signup'
import Create from './Create/Create'
import Games from './Games/Games'
import './App.css'


function App() {
  return (
    <main className='App'>
      <h1 className='title'><Link to='/'>Pick me up!</Link></h1>

      <Route
        exact path = "/"
        component={Landing}
      />
      
      <Route
        path = "/signup"
        component={Signup}
      />

      <Route
        path = "/create"
        component={Create}
      />

      <Route
        path = "/games"
        component={Games}
      />

    </main>
  );
}

export default App;
