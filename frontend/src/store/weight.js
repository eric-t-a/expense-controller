const SETWEIGHTS = 'SETWEIGHTS';
const SETPATIENTWEIGHTS = 'SETPATIENTWEIGHTS';



export function setWeights(weight) {
  return {
        type: SETWEIGHTS,
        all: weight
    }
}

export function setPatientWeights(weight) {
  return {
        type: SETPATIENTWEIGHTS,
        patient: weight
    }
}

const defaulWeight = {
  all: [],
  patient: [],
};

export default function weight(state=defaulWeight, action) {
  switch (action.type) {
    case SETWEIGHTS:
      return { all: action.all, patient: state.patient };
    case SETPATIENTWEIGHTS:
      return { all: state.all, patient: action.patient };
    default:
      return state;
  }
}
