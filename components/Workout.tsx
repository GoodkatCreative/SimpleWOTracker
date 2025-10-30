
import React from 'react';
import type { WorkoutPlan, CompletionState } from '../types';
import { Superset } from './Superset';
import { ResetIcon } from './Icons';

interface WorkoutProps {
  workoutData: WorkoutPlan;
  completionState: CompletionState;
  onToggleExercise: (exerciseId: string) => void;
  onResetWorkout: (exerciseIds: string[]) => void;
}

export const Workout: React.FC<WorkoutProps> = ({ workoutData, completionState, onToggleExercise, onResetWorkout }) => {
  const exerciseIds = workoutData.supersets.flatMap(s => s.exercises.map(e => e.id));
  const totalExercises = exerciseIds.length;
  const completedExercises = exerciseIds.filter(id => completionState[id]).length;
  const progress = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

  const handleResetClick = () => {
    if (window.confirm(`Are you sure you want to reset progress for ${workoutData.name}?`)) {
        onResetWorkout(exerciseIds);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <div>
            <h2 className="text-2xl font-bold text-white">{workoutData.name}</h2>
            <p className="text-sm text-blue-300">{workoutData.title}</p>
        </div>
        <button onClick={handleResetClick} className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-200">
            <ResetIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-300">Progress</span>
            <span className="text-sm font-medium text-gray-300">{completedExercises} / {totalExercises}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-green-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {workoutData.supersets.map((superset, index) => (
          <Superset
            key={index}
            superset={superset}
            completionState={completionState}
            onToggleExercise={onToggleExercise}
          />
        ))}
      </div>
    </div>
  );
};
