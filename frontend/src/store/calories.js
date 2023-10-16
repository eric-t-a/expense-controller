import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

const SETDAILYCALORIES = 'SETDAILYCALORIES';
const SETALLFOODS = 'SETALLFOODS';
const SETRECENTFOODS = 'SETRECENTFOODS';
const SETDATE = 'SETDATE';


export function setDailyCalories(foods) {
  return {
        type: SETDAILYCALORIES,
        daily: foods
    }
}

export function setAllFoods(foods) {
  return {
        type: SETALLFOODS,
        all: foods
    }
}

export function setRecentFoods(foods) {
  return {
        type: SETRECENTFOODS,
        recent: foods
    }
}

export function setDate(date) {
  return {
        type: SETDATE,
        date: date
    }
}

const defaultCalories = {
  all: [],
  daily: [],
  recent: [],
  date: dayjs.tz().format('YYYY-MM-DD')
};

export default function calories(state=defaultCalories, action) {
  switch (action.type) {
    case SETDAILYCALORIES:
      return { all: state.all, daily: action.daily, recent: state.recent, date: state.date };
    case SETALLFOODS:
      return { all: action.all, daily: state.daily, recent: state.recent, date: state.date };
    case SETRECENTFOODS:
      return { all: state.all, daily: state.daily, recent: action.recent, date: state.date };
    case SETDATE:
      return { all: state.all, daily: state.daily, recent: state.recent, date: action.date };
    default:
      return state;
  }
}
