import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import luffy from './assets/img1.jpeg';
import pay_me from './assets/scanner_hemath.jpg';

function App() {
  return (
    <div>
      <img src={luffy} alt="My image" />
      <h1>PAY ME!! </h1>
      <img src={pay_me} alt="My image1" />
    </div>
  );
}

export default App;

