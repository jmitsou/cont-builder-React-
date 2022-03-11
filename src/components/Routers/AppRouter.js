import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar';

const AppRouter = () => {

  return (
    <div style={{width: '100%', flexDirection: 'column'}}>
      {}
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRouter;