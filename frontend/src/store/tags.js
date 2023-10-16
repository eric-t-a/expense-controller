const SETALLTAGS = 'SETALLTAGS';



export function setAllTags(tags) {
  return {
        type: SETALLTAGS,
        tags: tags
    }
}

const defaultTags = [];

export default function tags(state=defaultTags, action) {
  switch (action.type) {
    case SETALLTAGS:
      return action.tags;
    default:
      return state;
  }
}
