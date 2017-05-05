import React from 'react'
import './Header.css'
import {Glyphicon} from 'react-bootstrap'


const Header = () => {
  return (
    <header>
    <div className="container hero-image">
      <div className="text-box">
        <b>11</b>
        <br/>
        <p>
          部節目與電影
          <br/> 於上週上線。
        </p>
        <button className="btn btn-md btn-full"><Glyphicon glyph="triangle-right" /> 播放</button>
        {'  '}
        <button className="btn btn-md btn-ghost"><Glyphicon glyph="plus" /> 加入我的最愛</button>
      </div>
    </div>
  </header>
  );
};

export default Header