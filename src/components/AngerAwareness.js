import React, { useState, useEffect } from 'react';

function AngerAwareness({ onNext, onPrev, isComplete, setComplete }) {
  const [angerSigns, setAngerSigns] = useState({
    physical: '',
    emotional: '',
    behavioral: ''
  });

  useEffect(() => {
    const isStepComplete = Object.values(angerSigns).every(sign => sign.trim() !== '');
    setComplete(isStepComplete);
  }, [angerSigns, setComplete]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAngerSigns(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="step">
      <h2>Step 1: Anger Awareness</h2>
      <p>Recognizing the signs of anger is the first step in managing it. Reflect on how anger manifests in your life:</p>
      
      <div className="input-group">
        <label htmlFor="physical">Physical signs (e.g., increased heart rate, muscle tension):</label>
        <textarea
          id="physical"
          name="physical"
          value={angerSigns.physical}
          onChange={handleInputChange}
          placeholder="List your physical signs of anger..."
        ></textarea>
      </div>

      <div className="input-group">
        <label htmlFor="emotional">Emotional signs (e.g., frustration, resentment):</label>
        <textarea
          id="emotional"
          name="emotional"
          value={angerSigns.emotional}
          onChange={handleInputChange}
          placeholder="List your emotional signs of anger..."
        ></textarea>
      </div>

      <div className="input-group">
        <label htmlFor="behavioral">Behavioral signs (e.g., shouting, slamming doors):</label>
        <textarea
          id="behavioral"
          name="behavioral"
          value={angerSigns.behavioral}
          onChange={handleInputChange}
          placeholder="List your behavioral signs of anger..."
        ></textarea>
      </div>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default AngerAwareness;

