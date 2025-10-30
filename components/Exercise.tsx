
import React from 'react';
import type { Exercise as ExerciseType } from '../types';
import { CheckIcon } from './Icons';

interface ExerciseProps {
  exercise: ExerciseType;
  isCompleted: boolean;
  onToggle: (exerciseId: string) => void;
}

export const Exercise: React.FC<ExerciseProps> = ({ exercise, isCompleted, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(exercise.id)}
      className={`
        flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out
        ${isCompleted ? 'bg-green-900/50 text-gray-500' : 'bg-gray-700/50 hover:bg-gray-700'}
      `}
    >
      <div className="flex-shrink-0 w-6 h-6 mr-4 flex items-center justify-center border-2 rounded-md transition-all duration-300
        ${isCompleted ? 'bg-green-500 border-green-500' : 'border-gray-500'}"
      >
        {isCompleted && <CheckIcon className="w-4 h-4 text-white" />}
      </div>
      <div className="flex-grow">
        <p className={`font-medium ${isCompleted ? 'line-through' : 'text-gray-100'}`}>{exercise.name}</p>
        <p className={`text-sm ${isCompleted ? 'line-through' : 'text-gray-400'}`}>{exercise.setsReps}</p>
      </div>
    </div>
  );
};
