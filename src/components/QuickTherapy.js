import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const breathingExercise = {
  title: 'Deep Breathing',
  instructions: 'Breathe in for 4 seconds, hold for 4 seconds, exhale for 4 seconds. Repeat.',
  duration: 60,
};

const guidedImagery = {
  title: 'Guided Imagery',
  instructions: 'Close your eyes and imagine a peaceful place. Focus on the details and sensations.',
  duration: 120,
};

const progressiveRelaxation = {
  title: 'Progressive Muscle Relaxation',
  instructions: 'Tense and then relax each muscle group in your body, starting from your toes and moving up.',
  duration: 180,
};

const QuickTherapy = ({ onClose }) => {
  const [currentExercise, setCurrentExercise] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timer;
    if (currentExercise && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [currentExercise, timeLeft]);

  const startExercise = (exercise) => {
    setCurrentExercise(exercise);
    setTimeLeft(exercise.duration);
  };

  return (
    <div className="quick-therapy-modal">
      <div className="quick-therapy-content">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Quick Therapy</h2>
        {!currentExercise ? (
          <div className="exercise-list">
            <button onClick={() => startExercise(breathingExercise)}>Deep Breathing</button>
            <button onClick={() => startExercise(guidedImagery)}>Guided Imagery</button>
            <button onClick={() => startExercise(progressiveRelaxation)}>Progressive Muscle Relaxation</button>
          </div>
        ) : (
          <div className="exercise-in-progress">
            <h3>{currentExercise.title}</h3>
            <p>{currentExercise.instructions}</p>
            <div className="timer">Time left: {timeLeft} seconds</div>
            <button onClick={() => setCurrentExercise(null)}>Stop Exercise</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickTherapy;

