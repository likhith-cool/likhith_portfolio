import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                             <a href='https://github.com/likhith-cool' target="_blank">
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/pemmareddy-likhith-8040a920b/' target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Pemmareddy Likhith</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            steps = {[
                                "React Dev 🌐",4000,
                                "MERN Dev 💻",4000,
                                "Fullstack Dev 💻",4000,
                            ]}
                            loop={Infinity}
                            />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building application or website with back end operations.
                            </span>
                        </span> 
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                         onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire me{" "}
                        </button>
                        <a href ='MyResume.pdf' download='MyResume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;