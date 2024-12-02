import React, { useState } from 'react';

function TriggerIdentification({ onNext, onPrev, isComplete, setComplete }) {
  const [triggers, setTriggers] = useState([]);
  const [newTrigger, setNewTrigger] = useState('');

  const addTrigger = () => {
    if (newTrigger.trim() !== '') {
      const updatedTriggers = [...triggers, newTrigger.trim()];
      setTriggers(updatedTriggers);
      setNewTrigger('');
      setComplete(updatedTriggers.length > 0);
    }
  };

  const removeTrigger = (index) => {
    const updatedTriggers = triggers.filter((_, i) => i !== index);
    setTriggers(updatedTriggers);
    setComplete(updatedTriggers.length > 0);
  };

  return (
    <div className="step">
      <h2>Step 2: Identify Your Anger Triggers</h2>
      <p>Recognizing what triggers your anger is crucial for managing it effectively. List situations, people, or events that often trigger your anger:</p>
      
      <div className="input-group">
        <input
          type="text"
          value={newTrigger}
          onChange={(e) => setNewTrigger(e.target.value)}
          placeholder="Enter an anger trigger"
        />
        <button onClick={addTrigger}>Add Trigger</button>
      </div>

      <ul className="trigger-list">
        {triggers.map((trigger, index) => (
          <li key={index}>
            {trigger}
            <button onClick={() => removeTrigger(index)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default TriggerIdentification;

