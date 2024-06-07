import React, { useState } from 'react';
import '../App.css';
import './Map.css';
import map from '../img/cousemap.png';
import courseOne from '../img/course1.png';
import courseTwo from '../img/course2.png';
import courseThree from '../img/course3.png';
import courseFour from '../img/course4.png';
import courseFive from '../img/course5.png';
import courseSix from '../img/course6.png';
import courseSeven from '../img/course7.png';
import courseEight from '../img/course8.png';
import courseNine from '../img/course9.png';

const Map = () => {
  const [content, setContent] = useState();

  const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    one: courseOne,
    two: courseTwo,
    three: courseThree,
    four: courseFour,
    five: courseFive,
    six: courseSix,
    seven: courseSeven,
    eight: courseEight,
    nine: courseNine
  };

  return (
    <div className='Course'>

      {/* 갈맷길 지도 부분 */}
      <div className='container-map'>
        <img src={map} alt='map' />
      </div>
      {/* 갈맷길 지도 부분 끝 */}

      {/* 코스 선택 부분 */}
      <div className='container-course'>

        {/* 첫째 줄의 5개 버튼 */}
        <div className="button-row">
          <button className="button-1" onClick={handleClickButton} name="one"></button>
          <button className="button-2" onClick={handleClickButton} name="two"></button>
          <button className="button-3" onClick={handleClickButton} name="three"></button>
          <button className="button-4" onClick={handleClickButton} name="four"></button>
          <button className="button-5" onClick={handleClickButton} name="five"></button>
        </div>

        {/* 둘째 줄의 4개 버튼 */}
        <div className="button-row">
          <button className="button-9" onClick={handleClickButton} name="nine"></button>
          <button className="button-8" onClick={handleClickButton} name="eight"></button>
          <button className="button-7" onClick={handleClickButton} name="seven"></button>
          <button className="button-6" onClick={handleClickButton} name="six"></button>
        </div>

      </div>
      {/* 코스 선택 부분 끝 */}

      {/* 선택된 내용 표시 */}
      {content && (
        <div className="selected-content">
          <img src={selectComponent[content]} alt={`course ${content}`} />
        </div>
      )}
    </div>
  );
}

export default Map;
