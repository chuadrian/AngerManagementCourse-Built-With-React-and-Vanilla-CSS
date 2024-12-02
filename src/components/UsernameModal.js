import React, { useState } from 'react';

function UsernameModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
      localStorage.setItem('username', name);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Welcome to MindfulMend!</h2>
        <p>We're excited to join you on your journey to better anger management. To get started, could you please tell us your name?</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <button type="submit">Let's Begin</button>
        </form>
      </div>
    </div>
  );
}

export default UsernameModal;

