import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Register from '../Auth/Register';
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar';
import Login from '../Auth/Login';
import EventJournal from '../Journal/EventJournal';

const AppRouter = () => {

  return (
    <div style={{width: '100%', flexDirection: 'column'}}>
      {}
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/eventjournal" element={<EventJournal />}/>
      </Routes>
    </div>
  )
}

export default AppRouter;