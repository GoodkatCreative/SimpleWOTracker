
import React from 'react';
import type { Superset as SupersetType, CompletionState } from '../types';
import { Exercise as ExerciseComponent } from './Exercise';
import { LinkIcon } from './Icons';

interface SupersetProps {
  superset: SupersetType;
  completionState: CompletionState;
  onToggleExercise: (exerciseId: string) => void;
}

export const Superset: React.FC<SupersetProps> = ({ superset, completionState, onToggleExercise }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-400 mb-3 border-b border-gray-700 pb-2">{superset.title}</h3>
      <div className="relative pl-5">
        {superset.exercises.length > 1 && (
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center w-5">
              <div className="w-px h-full bg-gray-600"></div>
              <LinkIcon className="w-5 h-5 text-blue-500 absolute top-1/2 -translate-y-1/2 bg-gray-800" />
          </div>
        )}
        <div className="space-y-2">
            {superset.exercises.map((exercise) => (
            <ExerciseComponent
                key={exercise.id}
                exercise={exercise}
                isCompleted={!!completionState[exercise.id]}
                onToggle={onToggleExercise}
            />
            ))}
        </div>
      </div>
    </div>
  );
};
