import './App.css';
import React from 'react';
import { useState } from 'react';
import Axios from 'axios'
import excused from './img/excused.png'


function App() {

  const [excuse, setExcuse] = useState('');

  const funClick = (excuse) => {

    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((res) => {
      setExcuse(res.data[0])
    })

  }




  return (
    <div className="App">
      <div className='heading'><h1>Excuse Generator</h1>
        <h4>Generate an excuse for below categories</h4>
        <div className='btnGroup'>
          <button onClick={() => funClick('party')}>Party</button>
          <button onClick={() => funClick('family')}>Family</button>
          <button onClick={() => funClick('office')}>Office</button>
          <button onClick={() => funClick('children')}>Children</button>
          <button onClick={() => funClick('college')}>College</button>
          <button onClick={() => funClick('funny')}>Funny</button>
          <button onClick={() => funClick('unbelievable')}>Unbelievable</button>
          <button onClick={() => funClick('developers')}>Developers</button>
        </div></div>


      <br /><br />


      <div className='excuse'>
        <h4>Category : {excuse?.category}</h4>
        <br />
        <h3>Excuse: <br /><br />{excuse?.excuse}</h3>
        <img src={excused} alt='sorry'></img>
      </div>
    </div>

  );
}

export default App;
