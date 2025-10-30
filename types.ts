
export interface Exercise {
  id: string;
  name: string;
  setsReps: string;
}

// Using a tuple to enforce that a superset has 1 or 2 exercises.
export interface Superset {
  title: string;
  exercises: [Exercise] | [Exercise, Exercise];
}

export interface WorkoutPlan {
  id: 'A' | 'B';
  name: string;
  title: string;
  supersets: Superset[];
}

export type CompletionState = Record<string, boolean>;
