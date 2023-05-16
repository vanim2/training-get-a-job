import React from 'react';
import styles from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addAmount,
  addIfOdd,
  addAsync,
  formInput,
} from '../redux/feature/counter.feature';

export function Counter() {
  //get data from redux store

  const count = useSelector((state) => state.counter);
  // console.log(count);

  const dispatch = useDispatch();

  //addincrement function
  const counterIncrement = () => {
    dispatch(increment());
  };
  //decrement function
  const counterDecrement = () => {
    dispatch(decrement());
  };

  const counterAddAmount = () => {
    dispatch(addAmount());
  };

  //addIfOdd function
  const counterAddIfOdd = () => {
    dispatch(addIfOdd());
  };
  //addAsync function
  const counterAddAsync = () => {
    dispatch(addAsync());
  };
  //form input function
  const counterFormInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(formInput(value));
  };
  //   const [result, setresult] = useState(0);
  //   //addAmount function
  //   const addAmount = () => {
  //     setresult(result + incrementAmount);
  //   };
  //   //addincrement function
  //   const increment = () => {
  //     setresult(result + 1);
  //   };
  //   //decrement function
  //   const decrement = () => {
  //     if (result <= 0) {
  //       setresult(0);
  //     } else {
  //       setresult(result - 1);
  //     }
  //   };
  //   //addIfOdd function
  //   const addIfOdd = () => {
  //     if (result % 2 === 0) {
  //       setresult(result);
  //     } else {
  //       setresult(result + incrementAmount);
  //     }
  //   };
  //   //addAsync function
  //   const addAsync = () => {
  //     setTimeout(() => {
  //       setresult(result + incrementAmount);
  //     }, 1000);
  //   };
  const { result, value } = count;
  return (
    <div>
      <div className={styles.row}>
        <button onClick={counterDecrement} className={styles.button}>
          -
        </button>
        <span className={styles.value}>{result}</span>
        <button onClick={counterIncrement} className={styles.button}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          onChange={counterFormInput}
          className={styles.textbox}
          type="number"
          value={value}
        />
        <button onClick={counterAddAmount} className={styles.button}>
          Add Amount
        </button>
        <button onClick={counterAddAsync} className={styles.asyncButton}>
          Add Async
        </button>
        <button onClick={counterAddIfOdd} className={styles.button}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
