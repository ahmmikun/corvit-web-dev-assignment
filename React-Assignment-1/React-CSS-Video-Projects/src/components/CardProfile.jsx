import React from 'react';
import './CardProfile.css';

export default function CardProfile() {
  return (
    <div className="card-profile-wrapper">
      <div className="profile-card">
        <div className="image">
          <img src="/profile.png" alt="" className="profile-img" />
        </div>
        <div className="text-data">
          <span className="name">Rem (レム)</span>
          <span className="job">Demon Maid - Protector</span>
        </div>
        <div className="media-buttons">
          <a href="#" style={{ background: '#4267b2' }} className="link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" style={{ background: '#1da1f2' }} className="link">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" style={{ background: '#e1306c' }} className="link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" style={{ background: '#ff0000' }} className="link">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <div className="buttons">
          <button className="button">Subscribe</button>
          <button className="button">Message</button>
        </div>
        <div className="analytics">
          <div className="data">
            <i className="bx bx-heart"></i>
            <span className="number">60k</span>
          </div>
          <div className="data">
            <i className="bx bx-message-rounded"></i>
            <span className="number">20k</span>
          </div>
          <div className="data">
            <i className="bx bx-share"></i>
            <span className="number">12k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
