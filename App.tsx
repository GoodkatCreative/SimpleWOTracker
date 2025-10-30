
import React, { useState, useMemo } from 'react';
import type { CompletionState } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { WORKOUT_A, WORKOUT_B } from './constants';
import { Workout } from './components/Workout';
import { DumbbellIcon } from './components/Icons';

type WorkoutID = 'A' | 'B';

const App: React.FC = () => {
  const [activeWorkout, setActiveWorkout] = useState<WorkoutID>('A');
  const [completionState, setCompletionState] = useLocalStorage<CompletionState>('workout-completion-state', {});

  const workoutData = activeWorkout === 'A' ? WORKOUT_A : WORKOUT_B;

  const allExerciseIds = useMemo(() => {
    const idsA = WORKOUT_A.supersets.flatMap(s => s.exercises.map(e => e.id));
    const idsB = WORKOUT_B.supersets.flatMap(s => s.exercises.map(e => e.id));
    return [...idsA, ...idsB];
  }, []);

  const handleToggleExercise = (exerciseId: string) => {
    setCompletionState(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId],
    }));
  };

  const handleResetWorkout = (exerciseIds: string[]) => {
    const newState = { ...completionState };
    exerciseIds.forEach(id => {
      newState[id] = false;
    });
    setCompletionState(newState);
  };
  
  const handleResetAll = () => {
      setCompletionState({});
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
                <DumbbellIcon className="w-8 h-8 text-blue-400"/>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Full-Body Workout Tracker
                </h1>
            </div>
            <p className="text-gray-400">Your 2x/week minimalist workout plan.</p>
        </header>

        <div className="bg-gray-800 rounded-xl p-2 mb-6 sm:mb-8 flex space-x-2">
          <button
            onClick={() => setActiveWorkout('A')}
            className={`w-full font-semibold py-3 rounded-lg transition-colors duration-300 ${activeWorkout === 'A' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
          >
            Workout A
          </button>
          <button
            onClick={() => setActiveWorkout('B')}
            className={`w-full font-semibold py-3 rounded-lg transition-colors duration-300 ${activeWorkout === 'B' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
          >
            Workout B
          </button>
        </div>

        <main>
          <Workout
            key={activeWorkout}
            workoutData={workoutData}
            completionState={completionState}
            onToggleExercise={handleToggleExercise}
            onResetWorkout={handleResetWorkout}
          />
        </main>

        <footer className="text-center mt-8">
          <button 
            onClick={handleResetAll}
            className="text-sm text-gray-500 hover:text-red-400 transition-colors duration-300"
          >
            Reset All Progress
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;
