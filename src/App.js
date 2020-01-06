import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome1, WelCome2 } from './components/compType';
import Clock from './components/clock';

function formatName(user) {

  return user.firstName + ' ' + user.lastName;

}
function App() {
  const name = 'jerry'
  const user = { firstName: 'shoudong', lastName: 'jiang'}
  return (
    <div>
      {/* 表达式 */}
      {/* <h1>{name}</h1> */}
      {/* <h1>{formatName(user)}</h1> */}
      {/* 属性 */}
      {/* <img src={logo} style={{width: '100px'}}/> */}
      {/* jsx也是表达式 */}
      {/* 使用其他组件 */}
      <Welcome1 name="some contents"/>
      <WelCome2 name="some contents"/>
      <Clock name="nihao"/>
    </div>
  );
}

export default App;
