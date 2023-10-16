const SETFILTER = 'SETFILTER';



export function setFilterBy(filter) {
  return {
        type: SETFILTER,
        filter: filter
    }
}

const defaultFilter = {type: '', name: ''};

export default function filter(state=defaultFilter, action) {
  switch (action.type) {
    case SETFILTER:
      return action.filter;
    default:
      return state;
  }
}
