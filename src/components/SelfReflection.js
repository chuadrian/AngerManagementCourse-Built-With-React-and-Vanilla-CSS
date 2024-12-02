import React, { useState } from 'react';

function SelfReflection({ onNext, onPrev, isComplete, setComplete }) {
  const [reflections, setReflections] = useState({
    strengths: '',
    weaknesses: '',
    goals: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReflections(prev => ({ ...prev, [name]: value }));
    setComplete(Object.values({ ...reflections, [name]: value }).every(v => v.trim() !== ''));
  };

  return (
    <div className="step">
      <h2>Self-Reflection</h2>
      <p>Take a moment to reflect on your anger management journey:</p>
      
      <div className="input-group">
        <label htmlFor="strengths">What are your strengths in managing anger?</label>
        <textarea
          id="strengths"
          name="strengths"
          value={reflections.strengths}
          onChange={handleInputChange}
          placeholder="List your strengths..."
        ></textarea>
      </div>

      <div className="input-group">
        <label htmlFor="weaknesses">What areas do you need to improve?</label>
        <textarea
          id="weaknesses"
          name="weaknesses"
          value={reflections.weaknesses}
          onChange={handleInputChange}
          placeholder="List areas for improvement..."
        ></textarea>
      </div>

      <div className="input-group">
        <label htmlFor="goals">What are your anger management goals?</label>
        <textarea
          id="goals"
          name="goals"
          value={reflections.goals}
          onChange={handleInputChange}
          placeholder="List your goals..."
        ></textarea>
      </div>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default SelfReflection;
