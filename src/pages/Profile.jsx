import React from 'react';
import Header from '../components/Header';
import '../styles/profile.css';

const Profile = () => {
  return (
    <>
        <Header />
        <div className="container">
            <div className="profileImage">
                <img src="" alt="" />
                <p>Change</p>
            </div>
        </div>
    </>
  )
}

export default Profile