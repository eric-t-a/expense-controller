const SETTIMER = 'SETTIMER';
const SETTIMERCOUNT = 'SETTIMERCOUNT';
const SETTIMERPAUSE = 'SETTIMERPAUSE';
const SETTIMERMINIMIZED = 'SETTIMERMINIMIZED';


export function setTimerState(timer) {
  return {
        type: SETTIMER,
        timer
    }
}

export function setTimerCount(timer) {
  return {
        type: SETTIMERCOUNT,
        timer
    }
}

export function setTimerPause(timer) {
  return {
        type: SETTIMERPAUSE,
        timer
    }
}

export function setTimerMinimized(timer) {
  return {
        type: SETTIMERMINIMIZED,
        timer
    }
}

const defaultTimer = {
  isShowing: false,
  count: 0,
  isPaused: true,
  isMinimized: true
};

export default function timer(state=defaultTimer, action) {
  switch (action.type) {
    case SETTIMER:
      return { isShowing: action.timer, count: state.count, isPaused: state.isPaused, isMinimized: state.isMinimized };
    case SETTIMERCOUNT:
      return { isShowing: state.isShowing, count: action.timer, isPaused: state.isPaused, isMinimized: state.isMinimized };
    case SETTIMERPAUSE:
      return { isShowing: state.isShowing, count: state.count, isPaused: action.timer, isMinimized: state.isMinimized };
    case SETTIMERMINIMIZED:
      return { isShowing: state.isShowing, count: state.count, isPaused: state.isPaused, isMinimized: action.timer };
    default:
      return state;
  }
}
