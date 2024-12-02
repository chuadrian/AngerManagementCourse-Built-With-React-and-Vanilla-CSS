import React, { useState, useEffect } from 'react';

function AngerJournal({ onNext, onPrev, isComplete, setComplete }) {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ date: '', trigger: '', response: '', reflection: '' });

  useEffect(() => {
    setComplete(entries.length > 0);
  }, [entries, setComplete]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };

  const addEntry = () => {
    if (newEntry.date && newEntry.trigger && newEntry.response && newEntry.reflection) {
      setEntries([...entries, newEntry]);
      setNewEntry({ date: '', trigger: '', response: '', reflection: '' });
    }
  };

  return (
    <div className="step">
      <h2>Anger Journal</h2>
      <p>Keep track of your anger episodes to identify patterns and improve your responses:</p>
      
      <div className="journal-entry">
        <input
          type="date"
          name="date"
          value={newEntry.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="trigger"
          value={newEntry.trigger}
          onChange={handleInputChange}
          placeholder="What triggered your anger?"
          required
        />
        <input
          type="text"
          name="response"
          value={newEntry.response}
          onChange={handleInputChange}
          placeholder="How did you respond?"
          required
        />
        <textarea
          name="reflection"
          value={newEntry.reflection}
          onChange={handleInputChange}
          placeholder="Reflect on the situation and your response..."
          required
        ></textarea>
        <button onClick={addEntry}>Add Entry</button>
      </div>

      <div className="journal-entries">
        <h3>Previous Entries:</h3>
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <p><strong>Date:</strong> {entry.date}</p>
            <p><strong>Trigger:</strong> {entry.trigger}</p>
            <p><strong>Response:</strong> {entry.response}</p>
            <p><strong>Reflection:</strong> {entry.reflection}</p>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default AngerJournal;
