import React, { useState, useEffect } from 'react';

function SupportNetwork({ onNext, onPrev, isComplete, setComplete }) {
  const [supporters, setSupporters] = useState([]);
  const [newSupporter, setNewSupporter] = useState({ name: '', relationship: '', contact: '' });

  useEffect(() => {
    setComplete(supporters.length >= 2);
  }, [supporters, setComplete]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupporter(prev => ({ ...prev, [name]: value }));
  };

  const addSupporter = () => {
    if (newSupporter.name && newSupporter.relationship && newSupporter.contact) {
      setSupporters([...supporters, newSupporter]);
      setNewSupporter({ name: '', relationship: '', contact: '' });
    }
  };

  return (
    <div className="step">
      <h2>Building Your Support Network</h2>
      <p>Identify people who can support you in your anger management journey:</p>
      
      <div className="supporter-form">
        <input
          type="text"
          name="name"
          value={newSupporter.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="relationship"
          value={newSupporter.relationship}
          onChange={handleInputChange}
          placeholder="Relationship"
          required
        />
        <input
          type="text"
          name="contact"
          value={newSupporter.contact}
          onChange={handleInputChange}
          placeholder="Contact Information"
          required
        />
        <button onClick={addSupporter}>Add Supporter</button>
      </div>

      <div className="supporters-list">
        <h3>Your Support Network:</h3>
        {supporters.map((supporter, index) => (
          <div key={index} className="supporter">
            <p><strong>Name:</strong> {supporter.name}</p>
            <p><strong>Relationship:</strong> {supporter.relationship}</p>
            <p><strong>Contact:</strong> {supporter.contact}</p>
          </div>
        ))}
      </div>

      {supporters.length < 2 && (
        <p className="supporter-requirement">Please add at least {2 - supporters.length} more supporter(s) to proceed.</p>
      )}

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default SupportNetwork;




