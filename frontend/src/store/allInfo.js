const SETALLINFO = 'SETALLINFO';
const SETFILTERED = 'SETFILTERED';



export function setAllInfo(allinfo) {
  return {
        type: SETALLINFO,
        allinfo: allinfo
    }
}

export function setFiltered(filtered) {
  return {
        type: SETFILTERED,
        filtered: filtered
    }
}

const defaultAllInfo = {
  allinfo: [],
  filtered: []
};

export default function allinfo(state=defaultAllInfo, action) {
  switch (action.type) {
    case SETALLINFO:
      return {allinfo: action.allinfo, filtered: state.filtered};
    case SETFILTERED:
      return {allinfo: state.allinfo, filtered: action.filtered};
    default:
      return state;
  }
}
