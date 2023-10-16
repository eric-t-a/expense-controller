const SETSORT = 'SETSORT';



export function setSortBy(sort) {
  return {
        type: SETSORT,
        sort: sort
    }
}

const defaultSort = '';

export default function sort(state=defaultSort, action) {
  switch (action.type) {
    case SETSORT:
      return action.sort;
    default:
      return state;
  }
}
