import React from 'react';
import { Router, Routes, Link, useHistory } from 'react-router-dom';
import '../App.css';
import './Main.css';
import food_img from '../img/food_img.png';

import Search from '../components/Search';
import Rect from '../components/Rect';

function Main(){
    return( 
      
      <div className="Main_wrap">
      <div className='mainlogo'>
      <img src={process.env.PUBLIC_URL+'/맛꿀마 1.png' }></img>
      </div>
      <div className='introduce'>
      <p> 맛꿀마는 유튜브  '피식대학' 채널 경상도 호소인 관련 컨텐츠 영상에서 나온 표현 </p>
      <p>'맛있다'라는 말을 사투리 느낌으로 표현한 것으로 실제 존재하는 단어는 아니지만
         사람들사이에서 하나의 유행어로 자리잡았다  </p> 
      <p> 이 사이트는 부산지역 맛집소개 웹사이트로, 부산 갈맷길 코스 구역별 맛집 정보를 제공한다.
         </p> 
      </div>
      
      <div className="search_container">
        
        
      <div className='string'>
      <img src={process.env.PUBLIC_URL+'/마! 이 음식 어떠노_ 맛깔삐제_.png' } ></img>     
      </div>
      
      <div className="foodimage-container">
          <img src={food_img} alt="음식 사진" />
        </div>

      <Search />


      </div>

      {/*<Main_2 />*/}
    
    
      

      
      <div className = 'busanmap'>
      <img src={process.env.PUBLIC_URL+'/부산맛집지도.png' } ></img> 
      <div className='btnmap'>
      <Link to = '/Map'> <img src={process.env.PUBLIC_URL+'/지도자세히보기.png' }></img></Link>
      </div> 
      </div>
     
     
   

      <div className='boardcontainer'>
      <h1>오늘의 이야기</h1>
      <Link to = '/Notice'><img src={process.env.PUBLIC_URL+'/지도자세히보기.png' }></img></Link>
      </div>
      <Rect />
     
      </div>
 
    );
  }


export default Main;