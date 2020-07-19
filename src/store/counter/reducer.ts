import { Reducer } from 'redux';

import {
  CounterState,
  ActionTypes,
  INCREMENT,
  DECREMENT,
  CHANGE_VALUE
} from './types';

const initialState: CounterState = {
  count: 0
};

export const counterReducer: Reducer<CounterState, ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }

    case CHANGE_VALUE: {
      return { ...state, count: action.payload };
    }

    default:
      return state;
  }
};
