import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [equipment, setEquipment] = useState('');
  const [routine, setRoutine] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/generate_routine', {
        goal,
        experience,
        equipment
      });
      setRoutine(response.data.routine);
    } catch (error) {
      console.error('Error fetching routine:', error);
    }
  };

  return (
    <div className="App">
      <h1>RepSmith - AI Workout Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fitness Goal (e.g. strength)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Experience Level (e.g. beginner)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Available Equipment (e.g. dumbbells)"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        />
        <button type="submit">Generate Routine</button>
      </form>

      {routine && (
        <div className="routine-output">
          <h2>Your Routine:</h2>
          <pre>{routine}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
