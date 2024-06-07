import React, { useState } from 'react';
import './Mypage.css';
import { Link } from 'react-router-dom';
import Background from '../img/bgmy.png';

function Mypage() {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="mypage">
            <div className="background-container">
                <img src={Background} className="background-image" alt="Background" />
                
                <div className="overlay">
                    <div className="profile-section">
                        <label htmlFor="profile-upload" className="profile-upload-label">
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className="profile-image" />
                            ) : (
                                <div className="profile-placeholder"></div>
                            )}
                        </label>
                        <input
                            id="profile-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className="info-section">
                        <div className="input-row">
                            <div className="input-container">
                                <input 
                                    type="text"
                                    className="name-box"
                                    placeholder="이름"
                                />
                            </div>
                            <div className="input-container">
                                <input 
                                    type="tel"
                                    className="phonenum-box"
                                    placeholder="전화번호"
                                />
                            </div>
                            <div className="input-container">
                                <input 
                                    type="email"
                                    className="email-box"
                                    placeholder="이메일"
                                />
                            </div>
                        </div>
                        <div className="input-container add-box-container">
                            <input 
                                type="text"
                                className="add-box"
                                placeholder="뭐하는 칸인가요?"
                            />
                        </div>
                    </div>
                </div>

                <div className="buttons-row">
                    <Link to="/Myreview">
                        <button className="Myreview"></button>
                    </Link>
                    <Link to="/Mylist">
                        <button className="Mylist"></button>
                    </Link>
                    <Link to="/Myblog">
                        <button className="Myblog"></button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Mypage;
