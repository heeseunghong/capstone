import React from 'react';
import './Main_2.css';
import Rect from '../components/Rect';

function Main_2(){
    return( 
        <div>

      
        <div className = 'busanmap'>
        <img src={process.env.PUBLIC_URL+'/부산맛집지도.png' } ></img> 
        <div className='btnmap'>
        <img src={process.env.PUBLIC_URL+'/지도자세히보기.png' }></img>
        </div> 
        </div>
       
       
     

        <div className='boardcontainer'>
        <h1>오늘의 이야기</h1>
        <img src={process.env.PUBLIC_URL+'/지도자세히보기.png' }></img>
  
        </div>
        <Rect />
        </div>
   

    );
    


}



export default Main_2;