import React, { useEffect, useRef } from 'react';
import { fadeIn, pulse } from '../animations';
import Certificate from './Certificate';

function CompletionScreen({ username }) {
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      fadeIn(messageRef.current, 1000);
    }
    if (buttonRef.current) {
      setTimeout(() => {
        fadeIn(buttonRef.current, 500);
        pulse(buttonRef.current, 1.1, 1000);
      }, 1000);
    }
  }, []);

  return (
    <div className="completion-screen">
      <h2>Congratulations, {username}!</h2>
      <div className="completion-message" ref={messageRef}>
        <p>You have completed the Comprehensive Anger Management Course.</p>
        <p>Remember, managing anger is an ongoing process. Continue to practice the techniques you've learned and refer back to this course whenever you need a refresher.</p>
        <p>Key takeaways:</p>
        <ul>
          <li>Recognize your anger triggers and physical responses</li>
          <li>Use breathing exercises and relaxation techniques</li>
          <li>Practice thought reframing and emotion regulation</li>
          <li>Improve your communication skills</li>
          <li>Apply problem-solving techniques to difficult situations</li>
          <li>Manage stress effectively</li>
          <li>Follow your personalized action plan</li>
        </ul>
        <p>If you find that you need additional support, don't hesitate to seek help from a mental health professional.</p>
      </div>
      <Certificate username={username} />
      <button className="restart-button" onClick={() => window.location.reload()} ref={buttonRef}>Restart Course</button>
    </div>
  );
}

export default CompletionScreen;





