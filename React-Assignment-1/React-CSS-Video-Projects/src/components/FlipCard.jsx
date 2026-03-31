import React from 'react';
import './FlipCard.css';

export default function FlipCard() {
  return (
    <div className="flip-card-wrapper">
      <div className="wrapper">
        <div className="card">
          <div className="face front-face">
            <img src="/chisa-poster.png" alt="poster" />
          </div>
          <div className="face back-face">
            <img className="avatar" src="/chisa-profile.png" alt="profile" />

            <div className="title">Chisa Kuchiba (朽葉 千咲)</div>
            <p>Silent Vanguard - Resonator <br /> Phantom Operative</p>

            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter" aria-label="Twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube" aria-label="YouTube">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
