import React, { useEffect, useRef } from 'react';

function ProgressBar({ current, total }) {
  const progressRef = useRef(null);
  const percentage = ((current + 1) / total) * 100;

  useEffect(() => {
    const progress = progressRef.current;
    progress.style.width = '0%';
    
    setTimeout(() => {
      progress.style.transition = 'width 0.5s ease-in-out';
      progress.style.width = `${percentage}%`;
    }, 100);
  }, [percentage]);

  return (
    <div className="progress-bar">
      <div className="progress" ref={progressRef}></div>
      <span className="progress-text">{`Step ${current + 1} of ${total}`}</span>
    </div>
  );
}

export default ProgressBar;



