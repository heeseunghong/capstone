import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './membership.css';


function Membership() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
            name,
            id,
            password,
            email,
            phone
        };
        console.log('회원가입 데이터:', userData);

        // 기존 사용자 데이터 가져오기
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // 사용자 데이터 추가
        existingUsers.push(userData);

        // 사용자 데이터를 로컬 스토리지에 저장
        localStorage.setItem('users', JSON.stringify(existingUsers));

        
        // 입력 필드 초기화
        setName('');
        setId('');
        setPassword('');
        setEmail('');
        setPhone('');
    };

    
    return (
        <div className='mem-wrapper'
        >

            <div className='header'></div>
            <div className='m-wrap'>
                <form className='membership-form' onSubmit={handleSubmit}>

                    {/* 이름 입력 */}
                    <div className="int-area_m">
                        <input type="text" name="name" id="name"
                        placeholder="이름"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    </div>
                    
                    {/* 아이디 입력 */}
                    <div className="int-area_m">
                        <input type="text" name="id" id="id"
                        placeholder="아이디"
                        autoComplete="off"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required />
                    </div>

                    {/* 비밀번호 입력 */}
                    <div className="int-area_m">
                        <input type="password" name="pw" id="pw"
                        placeholder="비밀번호"
                        autoComplete="off" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    </div>

                    {/* 이메일 입력 */}
                    <div className="int-area_m">
                        <input type="email" name="email" id="email"
                        placeholder="이메일"
                        autoComplete="off" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>

                    {/* 전화번호 입력 */}
                    <div className="int-area_m">
                        <input type="tel" name="num" id="num"
                        placeholder="전화번호"
                        autoComplete="off" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required />
                    </div>

                    {/* 회원가입 버튼 */}
                    <div className="btn-area">
                        <button type="sumit" className="btn">회원가입</button>
                    </div>

                    {/* 로그인 */}
                    <div className="login-link">
                        <Link to='/login'>로그인</Link>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Membership;