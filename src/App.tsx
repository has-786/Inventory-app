import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import Inventory from './containers/inventory';
function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Inventory />
       {/* <div style={{ margin: '50px 0 0 10px', float: 'left' }}>
          <Typography variant="h6">Inventory stats</Typography> 
       </div> */}
    </div>
  );
}

export default App;
