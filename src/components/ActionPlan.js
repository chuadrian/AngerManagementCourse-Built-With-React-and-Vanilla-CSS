import React, { useState, useEffect } from 'react';

function ActionPlan({ onNext, onPrev, isComplete, setComplete }) {
  const [goals, setGoals] = useState(['', '', '']);
  const [strategies, setStrategies] = useState(['', '', '']);
  const [supportSystem, setSupportSystem] = useState(['', '', '']);

  const handleGoalChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  const handleStrategyChange = (index, value) => {
    const newStrategies = [...strategies];
    newStrategies[index] = value;
    setStrategies(newStrategies);
  };

  const handleSupportChange = (index, value) => {
    const newSupport = [...supportSystem];
    newSupport[index] = value;
    setSupportSystem(newSupport);
  };

  useEffect(() => {
    const hasGoals = goals.some(goal => goal.trim().length > 0);
    const hasStrategies = strategies.some(strategy => strategy.trim().length > 0);
    const hasSupport = supportSystem.some(support => support.trim().length > 0);
    setComplete(hasGoals && hasStrategies && hasSupport);
  }, [goals, strategies, supportSystem, setComplete]);

  return (
    <div className="step">
      <h2>Step 10: Create Your Action Plan</h2>
      <p>Develop a personalized action plan to manage your anger effectively in the future.</p>
      
      <div className="action-plan">
        <div className="input-group">
          <h3>Set Anger Management Goals:</h3>
          {goals.map((goal, index) => (
            <input
              key={index}
              type="text"
              value={goal}
              onChange={(e) => handleGoalChange(index, e.target.value)}
              placeholder={`Goal ${index + 1}`}
            />
          ))}
        </div>

        <div className="input-group">
          <h3>Identify Key Strategies:</h3>
          {strategies.map((strategy, index) => (
            <input
              key={index}
              type="text"
              value={strategy}
              onChange={(e) => handleStrategyChange(index, e.target.value)}
              placeholder={`Strategy ${index + 1}`}
            />
          ))}
        </div>

        <div className="input-group">
          <h3>Build Your Support System:</h3>
          {supportSystem.map((support, index) => (
            <input
              key={index}
              type="text"
              value={support}
              onChange={(e) => handleSupportChange(index, e.target.value)}
              placeholder={`Support ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="action-plan-tips">
        <h3>Tips for a Successful Action Plan:</h3>
        <ul>
          <li>Make your goals specific, measurable, achievable, relevant, and time-bound (SMART)</li>
          <li>Review and update your plan regularly</li>
          <li>Celebrate small victories and progress</li>
          <li>Be patient with yourself - change takes time</li>
          <li>Seek professional help if you need additional support</li>
        </ul>
      </div>

      <div className="button-group">
        <button></button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Complete Course</button>
      </div>
    </div>
  );
}

export default ActionPlan;

