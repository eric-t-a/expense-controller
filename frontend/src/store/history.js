const SETHISTORY = 'SETHISTORY';


export function setWorkoutHistory(history) {
  return {
        type: SETHISTORY,
        exercises: history.exercises
    }
}


const defaultHistory = {
  exercises: []
};

export default function history(state=defaultHistory, action) {
  switch (action.type) {
    case SETHISTORY:
      return { exercises: action.exercises };
    default:
      return state;
  }
}
