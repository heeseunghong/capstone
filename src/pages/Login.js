import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.id === id && user.password === password);

    if (user) {
      // 로그인 성공
      navigate('/main'); // 로그인 성공 후 이동할 페이지
    } else {
      // 로그인 실패
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className='lo-wrapper'
    >
      <div className='header'></div>
      <div className='wrap'>
          <div className='login-form'>

            <h1>Login</h1>

            {/* id 입력 */}
            <div className='int-area'>
              <input type='text' name='id' id='id' 
              placeholder='ID'
              value={id}
              onChange={(e) => setId(e.target.value)}
              autoComplete='off' required />
            </div>

            {/* pw 입력 */}
            <div className='int-area'>
              <input type='password' name='pw' id='pw'
              placeholder='PASSWORD'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='off' required />
            </div>

            {/* 로그인 버튼 */}
            <div className="btn-area">
              <button type="sumit" 
              onClick={handleLogin}
              className="btn">로그인</button>
            </div>

            {/* 회원가입 */}
            <div className="register-link">
              <Link to='/membership'>회원가입</Link>
            </div>

          </div>
      </div>
    </div>
  );
}

export default Login;
