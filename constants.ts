
import type { WorkoutPlan } from './types';

export const WORKOUT_A: WorkoutPlan = {
  id: 'A',
  name: 'Workout A',
  title: 'Push + Quads/Calves',
  supersets: [
    {
      title: 'Superset 1: Chest ↔ Back',
      exercises: [
        { id: 'a-chest-press', name: 'Chest Press Machine', setsReps: '3–4 × 8–12' },
        { id: 'a-seated-row-1', name: 'Seated Row', setsReps: '3 × 8–12' },
      ],
    },
    {
      title: 'Superset 2: Shoulders ↔ Lats',
      exercises: [
        { id: 'a-shoulder-press', name: 'Shoulder Press Machine', setsReps: '3 × 8–12' },
        { id: 'a-lat-pulldown', name: 'Lat Pulldown Machine', setsReps: '3 × 8–12' },
      ],
    },
    {
      title: 'Superset 3: Lateral Raise ↔ Rear Delt',
      exercises: [
        { id: 'a-lateral-raise', name: 'Lateral Raise Machine', setsReps: '3 × 12–15' },
        { id: 'a-rear-delt', name: 'Rear Delt Reverse Pec Deck', setsReps: '3 × 12–15' },
      ],
    },
    {
      title: 'Superset 4: Triceps ↔ Biceps',
      exercises: [
        { id: 'a-triceps-pushdown', name: 'Triceps Pushdown (Cable/Machine)', setsReps: '3 × 12–15' },
        { id: 'a-biceps-curl', name: 'Biceps Curl Machine', setsReps: '3 × 10–12' },
      ],
    },
    {
      title: 'Superset 5: Quads ↔ Hamstrings',
      exercises: [
        { id: 'a-leg-press', name: 'Leg Press (Quads focus)', setsReps: '3–4 × 10–15' },
        { id: 'a-leg-curl', name: 'Leg Curl Machine', setsReps: '3 × 12–15' },
      ],
    },
    {
      title: 'Superset 6: Leg Extension ↔ Optional Glute/Bridge',
      exercises: [
        { id: 'a-leg-extension', name: 'Leg Extension Machine', setsReps: '3 × 12–15' },
        { id: 'a-glute-bridge', name: '(Optional) Glute Bridge / Hip Thrust', setsReps: 'Bodyweight' },
      ],
    },
    {
      title: 'Superset 7: Calves ↔ Optional Tibialis',
      exercises: [
        { id: 'a-calf-raise', name: 'Calf Raise (Machine or Leg Press)', setsReps: '3 × 15–20' },
        { id: 'a-tibialis-raise', name: '(Optional) Tibialis Raise', setsReps: 'Bodyweight' },
      ],
    },
    {
      title: 'Optional Core',
      exercises: [
        { id: 'a-plank', name: 'Plank', setsReps: '3 × 30–60s' },
      ],
    },
  ],
};

export const WORKOUT_B: WorkoutPlan = {
  id: 'B',
  name: 'Workout B',
  title: 'Pull + Hams/Glutes',
  supersets: [
    {
      title: 'Superset 1: Back ↔ Chest',
      exercises: [
        { id: 'b-seated-row', name: 'Seated Row', setsReps: '3–4 × 8–12' },
        { id: 'b-chest-press', name: 'Chest Press Machine', setsReps: '3 × 8–12' },
      ],
    },
    {
      title: 'Superset 2: Lats ↔ Shoulders',
      exercises: [
        { id: 'b-lat-pulldown', name: 'Lat Pulldown', setsReps: '3–4 × 8–12' },
        { id: 'b-shoulder-press', name: 'Shoulder Press', setsReps: '3 × 8–12' },
      ],
    },
    {
      title: 'Superset 3: Rear Delt ↔ Lateral Raise',
      exercises: [
        { id: 'b-rear-delt', name: 'Rear Delt Reverse Pec Deck', setsReps: '3 × 12–15' },
        { id: 'b-lateral-raise', name: 'Lateral Raise Machine', setsReps: '3 × 12–15' },
      ],
    },
    {
      title: 'Superset 4: Biceps ↔ Triceps',
      exercises: [
        { id: 'b-biceps-curl', name: 'Biceps Curl Machine', setsReps: '3 × 10–12' },
        { id: 'b-triceps-pushdown', name: 'Triceps Pushdown', setsReps: '3 × 12–15' },
      ],
    },
    {
      title: 'Superset 5: Hamstrings ↔ Quads',
      exercises: [
        { id: 'b-leg-curl', name: 'Leg Curl Machine', setsReps: '3 × 12–15' },
        { id: 'b-leg-extension', name: 'Leg Extension Machine', setsReps: '3 × 12–15' },
      ],
    },
    {
      title: 'Superset 6: Glutes ↔ Leg Press',
      exercises: [
        { id: 'b-hip-thrust', name: '(Optional) Hip Thrust or Glute Bridge', setsReps: 'Bodyweight' },
        { id: 'b-leg-press', name: 'Leg Press', setsReps: '3–4 × 10–15' },
      ],
    },
    {
      title: 'Superset 7: Lower Back ↔ Core',
      exercises: [
        { id: 'b-back-extensions', name: 'Back Extensions', setsReps: '3 × 12–15' },
        { id: 'b-plank-crunch', name: 'Plank / Cable Crunch', setsReps: '3 × 12–15' },
      ],
    },
  ],
};

export const ALL_WORKOUTS = [WORKOUT_A, WORKOUT_B];
