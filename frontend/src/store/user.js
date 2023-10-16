const SETUSER = 'SETUSER';



export function setUserData(user) {
  return {
        type: SETUSER,
        user: user
    }
}

const defaultUser = {

};

export default function user(state=defaultUser, action) {
  switch (action.type) {
    case SETUSER:
      return { user: action.user };
    default:
      return state;
  }
}
