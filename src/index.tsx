import React from 'react';
import ReactDOM from 'react-dom/client';
import KeybodeMainpage from './pages/KeybodeMainpage';
import TypingPage from './pages/TypingPage';
import Keybode from './components/Keybode';
import TypingBox from './components/TypingBox';
import RankingMainPage from './pages/RankingMainPage';
import LoginPage from './pages/LoginPage';
import Record2 from './components/Record2';
import Result from './components/Result';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<div> 
  {/* <Keybode/> */}
  {/* <KeybodeMainpage/> */}
  {/* <Record2/> */}
  <TypingPage/>
  {/* <Result/> */}
  {/* <TypingBox/> */}
  {/* <LoginPage/> */}
  {/* <RankingMainPage/> */}
  </div>);