import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Counter.scss";
import cnBem from "../global/bem"

const bemClass = cnBem('counter');

const Counter = props => {
    const { count, updateCount } = props;
    const rootClass = bemClass();

    console.log('RENERERERRE');


    return (
        <div className={ rootClass }>
            {/* <button onClick={changeDown} type="button">-</button>
            <input type="text" name="name" id="id" onChange={(event) => setCount(event.target.value)}/>
            <button onClick={changeUp} type="button">+</button>

            <button onClick={() => setCount(2)}>Сбросить</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button> */}
            Счёт: {count}

            <button onClick={() => {updateCount(prevCount => prevCount + 1)}}> Сделать 200 </button>
        </div>
    );
};

Counter.propTypes = {
};

Counter.defaultProps = {
};

Counter.displayName = "Counter";

export default Counter;
