import React, { useState } from 'react';
import Notice from './Notice';
import Communication from './Communication';
import './Boardnav.css';

const Boardnav = () => {
  const [activeBoard, setActiveBoard] = useState('notice');

  return (
    <div className="Boardnav">
     {/*<nav></nav>*/}
        <button className='noticebtn' onClick={() => setActiveBoard('notice')}>공지</button>
        <button className='communibtn' onClick={() => setActiveBoard('communication')}>소통</button>
      
      
      <div className="board-container">
        {activeBoard === 'notice' ? <Notice /> : <Communication />}
      </div>
    </div>
  );
};

export default Boardnav;