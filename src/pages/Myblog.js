// Myblog 컴포넌트의 코드

import React from 'react';
import './Myblog.css';

function Myblog() {
  const containerList = [1, 2, 3]; //필요에 따라 수정

  return (
    <div>
      <div className='Blog'>
        <div className="content-title-wrapper">
          <div className="content-main-title">게시판 리뷰</div>
          <button className="custom-button"></button>
        </div>

        <div id="content-wrapper" className="content-wrapper">
            <ul className="blog-list">
              {containerList.map((_, index) => (
                <li
                  key={index}
                  className={`blog-list-item ${index % 2 === 0 ? 'orange-bg' : 'yellow-bg'}`}
                >
                  <div className="blog-wrapper">
                      <div className="blog-image"></div>
                      <div className="blog-detail">
                          <div className="blog-title">가게 이름</div>
                          <div className="blog-desc">구 이름</div>
                          <div className="blog-icon">가게에 대한 메모</div>
                      </div>
                  </div>

                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Myblog;
