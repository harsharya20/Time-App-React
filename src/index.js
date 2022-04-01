import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currtime= ' '
const curtime = new Date().getHours();
const times = {};
if(curtime >=1 && curtime <12){
  currtime = 'Good Morning'
  times.color = 'Orange'
} else{
  if(curtime >=12 && curtime <19){
  times.color = 'purple'
  currtime = 'Good Afternoon'
  } else {
    currtime = 'Good Night'
    times.color = 'blue'
  }
}



ReactDOM.render(
  <>
  <div>
  <h1>Hello User, <span style={times}>{currtime}</span> </h1>
  </div>
  </>,
  document.getElementById('root')
)