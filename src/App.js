import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import UsernameModal from './components/UsernameModal';
import IncompleteStepModal from './components/IncompleteStepModal';
import Introduction from './components/Introduction';
import AngerAwareness from './components/AngerAwareness';
import TriggerIdentification from './components/TriggerIdentification';
import PhysicalResponses from './components/PhysicalResponses';
import BreathingExercises from './components/BreathingExercises';
import ThoughtReframing from './components/ThoughtReframing';
import EmotionRegulation from './components/EmotionRegulation';
import CommunicationSkills from './components/CommunicationSkills';
import ProblemSolving from './components/ProblemSolving';
import StressManagement from './components/StressManagement';
import ActionPlan from './components/ActionPlan';
import CompletionScreen from './components/CompletionScreen';
import AboutContact from './components/AboutContact';
import QuickTherapy from './components/QuickTherapy';
import './styles.css';
import { fadeIn, fadeOut, slideIn } from './animations';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [username, setUsername] = useState('');
  const [showUsernameModal, setShowUsernameModal] = useState(true);
  const [showIncompleteModal, setShowIncompleteModal] = useState(false);
  const [stepCompletion, setStepCompletion] = useState(Array(11).fill(false));
  const [showQuickTherapy, setShowQuickTherapy] = useState(false);
  const [showAboutContact, setShowAboutContact] = useState(false);
  const totalSteps = 11;

  const steps = [
    Introduction,
    AngerAwareness,
    TriggerIdentification,
    PhysicalResponses,
    BreathingExercises,
    ThoughtReframing,
    EmotionRegulation,
    CommunicationSkills,
    ProblemSolving,
    StressManagement,
    ActionPlan
  ];

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    const storedStep = localStorage.getItem('currentStep');
    const storedCompletion = localStorage.getItem('stepCompletion');

    if (storedName) {
      setUsername(storedName);
      setShowUsernameModal(false);
    }

    if (storedStep) {
      setCurrentStep(parseInt(storedStep, 10));
    }

    if (storedCompletion) {
      setStepCompletion(JSON.parse(storedCompletion));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep);
    localStorage.setItem('stepCompletion', JSON.stringify(stepCompletion));
  }, [currentStep, stepCompletion]);

  const restartCourse = () => {
    setCurrentStep(0);
    setStepCompletion(Array(totalSteps).fill(false));
    localStorage.removeItem('currentStep');
    localStorage.removeItem('stepCompletion');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleUsernameSubmit = (name) => {
    setUsername(name);
    setShowUsernameModal(false);
    localStorage.setItem('username', name);
  };

  const updateStepCompletion = (stepIndex, isComplete) => {
    setStepCompletion(prev => {
      const newCompletion = [...prev];
      newCompletion[stepIndex] = isComplete;
      return newCompletion;
    });
  };

  const renderStep = () => {
    if (currentStep === totalSteps) {
      return <CompletionScreen username={username} />;
    }
    const StepComponent = steps[currentStep];
    return (
      <div className="step-container" ref={el => {
        if (el && fadeIn) {
          slideIn(el, 'left');
        }
      }}>
        <StepComponent 
          onNext={() => {
            if (stepCompletion[currentStep]) {
              nextStep();
            } else {
              setShowIncompleteModal(true);
            }
          }} 
          onPrev={prevStep}
          isComplete={stepCompletion[currentStep]}
          setComplete={(isComplete) => updateStepCompletion(currentStep, isComplete)}
        />
      </div>
    );
  };

  return (
    <div className="app-container">
      <Navbar 
        username={username} 
        onQuickTherapy={() => setShowQuickTherapy(true)}
        onRestartCourse={restartCourse}
      />
      <div className="app-content">
        <ProgressBar current={currentStep} total={totalSteps} />
        {renderStep()}
      </div>
      <UsernameModal 
        isOpen={showUsernameModal} 
        onClose={() => setShowUsernameModal(false)} 
        onSubmit={handleUsernameSubmit} 
      />
      <IncompleteStepModal 
        isOpen={showIncompleteModal} 
        onClose={() => setShowIncompleteModal(false)} 
        username={username} 
      />
      {showQuickTherapy && (
        <QuickTherapy onClose={() => setShowQuickTherapy(false)} />
      )}
      {showAboutContact && (
        <AboutContact onClose={() => setShowAboutContact(false)} />
      )}
    </div>
  );
}

export default App;


