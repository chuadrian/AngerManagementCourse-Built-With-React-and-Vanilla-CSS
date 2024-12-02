import React, { useState, useEffect } from 'react';

function StressManagement({ onNext, onPrev, isComplete, setComplete }) {
  const [stressors, setStressors] = useState(['', '', '']);
  const [copingStrategies, setCopingStrategies] = useState(['', '', '']);

  const handleStressorChange = (index, value) => {
    const newStressors = [...stressors];
    newStressors[index] = value;
    setStressors(newStressors);
  };

  const handleStrategyChange = (index, value) => {
    const newStrategies = [...copingStrategies];
    newStrategies[index] = value;
    setCopingStrategies(newStrategies);
  };

  useEffect(() => {
     const hasStressors = stressors.some(stressor => stressor.trim().length > 0);
     const hasStrategies = copingStrategies.some(strategy => strategy.trim().length > 0);
     setComplete(hasStressors && hasStrategies);
   }, [stressors, copingStrategies, setComplete]);

  return (
    <div className="step">
      <h2>Step 9: Stress Management</h2>
      <p>Managing stress is crucial for controlling anger. Identify your main stressors and develop coping strategies to reduce overall stress levels.</p>
      
      <div className="stress-management-exercise">
        <div className="input-group">
          <h3>Identify Your Top Stressors:</h3>
          {stressors.map((stressor, index) => (
            <input
              key={index}
              type="text"
              value={stressor}
              onChange={(e) => handleStressorChange(index, e.target.value)}
              placeholder={`Stressor ${index + 1}`}
            />
          ))}
        </div>

        <div className="input-group">
          <h3>Develop Coping Strategies:</h3>
          {copingStrategies.map((strategy, index) => (
            <input
              key={index}
              type="text"
              value={strategy}
              onChange={(e) => handleStrategyChange(index, e.target.value)}
              placeholder={`Coping Strategy ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="stress-management-tips">
        <h3>Stress Management Techniques:</h3>
        <ul>
          <li>Practice regular exercise or physical activity</li>
          <li>Maintain a healthy sleep schedule</li>
          <li>Use relaxation techniques like meditation or yoga</li>
          <li>Engage in hobbies or activities you enjoy</li>
          <li>Set realistic goals and prioritize tasks</li>
          <li>Practice time management skills</li>
          <li>Maintain a balanced diet and stay hydrated</li>
          <li>Limit caffeine and alcohol intake</li>
          <li>Seek support from friends, family, or a professional</li>
        </ul>
      </div>

      <div className="button-group">
        <button></button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default StressManagement;

