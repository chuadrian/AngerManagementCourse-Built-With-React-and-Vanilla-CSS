import React, { useState, useEffect } from 'react';

function ProblemSolving({ onNext, onPrev, isComplete, setComplete }) {
  const [problem, setProblem] = useState('');
  const [solutions, setSolutions] = useState(['', '', '']);
  const [selectedSolution, setSelectedSolution] = useState('');
  const [actionPlan, setActionPlan] = useState('');

  const handleSolutionChange = (index, value) => {
    const newSolutions = [...solutions];
    newSolutions[index] = value;
    setSolutions(newSolutions);
  };

  useEffect(() => {
    setComplete(problem.trim().length > 0 && selectedSolution && actionPlan.trim().length > 0);
  }, [problem, selectedSolution, actionPlan, setComplete]);

  return (
    <div className="step">
      <h2>Step 8: Problem-Solving Techniques</h2>
      <p>When faced with a situation that makes you angry, using a structured problem-solving approach can help you find constructive solutions.</p>
      
      <div className="problem-solving-exercise">
        <div className="input-group">
          <label htmlFor="problem">Identify the problem:</label>
          <textarea
            id="problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Describe the situation causing your anger..."
            rows="3"
          ></textarea>
        </div>

        <div className="input-group">
          <label>Brainstorm possible solutions:</label>
          {solutions.map((solution, index) => (
            <input
              key={index}
              type="text"
              value={solution}
              onChange={(e) => handleSolutionChange(index, e.target.value)}
              placeholder={`Solution ${index + 1}`}
            />
          ))}
        </div>

        <div className="input-group">
          <label htmlFor="selected-solution">Choose the best solution:</label>
          <select
            id="selected-solution"
            value={selectedSolution}
            onChange={(e) => setSelectedSolution(e.target.value)}
          >
            <option value="">Select a solution</option>
            {solutions.map((solution, index) => (
              <option key={index} value={solution}>{solution}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="action-plan">Create an action plan:</label>
          <textarea
            id="action-plan"
            value={actionPlan}
            onChange={(e) => setActionPlan(e.target.value)}
            placeholder="List the steps you'll take to implement your chosen solution..."
            rows="4"
          ></textarea>
        </div>
      </div>

      <div className="problem-solving-tips">
        <h3>Tips for Effective Problem-Solving:</h3>
        <ul>
          <li>Stay calm and approach the problem objectively</li>
          <li>Consider the pros and cons of each potential solution</li>
          <li>Be open to compromise and finding win-win solutions</li>
          <li>Break down complex problems into smaller, manageable parts</li>
          <li>Seek input from others if appropriate</li>
          <li>Be prepared to reassess and adjust your plan if needed</li>
        </ul>
      </div>

      <div className="button-group">
        <button></button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default ProblemSolving;

