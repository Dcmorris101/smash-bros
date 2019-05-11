import React from 'react';
import banner from '../assets/Smash-Banner.jpg'

export default () =>
  <div className="banner">
    <img className="fighter-banner" src={banner} alt="fighter banner"></img>
    <div className="container">
      <div className="home-desc">
        <h1>Explore the gameplay, strategies, matches, tournaments, and more of your favorite Smash Bros. Ultimate characters!</h1>
        <h2>Select your fighter below and find the latest videos and guides.</h2>
      </div>
    </div>
  </div>
