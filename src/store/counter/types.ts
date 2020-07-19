import { increment, decrement, changeValue } from './actions';

export const INCREMENT = 'counter.INCREMENT';
export const DECREMENT = 'counter.DECREMENT';
export const CHANGE_VALUE = 'counter.CHANGE_VALUE';

export interface CounterState {
  count: number;
}

export type ActionTypes = ReturnType<
  typeof increment | typeof decrement | typeof changeValue
>;
