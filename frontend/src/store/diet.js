const SETEDITMODE = 'SETEDITMODE';
const SETCURRENT = 'SETCURRENT';
const SETOTHERS = 'SETOTHERS';


export function setEditMode(mode) {
  return {
    type: SETEDITMODE,
    editMode: mode
  }
}

export function setCurrentDiet(diet) {
  return {
    type: SETCURRENT,
    current: diet
  }
}

export function setOthersDiets(diets) {
  return {
    type: SETOTHERS,
    others: diets
  }
}


const defaultDiet = {
  editMode: false,
  current: null,
  others: []
};

export default function diet(state=defaultDiet, action) {
  switch (action.type) {
    case SETEDITMODE:
      return { editMode: action.editMode, current: state.current, others: state.others };
    case SETCURRENT:
      return { editMode: state.editMode, current: action.current, others: state.others };
    case SETOTHERS:
      return { editMode: state.editMode, current: state.current, others: action.others };
    default:
      return state;
  }
}
