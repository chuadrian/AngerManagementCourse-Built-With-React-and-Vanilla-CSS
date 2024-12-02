import React, { useState, useEffect } from 'react';

function ThoughtReframing({ onNext, onPrev, isComplete, setComplete }) {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState({ negative: '', positive: '' });

  const addThought = () => {
    if (newThought.negative.trim() !== '' && newThought.positive.trim() !== '') {
      const updatedThoughts = [...thoughts, newThought];
      setThoughts(updatedThoughts);
      setNewThought({ negative: '', positive: '' });
      setComplete(true);
    }
  };

  useEffect(() => {
    setComplete(thoughts.length > 0);
  }, [thoughts, setComplete]);

  return (
    <div className="step">
      <h2>Step 5: Thought Reframing</h2>
      <p>Negative thoughts often fuel anger. Practice reframing negative thoughts into more positive or neutral ones:</p>
      
      <div className="thought-reframing">
        <input
          type="text"
          value={newThought.negative}
          onChange={(e) => setNewThought({ ...newThought, negative: e.target.value })}
          placeholder="Enter a negative thought"
        />
        <input
          type="text"
          value={newThought.positive}
          onChange={(e) => setNewThought({ ...newThought, positive: e.target.value })}
          placeholder="Reframe it positively"
        />
        <button onClick={addThought}>Add Thought</button>
      </div>

      <table className="thought-table">
        <thead>
          <tr>
            <th>Negative Thought</th>
            <th>Positive Reframe</th>
          </tr>
        </thead>
        <tbody>
          {thoughts.map((thought, index) => (
            <tr key={index} className="thought-row">
              <td>{thought.negative}</td>
              <td>{thought.positive}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default ThoughtReframing;





