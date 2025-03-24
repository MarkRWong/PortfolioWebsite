import React from 'react';
import './Home.css';
import Mark from '../assets/images/Mark.png';

const Home = () => {
    return (
        <section id="home">
            <h1 className='title'>Welcome to My Webpage!</h1>
            <div className='text-content'>
            <img className='profile-image' src={Mark} alt="ProfilePic" />
            <p>Hi, I'm Mark, a recent Electrical Engineering Graduate from UBC. I'm currently based in Vancouver, Canada looking for opportunities in the tech field.</p>
            </div>
        </section>
    );
};

export default Home;