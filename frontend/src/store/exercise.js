const SETALLEXERCISES = 'SETALLEXERCISES';


export function setAllExercises(allExercises) {
  return {
        type: SETALLEXERCISES,
        all: allExercises
    }
}


const defaultExercises = {
  all: [],
};

export default function exercise(state=defaultExercises, action) {
  switch (action.type) {
    case SETALLEXERCISES:
      return { all: action.all };
    default:
      return state;
  }
}
