import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Review.css';

import logo_2Image from '../img/맛꿀마_2 1.png';


function Review() {
    const [title, setTitle] = useState(''); // 제목
    const [content, setContent] = useState(''); // 내용
    const [currentDate, setCurrentDate] = useState(''); // 날짜

    useEffect(() => {
        const date = new Date();
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setCurrentDate(formattedDate);
    }, []); // []를 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함


    const handleSubmit = (event) => {
        event.preventDefault();
        // 여기서 리뷰를 등록하거나 다른 작업을 수행해야 합니다.
        console.log("제목:", title);
        console.log("내용:", content);
        console.log("날짜:", currentDate);
        setTitle('');
        setContent('');
    };


    const handleReset = () => {
        setTitle('');
        setContent('');
    };


    return (
        <div className='re-wrap'>
            <div className='header'>
                {/* 메뉴 바 내용 */}
            </div>
            <div className='wrap-review'>
                {/* 리뷰 작성 버튼 */}
                
                <div className='wrap-rev'>
                    <Link to="#" className='write-re' onClick={handleReset}>
                        <span>리뷰 작성</span>
                    </Link>
                    <div className='re-logo'>
                        <img src={logo_2Image} alt='리뷰 로고' />
                    </div>
                </div>

                

                {/* 작성 폼 */}
                <form onSubmit={handleSubmit}>
                    
                    <div className='wrap-write'>
                        <div className='write-back'>
                            <div className='write-form'>
                                
                                <div className='write-header'>
                                    
                                    <input
                                        id="title"
                                        type="text"
                                        className="title-input"
                                        placeholder="제목"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <span className='wr-line'></span>
                                <div className='write-text'>
                                    <textarea
                                        id='review-form'
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="리뷰를 남겨주세요."
                                    ></textarea>
                                </div>
                                <p>{currentDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className='write-btn'>
                        <button type='submit'>리뷰 등록하기</button>
                    </div>
                </form>        
            </div>
        </div>
    );
}

export default Review;
