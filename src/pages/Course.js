import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Course.css';

import logo3_3Image from '../img/맛꿀마_3 3.png';
import cmapImage from '../img/4 1.png';
import part1 from '../img/3코스 part1.png';
import part2 from '../img/3코스 part2.png';
import part3 from '../img/3코스 part3.png';
import part4 from '../img/3코스 part4.png';
import part5 from '../img/3코스 part5.png';
import triangle from '../img/Group 19.png';
import ingiImage from '../img/인기 맛집.png';
import matImage from '../img/맛집 더 알아보기.png';
import moreImage from '../img/게시판자세히.png';
import matreImage from '../img/image 1.png'

function Course() {
    const [value, setValue] = useState('구/군');
    const [searchTerm, setSearchTerm] = useState(''); // 검색창
    const [regionFilter, setRegionFilter] = useState(''); // 지역 필터 상태 추가

    const [searchHistory, setSearchHistory] = useState([]); // 검색 기록
    const [searched, setSearched] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    
    const [content, setContent] = useState(); // 코스 선택

    // 코스
    const handleClickButton = e => {
      const { name } = e.target;
      if (content === name) {
        setContent(''); // 현재 클릭된 버튼을 다시 클릭하면 상태를 해제
      } else {
        setContent(name); // 다른 버튼을 클릭하면 해당 버튼의 이름을 상태로 설정
      }
    };

    const selectComponent = {
        p1: part1,
        p2: part2,
        p3: part3,
        p4: part4,
        p5: part5
    };
    


    // 지역 선택
    const handleChange = (event) => {
        const selectedRegion = event.target.value;
        setValue(selectedRegion);
        setRegionFilter(selectedRegion === '구/군' ? '' : selectedRegion); // '구/군' 선택 시 필터 해제
    };

    //검색
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        if (!event.target.value) {
            setSearched(false);  // 검색어가 비어 있을 때 검색 결과를 초기화
        }
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // 검색어로 필터링하는 로직을 추가할 수 있습니다.
        console.log("Search term: " + searchTerm);
        
        setSearched(true);
        if (searchTerm && !searchHistory.includes(searchTerm)) {
            setSearchHistory([searchTerm, ...searchHistory].slice(0, 10)); // 최근 5개 검색어 유지
        }
    };

    const clearSearch = () => {
        setSearchTerm('');
        setSearched(false); // 검색어 초기화 시 검색 결과도 초기화
    };

    const handleHistoryClick = (term) => {
        setSearchTerm(term);
        setSearched(true);
    };

    const reviews = [
        { id: 1, title: 'Title 1', content: 'Content 1', date: '2023-01-01' },
        { id: 2, title: 'Title 2', content: 'Content 2', date: '2023-02-01' },
        { id: 3, title: 'Title 3', content: 'Content 3', date: '2023-03-01' },
        // 필요한 만큼 리뷰를 추가하세요
    ];


    
    return (
        <div className='wrapper'>
            <div className='header'>

            </div>
            { /* 검색 창 */ }
            <div className='storesearch  plus'>
                <ul>
                    <li className='search'>
                        { /* 지역 선택 */ }
                        <span className='gugun'>
                            <select title='검색조건' className='area-select' id='mySelect' name='gugun'
                            value={value} onChange={handleChange}>
                                <option value="구/군">구/군</option>
                                <option value="강서구">강서구</option>
                                <option value="금정구">금정구</option>
                                <option value="기장군">기장군</option>
                                <option value="남구">남구</option>
                                <option value="동구">동구</option>
                                <option value="동래구">동래구</option>
                                <option value="부산진구">부산진구</option>
                                <option value="북구">북구</option>
                                <option value="사상구">사상구</option>
                                <option value="사하구">사하구</option>
                                <option value="서구">서구</option>
                                <option value="수영구">수영구</option>
                                <option value="연제구">연제구</option>
                                <option value="영도구">영도구</option>
                                <option value="중구">중구</option>
                                <option value="해운대구">해운대구</option>
                            </select>
                        </span>
                    </li>
                    { /* 검색 창 */ }
                    <li>
                        <div className='search-form'>
                            <form name='searchForm' onSubmit={handleSearchSubmit}>
                                
                                { /* 추가 */ }
                                <div className='search-input-container'>
                                    <input
                                        type='search'
                                        name='stxt'
                                        id='stxt'
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        placeholder="검색어를 입력하세요"
                                        onFocus={() => setShowHistory(true)}
                                        onBlur={() => setTimeout(() => setShowHistory(false), 100)}
                                        autoComplete='off'
                                    />
                                    <button type="button" className='clear-button' onClick={clearSearch}>
                                        &times;
                                    </button>

                                    <button type="submit" className='btn-search'>
                                        <span className='search-icon'></span>
                                    </button>

                                </div>

                            </form>
                                    

                            { /* 추가 */ }
                            {showHistory && searchHistory.length > 0 && (
                            <div className='search-history'>
                                {searchHistory.map((term, index) => (
                                    <div key={index} className='history-item' onMouseDown={() => handleHistoryClick(term)}>
                                        {term}
                                    </div>
                                ))}
                            </div>
                            )}
                        </div>
                    </li>
                    { /* 로고 */ }
                    <li>
                        <div className='search-logo'>
                            <img src={logo3_3Image} alt='로고' />
                        </div>
                    </li>
                </ul>
            </div>

            { /* 코스 */ }
            <div className='coursewrap'>
                { /* 지도 */ }
                <div className='coursemap'>
                    <img src={cmapImage} alt='코스맵' />
                </div>

                { /* 설명 */ }
                <div className='explain'>
                    <h2>3-1 구간</h2>
                    <h3>코스 소개</h3>
                    <p style={ {fontSize: '25px' }}> 
                    신선이 노닐던 신선대가 웅장한 부산항의 파노라마를 보여 준다.
                    1796년 이곳을 방문했던 영국 함정 '프로비던스'호의 사연을 기리기 위해 만든
                    앤드루왕자길을 따라 내려서면 세계에서 하나 뿐인 UN기념공원이 있다.
                    지척에 선사시대부터 부산근,현대사를 일람할 수 있는 부산박물관이 있다.
                    우암동 소막마을을 지나 영화 '친구'로 유명한 문현동 곱창골목에서 자성대를 거쳐 부산진시장에 이른다.
                    </p>
                </div>
            </div>

            { /* 코스 분할 */ }
            <div className='coursepart'>
                <button className='part1' onClick={handleClickButton} name="p1">3-1 코스</button>
                <button className='part2' onClick={handleClickButton} name="p2">3-2 코스</button>
                <button className='part3' onClick={handleClickButton} name="p3">3-3 코스</button>
                <button className='part4' onClick={handleClickButton} name="p4">3-4 코스</button>
                <button className='part5' onClick={handleClickButton} name="p5">3-5 코스</button>
            </div>

            {/* 선택된 내용 표시 */}
            {content && (
                <div className="selected-content">
                <img src={selectComponent[content]} alt={`course ${content}`} />
                </div>
            )}
            

            { /* 인기 맛집 */ }
            <div className='ingi'>
                <div className='ingiwrap'>
                    <div className='ingiline'></div>
                    <img src={ingiImage} alt='인기맛집' />
                </div>
                <div className='ingiphoto'>

                </div>
                <img src={triangle} alt='삼각' className='tri'></img>
            </div>

            { /* 맛집 더 알아보기 */ }
            <div className='matmore'>
                <img src={matImage} alt='맛집 더 알아보기' className='mat' />
                <Link to='/Myblog'>
                    <img src={moreImage} alt='화살표' className='matarrow'></img>
                </Link>
            </div>

            { /* 맛집 더 알아보기 후기 */ }
            <div className='review-list'>
                {reviews.map((review, index) => (
                    <div className={`matreview ${index % 2 === 0 ? 'yell' : 'oran'}`}
                    key={review.id}>
                        <div className='matreview-image'>
                            <img src={matreImage} alt='맛' />
                        </div>
                        <div className='matreview-wrap'>
                            <dl>
                            <dd className="title">{review.title}</dd>
                            <dd className="content">{review.content}</dd>
                            <dd className="date">{review.date}</dd>
                            </dl>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Course;