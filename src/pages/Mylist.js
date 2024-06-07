import React, { useState } from 'react';
import '../App.css';
import './Mylist.css';
import bookmarkEmpty from '../img/bookmark2.png';
import bookmarkFilled from '../img/bookmark.png';

function Mylist() {
    // 각 리스트 아이템의 북마크 상태를 관리하는 배열
    const [bookmarks, setBookmarks] = useState([false, false, false]); // 예시로 3개의 아이템을 가정

    // 북마크를 토글하는 함수
    const toggleBookmark = (index) => {
        const updatedBookmarks = [...bookmarks];
        updatedBookmarks[index] = !updatedBookmarks[index];
        setBookmarks(updatedBookmarks);
    };

    return (
        <div>
            <div className="content-title-wrapper">
                <div className="content-main-title">북마크 리스트</div>
            </div>

            <div id="content-wrapper" className="content-wrapper">
                <div className="main-content-wrapper">
                    <div id="first-wrapper" className="list-wrapper">
                        <div className="image"></div>
                        <div className="detail">
                            <div className="title">가게 이름</div>
                            <div className="desc">구 이름</div>
                            <div className="icon">
                                가게에 대한 메모
                                <img
                                    src={bookmarks[0] ? bookmarkFilled : bookmarkEmpty}
                                    alt="북마크"
                                    onClick={() => toggleBookmark(0)}
                                    className="bookmark-icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div id="second-wrapper" className="list-wrapper">
                        <div className="image"></div>
                        <div className="detail">
                            <div className="title">가게 이름</div>
                            <div className="desc">구 이름</div>
                            <div className="icon">
                                가게에 대한 메모
                                <img
                                    src={bookmarks[1] ? bookmarkFilled : bookmarkEmpty}
                                    alt="북마크"
                                    onClick={() => toggleBookmark(1)}
                                    className="bookmark-icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div id="third-wrapper" className="list-wrapper">
                        <div className="image"></div>
                        <div className="detail">
                            <div className="title">가게 이름</div>
                            <div className="desc">구 이름</div>
                            <div className="icon">
                                가게에 대한 메모
                                <img
                                    src={bookmarks[2] ? bookmarkFilled : bookmarkEmpty}
                                    alt="북마크"
                                    onClick={() => toggleBookmark(2)}
                                    className="bookmark-icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mylist;
