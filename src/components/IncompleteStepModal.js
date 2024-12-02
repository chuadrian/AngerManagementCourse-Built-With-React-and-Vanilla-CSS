import React from 'react';

function IncompleteStepModal({ isOpen, onClose, username }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Hey now, {username}!</h2>
        <p>Let's not be hasty. Make sure you've completed all parts of this step before moving on.</p>
        <button onClick={onClose}>Got it</button>
      </div>
    </div>
  );
}

export default IncompleteStepModal;

