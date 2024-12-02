import React, { useState, useEffect, useRef } from 'react';

function BreathingExercises({ onNext, onPrev, isComplete, setComplete }) {
  const [isBreathing, setIsBreathing] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [phase, setPhase] = useState('');
  const circleRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (isBreathing) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        const currentSecond = seconds % 16;
        if (currentSecond === 0) {
          setPhase('Inhale');
          animateCircle(1.2);
        } else if (currentSecond === 4) {
          setPhase('Hold');
        } else if (currentSecond === 8) {
          setPhase('Exhale');
          animateCircle(1);
        } else if (currentSecond === 12) {
          setPhase('Hold');
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isBreathing, seconds]);

  useEffect(() => {
    setComplete(seconds > 0);
  }, [seconds, setComplete]);

  const animateCircle = (scale) => {
    if (circleRef.current) {
      circleRef.current.style.transform = `scale(${scale})`;
    }
  };

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
    if (!isBreathing) {
      setSeconds(0);
      setPhase('Inhale');
      animateCircle(1.2);
    } else {
      animateCircle(1);
    }
  };

  return (
    <div className="step">
      <h2>Step 4: Practice Deep Breathing</h2>
      <p>Deep breathing is an effective technique to calm your mind and body when feeling angry. Follow this 4-4-4-4 breathing pattern:</p>
      
      <div className="breathing-exercise">
        <div className="breathing-circle" ref={circleRef}>
          <span>{phase}</span>
        </div>
        <p>Time: {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}</p>
        <button onClick={toggleBreathing}>{isBreathing ? 'Stop' : 'Start'} Breathing Exercise</button>
      </div>

      <ol>
        <li>Inhale deeply through your nose for 4 seconds</li>
        <li>Hold your breath for 4 seconds</li>
        <li>Exhale slowly through your mouth for 4 seconds</li>
        <li>Hold your breath for 4 seconds</li>
        <li>Repeat the cycle</li>
      </ol>

      <div className="button-group">
        <button className="prev-button" onClick={onPrev}>Previous</button>
        <button className="next-button" onClick={onNext} disabled={!isComplete}>Next</button>
      </div>
    </div>
  );
}

export default BreathingExercises;

