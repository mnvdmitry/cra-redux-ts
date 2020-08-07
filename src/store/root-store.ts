import { Middleware, applyMiddleware, createStore, Store } from 'redux';
import reduxThunk from 'redux-thunk';

import { composeEnhancers } from 'lib/redux/utils';

import { rootReducer } from './root-reducer';
import { RootState } from './types';

/* Middlewares */
const middlewares: Middleware[] = [reduxThunk];

/* Compose enhancers */
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function configureStore(
  initialState: Partial<RootState> = {}
): Store<RootState> {
  let store: Store<RootState> = createStore(
    rootReducer(),
    initialState as any,
    enhancer
  );

  return store;
}

export { configureStore };
