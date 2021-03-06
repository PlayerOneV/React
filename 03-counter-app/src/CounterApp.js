import PropTypes from 'prop-types';
import { useState } from "react";

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value); //Return a array

    //handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }
    return <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>-</button>
    </>
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;