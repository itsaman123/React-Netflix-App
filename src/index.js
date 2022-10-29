import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import Sdata from './Sdata.js';

// console.log(Sdata[0]);
function ncard(val) {
  return (
    <>
      <Cards 
        imgsrc={val.imgsrc}
        title={val.title}
        Sname={val.Sname}
        link={val.link}
    />
    </>
  );
}
ReactDOM.render(
  <>
    <h1 className="heading_Style">Top five Netflix Series</h1>
    
    {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);
