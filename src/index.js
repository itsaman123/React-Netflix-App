import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import Sdata from './Sdata.js';

console.log(Sdata[0]);
ReactDOM.render(
  <>
    <h1 className="heading_Style">Top five Netflix Series</h1>
    <Cards
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      Sname={Sdata[0].Sname}
      link={Sdata[0].link}
    />
    <Cards
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      Sname={Sdata[1].Sname}
      link={Sdata[1].link}
    />
    <Cards
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      Sname={Sdata[2].Sname}
      link={Sdata[2].link}
    />
    <Cards
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      Sname={Sdata[3].Sname}
      link={Sdata[3].link}
    />
    <Cards
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      Sname={Sdata[5].Sname}
      link={Sdata[5].link}
    />
    <Cards
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      Sname={Sdata[5].Sname}
      link={Sdata[5].link}
    />
  </>,
  document.getElementById('root')
);
