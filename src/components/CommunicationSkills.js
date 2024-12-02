import React, { useState, useEffect } from 'react';

function CommunicationSkills({ onNext, onPrev, isComplete, setComplete }) {
  const [scenario, setScenario] = useState('');
  const [response, setResponse] = useState('');

  const scenarios = [
    "Your coworker takes credit for your work during a team meeting.",
    "Your partner forgets an important date that means a lot to you.",
    "A friend consistently shows up late when you make plans.",
    "Your neighbor's dog keeps barking late at night, disturbing your sleep.",
    "Someone cuts in front of you in a long queue at the store."
  ];

  const generateScenario = () => {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    setScenario(scenarios[randomIndex]);
    setResponse('');
  };

  useEffect(() => {
    setComplete(response.trim().length > 0);
  }, [response, setComplete]);

  return (
    <div className="step">
      <h2>Step 7: Effective Communication Skills</h2>
      <p>Practice expressing your feelings assertively using "I" statements. This helps communicate your emotions without blaming or attacking others.</p>
      
      <div className="communication-exercise">
        <button onClick={generateScenario}>Generate Random Scenario</button>
        {scenario && (
          <div className="scenario">
            <h3>Scenario:</h3>
            <p>{scenario}</p>
          </div>
        )}
        <div className="response">
          <h3>Your Response:</h3>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your response using 'I' statements. For example: 'I feel... when... because...'"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div className="communication-tips">
        <h3>Tips for Effective Communication:</h3>
        <ul>
          <li>Use "I" statements to express your feelings</li>
          <li>Avoid accusatory language or blame</li>
          <li>Be specific about the behavior that's bothering you</li>
          <li>Express your needs clearly</li>
          <li>Listen actively to the other person's perspective</li>
          <li>Stay calm and take deep breaths if you feel your anger rising</li>
        </ul>
      </div>

      <div className="button-group">
        <button></button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default CommunicationSkills;

