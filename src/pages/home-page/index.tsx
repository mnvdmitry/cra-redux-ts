import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './index.module.css';
import { RootState } from 'store';
import { increment, decrement, changeValueAsync } from 'store/counter/actions';

export const HomePage = () => {
  let count = useSelector((state: RootState) => state.counter.count);
  let dispatch = useDispatch();

  return (
    <div className={s.root}>
      <span>{count}</span>

      <div>
        <button onClick={() => dispatch(increment())} type="button">
          Increment
        </button>

        <button onClick={() => dispatch(decrement())} type="button">
          Increment Async
        </button>

        <button onClick={() => dispatch(changeValueAsync(5))} type="button">
          Async change the value to 5
        </button>
      </div>
    </div>
  );
};
