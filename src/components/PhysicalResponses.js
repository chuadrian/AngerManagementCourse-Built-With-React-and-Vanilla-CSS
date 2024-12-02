import React, { useState, useEffect } from 'react';

function PhysicalResponses({ onNext, onPrev, isComplete, setComplete }) {
  const [bodyMap, setBodyMap] = useState({
    head: false,
    chest: false,
    stomach: false,
    hands: false,
    legs: false
  });

  const toggleBodyPart = (part) => {
    setBodyMap(prev => ({ ...prev, [part]: !prev[part] }));
  };

  useEffect(() => {
    const anyPartSelected = Object.values(bodyMap).some(value => value);
    setComplete(anyPartSelected);
  }, [bodyMap, setComplete]);

  return (
    <div className="step">
      <h2>Step 3: Understand Your Physical Responses to Anger</h2>
      <p>Anger often manifests in physical sensations. Click on the body parts where you typically feel anger:</p>
      
      <div className="body-map">
        <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="30" r="20" className={bodyMap.head ? 'active' : ''} onClick={() => toggleBodyPart('head')} />
          <rect x="40" y="50" width="20" height="40" className={bodyMap.chest ? 'active' : ''} onClick={() => toggleBodyPart('chest')} />
          <circle cx="50" cy="110" r="20" className={bodyMap.stomach ? 'active' : ''} onClick={() => toggleBodyPart('stomach')} />
          <rect x="30" y="130" width="15" height="40" className={bodyMap.hands ? 'active' : ''} onClick={() => toggleBodyPart('hands')} />
          <rect x="55" y="130" width="15" height="40" className={bodyMap.hands ? 'active' : ''} onClick={() => toggleBodyPart('hands')} />
          <rect x="40" y="170" width="10" height="30" className={bodyMap.legs ? 'active' : ''} onClick={() => toggleBodyPart('legs')} />
          <rect x="50" y="170" width="10" height="30" className={bodyMap.legs ? 'active' : ''} onClick={() => toggleBodyPart('legs')} />
        </svg>
      </div>

      <div className="selected-body-parts">
        <h3>Selected body parts:</h3>
        <ul>
          {Object.entries(bodyMap).map(([part, isActive]) => (
            isActive && <li key={part}>{part.charAt(0).toUpperCase() + part.slice(1)}</li>
          ))}
        </ul>
      </div>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default PhysicalResponses;

