import React, { useState, useEffect } from 'react';

function Introduction({ onNext, isComplete, setComplete }) {
  const [hasReadIntroduction, setHasReadIntroduction] = useState(false);

  useEffect(() => {
    if (hasReadIntroduction) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [hasReadIntroduction, setComplete]);

  return (
    <div className="step">
      <h2>Introduction to Anger Management</h2>
      <p>Welcome to our comprehensive anger management course. This program is designed to help you understand, control, and effectively manage your anger. By the end of this course, you'll have a toolkit of strategies to handle anger in a healthy way.</p>
      
      <h3>Course Overview</h3>
      <p>Throughout this course, you'll learn various techniques and strategies to:</p>
      <ul>
        <li>Recognize anger triggers and early warning signs</li>
        <li>Understand the physical and emotional responses to anger</li>
        <li>Practice relaxation and mindfulness techniques</li>
        <li>Reframe negative thoughts and cognitive distortions</li>
        <li>Improve communication skills, especially in conflict situations</li>
        <li>Develop problem-solving abilities to address underlying issues</li>
        <li>Manage stress effectively to reduce overall anger levels</li>
        <li>Create a personalized anger management action plan</li>
      </ul>

      <h3>The Importance of Anger Management</h3>
      <p>Anger is a normal human emotion, but when it becomes frequent or intense, it can lead to problems in your personal relationships, work life, and overall well-being. Learning to manage anger effectively can:</p>
      <ul>
        <li>Improve your physical health by reducing stress on your body</li>
        <li>Enhance your mental health and emotional well-being</li>
        <li>Strengthen your relationships with family, friends, and colleagues</li>
        <li>Increase your productivity and success in work or school</li>
        <li>Help you make better decisions and avoid regrettable actions</li>
      </ul>

      <h3>Course Structure</h3>
      <p>This course is divided into several interactive modules. Each module focuses on a specific aspect of anger management and includes practical exercises to help you apply what you've learned. Remember, managing anger is a skill that can be learned and improved with practice. Let's begin this journey together!</p>

      <div className="checkbox-container">
        <label>
          <input 
            type="checkbox" 
            checked={hasReadIntroduction}
            onChange={(e) => setHasReadIntroduction(e.target.checked)}
          />
          I have read and understood the introduction
        </label>
      </div>

      <button className="next-button" onClick={onNext} disabled={!isComplete}>Start Course</button>
    </div>
  );
}

export default Introduction;

