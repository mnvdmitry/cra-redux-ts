import { INCREMENT, DECREMENT, CHANGE_VALUE } from './types';
import { RootThunk } from '../types';

export const increment = () => {
  return {
    type: INCREMENT
  } as const;
};

export const decrement = () => {
  return {
    type: DECREMENT
  } as const;
};

export const changeValue = (value: number) => {
  return {
    type: CHANGE_VALUE,
    payload: value
  } as const;
};

export const changeValueAsync = (value: number): RootThunk => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(changeValue(value));
    }, 1000);
  };
};
