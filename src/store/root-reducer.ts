import { combineReducers, ReducersMapObject } from 'redux';

import { counterReducer } from './counter/reducer';
import { CounterState } from './counter/types';

interface RootStore {
  counter: CounterState;
}

function rootReducer() {
  let reducerMap: ReducersMapObject<RootStore> = {
    counter: counterReducer
  };

  return combineReducers(reducerMap);
}

export { rootReducer };
