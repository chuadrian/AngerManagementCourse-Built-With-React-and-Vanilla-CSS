import React, { useState } from 'react';

function EmotionRegulation({ onNext, onPrev, isComplete, setComplete }) {
  const [selectedTechniques, setSelectedTechniques] = useState([]);
  const techniques = [
    "Count to 10 before reacting",
    "Take a timeout or walk away",
    "Use positive self-talk",
    "Visualize a calming scene",
    "Practice progressive muscle relaxation",
    "Listen to soothing music",
    "Write in a journal",
    "Exercise or do physical activity",
    "Talk to a supportive friend",
    "Use humor to diffuse the situation"
  ];

  const toggleTechnique = (technique) => {
    setSelectedTechniques(prev => {
      const updated = prev.includes(technique) 
        ? prev.filter(t => t !== technique)
        : [...prev, technique];
      setComplete(updated.length > 0);
      return updated;
    });
  };

  return (
    <div className="step">
      <h2>Step 6: Emotion Regulation Techniques</h2>
      <p>Select the emotion regulation techniques you'd like to try when feeling angry:</p>
      
      <div className="technique-list">
        {techniques.map((technique, index) => (
          <div key={index} className="technique-item">
            <input
              type="checkbox"
              id={`technique-${index}`}
              checked={selectedTechniques.includes(technique)}
              onChange={() => toggleTechnique(technique)}
            />
            <label htmlFor={`technique-${index}`}>{technique}</label>
          </div>
        ))}
      </div>

      <div className="selected-techniques">
        <h3>Your selected techniques:</h3>
        <ul>
          {selectedTechniques.map((technique, index) => (
            <li key={index}>{technique}</li>
          ))}
        </ul>
      </div>

      <div className="button-group">
        <button></button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default EmotionRegulation;

