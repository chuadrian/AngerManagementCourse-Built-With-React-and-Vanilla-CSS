import React from 'react';

function Certificate({ username }) {
  return (
    <div className="certificate">
      <h2>Certificate of Completion</h2>
      <p>This is to certify that</p>
      <h3>{username}</h3>
      <p>has successfully completed the</p>
      <h4>Comprehensive Anger Management Course</h4>
      <p>Demonstrating dedication to personal growth and emotional well-being</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <div className="certificate-seal">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#3498db" strokeWidth="2"/>
          <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z" stroke="#3498db" strokeWidth="2"/>
          <path d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20Z" fill="#3498db"/>
          <text x="50" y="55" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">CERTIFIED</text>
        </svg>
      </div>
    </div>
  );
}

export default Certificate;

