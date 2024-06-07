import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Write.css';
import FileUploadButton from '../components/FileUploadButton';

function Write(){
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', author: 'hong', date: new Date(), views: 10 },
    { id: 2, title: 'Second Post', author: 'hee', date: new Date(), views: 20 },
  ]);


  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostAuthor, setNewPostAuthor] = useState('');


  const handleNewPostTitleChange = (event) => {
    setNewPostTitle(event.target.value);
  };

  const handleNewPostContentChange = (event) => {
    setNewPostContent(event.target.value);
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

    return(
        <div className='board_wrap'>
        
        <div className='board_write_wrap'>
        <div className='board_write'>
         
        <div className='w_title'>
            <dl>
              <dt>제목</dt>
              <dd> <input
          type="text"
          placeholder="제목 입력"
          value={newPostTitle}
          onChange={handleNewPostTitleChange}
         /></dd>
            </dl>
          </div>
          <div className='content'>
            
            <textarea placeholder='내용 입력' value={newPostContent}
          onChange={handleNewPostContentChange} />
          </div>
          
          <div className='file_upload'>
          <FileUploadButton />  
          </div>
          <div className='btn_wrap'>
          
          
          <Link to="/Notice"  style={{ textDecoration: "none" }} className='on'>작성</Link>
          <Link to="/Notice" style={{ textDecoration: "none" }} className='cancle'>취소</Link>

        </div>
        </div>
        </div>
        </div>
       

    )

}

export default Write;