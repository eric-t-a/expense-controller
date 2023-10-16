const SETCURWORKOUT = 'SETCURWORKOUT';
const SETALLWORKOUTS = 'SETALLWORKOUTS';
const SETWORKOUT = 'SETWORKOUT';
const SETSESSION = 'SETSESSION';


export function setCurrentWorkout(workout) {
  return {
        type: SETCURWORKOUT,
        current: workout
    }
}

export function setAllWorkouts(allWorkout) {
  return {
        type: SETALLWORKOUTS,
        others: allWorkout
    }
}

export function setWorkout(workout) {
  return {
        type: SETWORKOUT,
        workout
    }
}

export function setSelectedSession(session) {
  return {
        type: SETSESSION,
        selectedSession: session
    }
}

const defaultWorkout = {
  current: null,
  others: [],
  selectedSession: null
};

export default function workout(state=defaultWorkout, action) {
  switch (action.type) {
    case SETCURWORKOUT:
      return { current: action.current, others: state.others, selectedSession: state.selectedSession };
    case SETALLWORKOUTS:
      return { current: state.current, others: action.others, selectedSession: state.selectedSession };
    case SETWORKOUT:
      return { current: action.workout.current, others: action.workout.others, selectedSession: action.workout.selectedSession };
    case SETSESSION:
      return { current: state.current, others: state.others, selectedSession: action.selectedSession };
    default:
      return state;
  }
}
