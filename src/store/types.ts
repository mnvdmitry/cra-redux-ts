import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { StateTypeRedux } from 'utility-types';

export type RootState = StateTypeRedux<
  ReturnType<typeof import('./root-reducer').rootReducer>
>;

export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
