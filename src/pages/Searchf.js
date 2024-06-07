
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import './Searchf.css';
import logo3_3Image from '../img/맛꿀마_3 3.png';

import image1 from '../img/image 4.png';
import starImage from '../img/Star 1.png';
import image2 from '../img/image 4-2.png';

function Searchf() {
    const [value, setValue] = useState('구/군');
    const [searchTerm, setSearchTerm] = useState(''); // 검색창
    const [regionFilter, setRegionFilter] = useState(''); // 지역 필터 상태 추가
    const [filter, setFilter] = useState(''); // 음식 종류 필터
    const [selectedType, setSelectedType] = useState(''); // 음식 종류 버튼 상태 관리를 위한 상태 변수 추가
    
    const [searchHistory, setSearchHistory] = useState([]); // 검색 기록
    const [searched, setSearched] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

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



    // 북마크 가게들 관리
    const [bookmarkedStores, setBookmarkedStores] = useState([]);

    const stores = [
        { id: 1, name: '가게 이름 1', image: image1, address: '강서구', rating: 4.0, type: '고기/구이류' },
        { id: 2, name: '나게 이름 2', image: image2, address: '강서구', rating: 3.5, type: '한식' },
        { id: 3, name: '다게 이름 3', image: 'recomImage3.jpg', address: '부산진구', rating: 4.5, type: '주류' },
        { id: 4, name: '라게 이름 4', image: image2, address: '해운대구', rating: 4.2, type: '카페/디저트' },
        { id: 5, name: '마게 이름 5', image: 'recomImage2.jpg', address: '금정구', rating: 3.9, type: '패스트푸드' },
        { id: 6, name: '바게 이름 6', image: 'recomImage3.jpg', address: '기장구', rating: 4.3, type: '해산물' },
        { id: 7, name: '가게 이름 7', image: image1, address: '동구', rating: 4.0, type: '고기/구이류' },
        { id: 8, name: '가게 이름 8', image: 'recomImage2.jpg', address: '남구', rating: 3.5, type: '한식' },
        { id: 9, name: 'store', image: 'recomImage3.jpg', address: '중구', rating: 4.5, type: '주류' },
        // 더 많은 가게 데이터를 추가합니다
    ];


    // 북마크 상태 확인 함수
    const isBookmarked = (storeId) => {
        return bookmarkedStores.some(store => store.id === storeId);
    };

    // 북마크 색 변경
    const handleBookmarkClick = (store) => {
        if (isBookmarked(store.id)) {
          // 북마크에서 제거
          setBookmarkedStores(bookmarkedStores.filter(item => item.id !== store.id));
        } else {
          // 북마크에 추가
          setBookmarkedStores([...bookmarkedStores, store]);
        }
    };


    // 클릭된 음식 종류 확인
    const handleButtonClick = (type) => {
        console.log(`${type} 버튼이 클릭되었습니다.`);
        setFilter(prevFilter => (prevFilter === type ? '' : type));

        if (selectedType === type) {
            // 이미 선택된 버튼을 다시 누르면 선택 해제
            setSelectedType('');
          } else {
            setSelectedType(type);
          }
    };
    // 색 변경
    const getButtonStyle = (type) => {
        return {
            backgroundColor: selectedType === type ? '#FFD200' : 'transparent',// 선택된 버튼에만 배경색 적용
        };
    };


    // 지역 필터
    const filteredStores = stores.filter(store => {
        const matchesType = !filter || store.type === filter;
        const matchesRegion = !regionFilter || store.address.includes(regionFilter);
        const matchesSearch = searched ? store.name.includes(searchTerm) : true;
        return matchesType && matchesRegion && matchesSearch;
    });

    return (

        <div className= 'wrapper'>
            <div className='header'>
                
            </div>
            <div className='wrap_r'>

                    <div className='content'>
                        <div className='storesear-wrap'>
                        <div className='storesearch'>
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
                        </div>
                        { /* 음식 종류 */ }
                        <div className='foodtype'>
                            { /* 음식 종류 위 */ }
                            <div className='top-button'>
                                <button 
                                    type='button' className='btn-food' 
                                    date-filter="한식" 
                                    onClick={() => handleButtonClick('한식')}
                                    style= {{ ...getButtonStyle('한식'), width: '190px' }}
                                >
                                    한식
                                </button>
                                <button 
                                    type='button' className='btn-food' 
                                    date-filter="양식/레스토랑" 
                                    onClick={() => handleButtonClick('양식/레스토랑')}
                                    style={{ ...getButtonStyle('양식/레스토랑'), width: '282.47px' }}
                                >     
                                    양식/레스토랑
                                </button>
                                <button
                                    type="button"
                                    className="btn-food"
                                    data-filter="고기/구이류"
                                    onClick={() => handleButtonClick('고기/구이류')}
                                    style={{ ...getButtonStyle('고기/구이류'), width: '223px' }}
                                >
                                    고기/구이류
                                </button>
                                <button
                                    type="button"
                                    className="btn-food"
                                    data-filter="해산물"
                                    onClick={() => handleButtonClick('해산물')}
                                    style={{ ...getButtonStyle('해산물'), width: '190px' }}
                                >
                                    해산물
                                </button>
                                <button
                                    type="button"
                                    className="btn-food"
                                    data-filter="일/중/세계음식"
                                    onClick={() => handleButtonClick('일/중/세계음식')}
                                    style={{ ...getButtonStyle('일/중/세계음식'), width: '280px' }}
                                >
                                    일/중/세계음식
                                </button>
                            </div>

                            { /* 음식 종류 아래 */ }
                            <div className='bottom-button'>
                                <button
                                    type="button"
                                    className="btn-food"
                                    data-filter="패스트푸드"
                                    onClick={() => handleButtonClick('패스트푸드')}
                                    style={{ ...getButtonStyle('패스트푸드'), width: '244px'}}
                                >
                                    패스트푸드
                                </button>
                                <button
                                    type="button"
                                    className="btn-food"
                                    data-filter="카페/디저트"
                                    onClick={() => handleButtonClick('카페/디저트')}
                                    style={{ ...getButtonStyle('카페/디저트'), width: '244px'}}
                                >
                                    카페/디저트
                                </button>
                                <button
                                    type="button"
                                    className="btn-food"
                                    data-filter="주류"
                                    onClick={() => handleButtonClick('주류')}
                                    style={{ ...getButtonStyle('주류'), width: '172px'}}
                                >
                                    주류

                                </button>
                            </div>

                        </div>

                        { /* 추천 맛집 */ }
                        <div className='recom-text'>
                            <span className='recom-text1'><label>추천 맛집</label></span>
                            <span className='recom-text2'><label>({filteredStores.length})</label></span>
                        </div>

                        <div className='recom'>
                            <div className='recom-wrap'>

                                    {filteredStores.map(store => (
                                        
                                        <div className='recombox' key={store.id}>
                                            <div className='recom-photo'>
                                                <Link to='/info'
                                                className='a-photo'>
                                                    <img src={store.image} alt="음식이미지" />
                                                </Link>
                                                <div className='recom-info'>
                                                    { /* 별점 */ }
                                                    
                                                    <div className='grade'>
                                                        
                                                        <div className='star-wrap'>
                                                        <Link to='/info' className='link-style'>
                                                            <img src={starImage} alt='별' />
                                                        </Link>
                                                        </div>
                                                        
                                                        <span className='grade_'><label>
                                                            <Link to='/info' className='link-style'>
                                                            {store.rating}
                                                            </Link>
                                                        </label>
                                                        </span>
                                                        
                                                    </div>  
                                                    { /* 가게 이름 */ }
                                                    
                                                    <div className='storename'>
                                                        <Link to='/info' className='link-style'>
                                                        <span className='store_name'>
                                                            {store.name}
                                                        </span>
                                                        </Link>
                                                        <div className='toggle-bookmark'>
                                                            <i
                                                                className={`fas fa-bookmark bookmark ${isBookmarked(store.id) ? 'active' : ''}`}
                                                                onClick={() => handleBookmarkClick(store)}
                                                            ></i>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    <p className='address'>
                                                        
                                                        <span><label>
                                                            <Link to='/info' className='link-style'>
                                                            {store.address}
                                                            </Link>
                                                        </label></span>
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        ))}

                            </div>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Searchf;