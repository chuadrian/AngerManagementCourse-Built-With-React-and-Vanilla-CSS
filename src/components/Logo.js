import React from 'react';

const Logo = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#3498db"/>
    <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20Z" fill="white"/>
    <path d="M15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18Z" fill="#3498db"/>
    <path d="M25 18C25.5523 18 26 17.5523 26 17C26 16.4477 25.5523 16 25 16C24.4477 16 24 16.4477 24 17C24 17.5523 24.4477 18 25 18Z" fill="#3498db"/>
    <path d="M20 26C22.2091 26 24 24.2091 24 22H16C16 24.2091 17.7909 26 20 26Z" fill="#3498db"/>
  </svg>
);

export default Logo;

