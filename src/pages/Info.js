import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

import { useParams } from 'react-router-dom';


import slide1 from '../img/food_img.png';
import slide2 from '../img/food_img2.png';
import slide3 from '../img/food_img3.png';
import moreImage from '../img/더보기.png';
import reviewImage from '../img/맛꿀마리뷰.png';
import relogo from '../img/맛꿀마_2 1.png';

function Info() {
    
    const [slideIndex, setSlideIndex] = useState(0); // 슬라이드
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        // 여기에 북마크를 저장하거나 삭제하는 로직을 추가합니다.
        // 예: API 호출 또는 로컬 저장소에 저장
        if (!isBookmarked) {
            console.log("북마크가 저장되었습니다.");
        } else {
            console.log("북마크가 삭제되었습니다.");
        }
    };    
    
    const slides = [
        { src: slide1, alt: 'Food Image 1' },
        { src: slide2, alt: 'Food Image 2' },
        { src: slide3, alt: 'Food Image 3' },
    ];

    const plusSlides = (n) => {
        setSlideIndex(prevIndex => {
            let newIndex = prevIndex + n;
            if (newIndex >= slides.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = slides.length - 1;
            }
            return newIndex;
        });
    };

    // 맛꿀마 리뷰
    const [visibleCount, setVisibleCount] = useState(3);

    const loadMoreReviews = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const reviews = [
        { id: 1, user: '아이디1', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        { id: 2, user: '아이디2', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        { id: 3, user: '아이디3', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        { id: 4, user: '아이디4', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        { id: 5, user: '아이디5', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        { id: 6, user: '아이디6', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        { id: 4, user: '아이디8', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        { id: 5, user: '아이디9', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.' },
        // 필요한 만큼 리뷰를 추가하세요
    ];

    // 게시판 리뷰
    
    const writereviews = [
        { id: 1, title: '부산 진구 : 초밥 추천', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.', date: '2024.06.05' },
        { id: 2, title: '부산 진구 : 초밥 추천', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.', date: '2024.06.05' },
        { id: 3, title: '부산 진구 : 초밥 추천', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.', date: '2024.06.05' },
        { id: 4, title: '부산 진구 : 초밥 추천', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.', date: '2024.06.05' },
        { id: 5, title: '부산 진구 : 초밥 추천', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.', date: '2024.06.05' },
        { id: 6, title: '부산 진구 : 초밥 추천', content: '몇 년 전에 갔었는데 그 때 받은 미각 충격이 잊혀지질 않네요. 또 가고 싶습니다.', date: '2024.06.05' },
        // 필요한 만큼 리뷰를 추가하세요
    ];



    return (
        <div className='in-wrap'>
            { /* 상단바 */ }
            <div className='header'></div>

            { /* 메인 */ }
            <div className='wrap-main'>
                <div className='mainarea'>
                    <div className='wrap-storename'>
                        { /* 가게 이름, 별점, 북마크 */ }
                        <div className='info-storename'>
                            <h2>맛꿀마</h2>
                            <p className='point'><span className='p-star'></span></p>
                            <div className='i-score'>
                                <span className='i-total'>4.0</span>
                                <span className='i-count'>(nn)</span>
                            </div>
                            <div className='logo-container'>
                                <span className='info-logo'></span>
                            </div>
                            <div className='i-bookmark' onClick={toggleBookmark}>
                                <i className={`fas fa-bookmark bookmark ${isBookmarked ? 'bookmarked' : ''}`}></i>
                            </div>

                        </div>

                        { /* 가게 사진 */ }
                        <div className='intro'>
                            <div className='thumb-wrap'>
                                <div className='slideshow-container'>
                                    { /* 슬라이드 사진 */ }
                                    {slides.map((slide, index) => (
                                        <div key={index} className="mySlides fade" style={{ display: index === slideIndex ? 'block' : 'none' }}>
                                            <img src={slide.src} alt={slide.alt} style={{ width: '564px', height: '362px' }} />
                                        </div>
                                    ))}

                                    { /* 슬라이드 버튼 */ }
                                    
                                    <div className='slideBtn'>
                                    <button className='prev' onClick={() => plusSlides(-1)}>❮</button>
                                        <button className='next' onClick={() => plusSlides(1)}>❯</button>
                                    </div>
                                </div>
                            </div>

                            { /* 매장 소개 */ }
                            <div className='store-intro'>
                                <p className='store-head'>매장 소개</p>
                                <p className='introduction'>
                                한국 최고의 고급 한식 레스토랑을 추구하는 '권숙수'입니다.<br />
                                    권우중 쉐프가 몇 년간 전국을 다니면서 축적한 방방곡곡의 제철 식재료만을 사용합니다.<br />
                                    신선한 제철 식재료 자체의 맛과 식기의 아름다움이 결합되어 하나의 예술작품이 완성됩니다.<br />
                                    여름에는 은어, 도화새우, 딱새우 등을 사용하고<br />
                                    가을에는 참게, 미더덕젓갈, 능이버섯, 백화고 등 곡성, 봉화, 양양, 순천, 무안, 영암 등<br />
                                    전국에서 공수한 제철 재료를 이용한 요리를 선보이고 있습니다.<br />
                                    산지가 아니면 먹어보기 어려운 재료들만으로 요리를 선보여 정성이 가득합니다.
                                </p>
                            </div>
                        </div>
                        
                        { /* 가게 정보 */ }
                        <div className='intro2'>
                            <div className='info-wrap'>
                                { /* 지도 */ }
                                <div className='map-wrap'>
                                    <div className='store-map'>

                                    </div>
                                </div>

                                { /* 기본 정보 */ }
                                <div className='basic-info'>
                                    <div className='store-info'>
                                        <dl className='dl-info'>
                                            <dt>영업시간</dt>
                                            <dd>
                                            매일 12:00 ~ 22:00
                                            </dd>
                                        </dl>
                                        <dl className='dl-info'>
                                            <dt>주차</dt>
                                            <dd>주차</dd>
                                        </dl>
                                        <dl className='dl-info'>
                                            <dt>메뉴</dt>
                                            <dd>
                                                <ul>
                                                <li className="li-menu">
                                                        <span className="menu-name">
                                                            어쩌구
                                                        </span>
                                                        <span className="menu-price">
                                                            50,000원
                                                        </span>
                                                    </li>
                                                    <li className="li-menu">
                                                        <span className="menu-name">
                                                            어쩌구
                                                        </span>
                                                        <span className="menu-price">
                                                            50,000원
                                                        </span>
                                                    </li>
                                                    <li className="li-menu">
                                                        <span className="menu-name">
                                                            어쩌구
                                                        </span>
                                                        <span className="menu-price">
                                                            50,000원
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div className='more'>
                                                    <span className='more-txt'><Link to='#' style={{ color: '#262626' }}>더보기</Link></span>
                                                    <span className='more-icon'><Link to="#"><img src={moreImage} alt='더보기' className='m-icon' /></Link></span>
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className='dl-info'>
                                            <dt>주소</dt>
                                            <dd>부산시 강서구</dd>
                                        </dl>
                                        <dl className='dl-info'>
                                        <dt>전화번호</dt>
                                            <dd>
                                                010-000-0000
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        { /* 리뷰 */ }
                        <div className='intro3'>
                            { /* 리뷰 상단 */ }
                            <div className='m-review'>
                                <h3>맛꿀마 리뷰</h3>
                                <label className='review-nn'>(nn)</label>
                                <Link to='/review'>
                                    <div className='review-write'>
                                        <label className='write'>
                                            리뷰 작성
                                            <span className='pencil'><label>
                                                    <img src={reviewImage} alt='연필'></img>
                                            </label></span>
                                        </label>
                                    </div>
                                </Link>
                            </div>
                            { /* 리뷰 내용 */ }
                            <div className='review-wrap'>
                                <div className='re-wrap'>
                                    {reviews.slice(0, visibleCount).map(review => (
                                        <dl key={review.id}>
                                            <img src={relogo} alt="로고" className="review-logo" />
                                            <dt>
                                                <span>{review.user}</span>
                                            </dt>
                                            <dd className="content">
                                                {review.content}
                                            </dd>
                                        </dl>
                                    ))}
                                    {visibleCount < reviews.length && (
                                        <div className="more-review">
                                            <div className="btn-wrap">
                                                <Link to="#" className="btn-review" onClick={loadMoreReviews}>리뷰 더보기</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                        { /* 게시판 리뷰 */ }
                        <div className='intro4'>
                            <div className='m-review'>
                                <h3 style={ { paddingRight: '18px'} }>게시판 리뷰</h3>
                                <Link to='/review'>
                                    <div className='review-write'>
                                        <label className='write'>
                                            리뷰 작성
                                            <span className='pencil'>
                                            <img src={reviewImage} alt='연필' />
                                            </span>
                                        </label>
                                    </div>
                                </Link>
                            </div>

                            { /* 리뷰 */ }
                            <div className='review-wrap'>
                                <div className='re-wrap'>
                                    {writereviews.slice(0, visibleCount).map(writereview => (
                                        <dl key={writereview.id}>
                                            <img src={relogo} alt="로고" className="review-logo" />
                                            <dt>
                                                <span>{writereview.title}</span>
                                            </dt>
                                            <dd className="content">
                                                {writereview.content}
                                            </dd>
                                            <dd className="date">{writereview.date}</dd>
                                        </dl>
                                    
                                    ))}
                                    { /* 리뷰 더보기 버튼 */ }
                                    {visibleCount < reviews.length && (
                                        <div className="more-review">
                                            <div className="btn-wrap">
                                                <Link to="#" className="btn-review" onClick={loadMoreReviews}>리뷰 더보기</Link>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;