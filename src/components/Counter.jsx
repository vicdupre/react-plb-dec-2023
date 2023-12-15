import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  counterActions,
  getCounter,
  reset,
} from "../redux/slices/counterSlice";

const Counter = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const handleClick = (actionCreator) => {
    dispatch(actionCreator());
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: 5,
      }}
    >
      <p style={{ textAlign: "center" }}>{counter}</p>
      <div
        style={{
          display: "flex",
          gap: 5,
        }}
      >
        <Button onClick={() => handleClick(counterActions.decrement)}>-</Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleIncrement}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
