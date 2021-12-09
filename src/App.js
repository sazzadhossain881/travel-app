import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import { createContext } from 'react';
import { useState } from 'react';
import Search from './Components/Search/Search';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { getCurrentUser, handleSignOut } from './Components/Login/HandleLogin';
import { useEffect } from 'react';

export const UserContext = createContext();


function App() {
  const [user, setUser] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({});

  useEffect(() => {
    getCurrentUser().then(res => {
      setUser(res)
    })
  }, [])

  const signOutUser = () => {
    handleSignOut().then(res => {
      setUser(res)
    })
  }

  return (
    <UserContext.Provider value={{ user, setUser, bookingInfo, setBookingInfo, signOutUser }}>
      <div className="home">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booking/:id">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/search/:id">
              <Search></Search>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;
