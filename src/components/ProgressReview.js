import React, { useState } from 'react';

function ProgressReview({ onNext, onPrev, isComplete, setComplete }) {
  const [review, setReview] = useState({
    improvements: '',
    challenges: '',
    nextSteps: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
    setComplete(Object.values({ ...review, [name]: value }).every(v => v.trim() !== ''));
  };

  return (
    <div className="step">
      <h2>Progress Review</h2>
      <p>Take a moment to reflect on your progress in the anger management course:</p>
      
      <div className="input-group">
        <label htmlFor="improvements">What improvements have you noticed in managing your anger?</label>
        <textarea
          id="improvements"
          name="improvements"
          value={review.improvements}
          onChange={handleInputChange}
          placeholder="List your improvements..."
        ></textarea>
      </div>

      <div className="input-group">
        <label htmlFor="challenges">What challenges are you still facing?</label>
        <textarea
          id="challenges"
          name="challenges"
          value={review.challenges}
          onChange={handleInputChange}
          placeholder="Describe your ongoing challenges..."
        ></textarea>
      </div>

      <div className="input-group">
        <label htmlFor="nextSteps">What are your next steps for continued improvement?</label>
        <textarea
          id="nextSteps"
          name="nextSteps"
          value={review.nextSteps}
          onChange={handleInputChange}
          placeholder="Outline your next steps..."
        ></textarea>
      </div>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default ProgressReview;
