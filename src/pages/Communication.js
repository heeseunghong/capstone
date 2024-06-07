import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Communication.css';

const Communication= () =>  {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', author: 'hong', date: new Date(), views: 10 },
    { id: 2, title: 'Second Post', author: 'hee', date: new Date(), views: 20 },
  ]);

const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(5);
const [newPostTitle, setNewPostTitle] = useState('');
const [newPostAuthor, setNewPostAuthor] = useState('');
const [newPostContent, setNewPostContent] = useState('');

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};



const handleAddPost = () => {
  const newPost = {
    id: posts.length + 1,
    title: newPostTitle,
    author: newPostAuthor,
    content: newPostContent,
    date: new Date(),
    views: 0,
  };
  setPosts([newPost, ...posts]);
  setNewPostTitle('');
  setNewPostAuthor('');
  setNewPostContent('');
};

const filteredPosts = posts.filter(post =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
  pageNumbers.push(i);
}

const handleClick = (event) => {
  setCurrentPage(Number(event.target.id));
};

  return (
    <div className='board_wrap'>
    <div className='board_title'>
     <strong>게시판</strong>
    
     <div className='buttons'>
       
        <Link to="/Notice" className='button'>공지</Link>
        <Link to="/Communication" className='button'>소통</Link>
      </div>
 

     </div>
      
     
 

      <div className='board_list_wrap'>
        <div className='board_list'>


      <div className='boardsearch'>
        <input className='searchboard'
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={handleSearch}
      />
       </div>
          <div className='top'>
          {/*
            <div className='num'>번호</div>
            <div className='title'>제목</div>
            <div className='wirter'>작성자</div>
            <div className='date'>작성일</div>
            <div className='count'>조회수</div>
  */}
        <table>
        <thead>
          <tr>
            <th className="number-col">번호</th>
            <th className="title-col">제목</th>
           
            <th className="date-col">작성일</th>
            <th className="views-col">조회수</th>
          </tr>
        </thead>
        
      </table>


          </div>
    

    {/*
    <div className='board_list_wrap'>
      <div className='board_list'>
        <div className='top'>
          <div className='num'>번호</div>
          <div className='title'>제목</div>
          <div className='wirter'>작성자</div>
          <div className='date'>작성일</div>
          <div className='count'>조회수</div>
        </div>

        <div>
          <div className='num'>5</div>
          <div className='title'>제목입니다</div>
          <div className='wirter'>홍이름</div>
          <div className='date'>2024.05.12</div>
          <div className='count'>33</div>
        </div>
*/}
    
        </div>
      <div className='board_page'>
      
        <a href="#" className='num on'>1</a>
        <a href="#" className='num'>2</a>
        <a href="#" className='num'>3</a>
        <a href="#" className='num'>4</a>
        <a href="#" className='num'>5</a>

        
        
      
      </div>
      <div className='btn_wrap'>
        <Link to = "/Write"  style={{ textDecoration: "none" }} className='on'>글 작성</Link>
        {/*}<a href="#">수정</a> */}

      </div>

      <div>
        {pageNumbers.map(number => (
          <button key={number} id={number} onClick={handleClick}>
            {number}
          </button>
        ))}
      </div>

    </div>
    </div>
   
   

       
  

  );
};

export default Communication;