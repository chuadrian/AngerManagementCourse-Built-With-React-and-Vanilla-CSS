import React, { useState, useEffect } from 'react';

function MindfulnessExercises({ onNext, onPrev, isComplete, setComplete }) {
  const [selectedExercise, setSelectedExercise] = useState('');
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsActive(false);
  };

  const handleExerciseChange = (e) => {
    setSelectedExercise(e.target.value);
    setComplete(true);
  };

  return (
    <div className="step">
      <h2>Mindfulness Exercises</h2>
      <p>Select a mindfulness exercise to practice:</p>
      
      <select value={selectedExercise} onChange={handleExerciseChange}>
        <option value="">Choose an exercise</option>
        <option value="breathing">Deep Breathing</option>
        <option value="bodyScanning">Body Scanning</option>
        <option value="visualization">Visualization</option>
      </select>

      {selectedExercise && (
        <div className="mindfulness-exercise">
          <h3>{selectedExercise === 'breathing' ? 'Deep Breathing' : selectedExercise === 'bodyScanning' ? 'Body Scanning' : 'Visualization'}</h3>
          <p>{selectedExercise === 'breathing' ? 
            'Focus on your breath. Inhale deeply for 4 seconds, hold for 4 seconds, then exhale for 4 seconds.' :
            selectedExercise === 'bodyScanning' ?
            'Start from your toes and slowly move your attention up through your body, noticing any sensations.' :
            'Imagine a peaceful place. Visualize the details - what you see, hear, smell, and feel.'}
          </p>
          <div className="timer">
            <p>Timer: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</p>
            <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      )}

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default MindfulnessExercises;
