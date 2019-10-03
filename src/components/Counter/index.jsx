import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Counter.scss";
import cnBem from "../global/bem";
import 'what-input';

const bemClass = cnBem('counter');

const Counter = props => {
    const { count, updateCount, step, minValue, maxValue } = props;
    const checkValue = (value) => {
        value = Number(String(value).replace(/[\D]/gi, ''));
        if (value >= maxValue) {
            return maxValue;
        }
        if (value <= minValue) {
            return minValue;
        }
        return value;
    }
    const decrement = (value) => {
        return checkValue(value - step);
    }
    const increment = (value) => {
        return checkValue(value + step);
    }

    return (
        <div className={ bemClass() }>
            <button
                className={ bemClass('button') }
                onClick={ () => updateCount(prevCount => decrement(prevCount)) }
                type="button"
                disabled={ count <= minValue }
            >
                -
            </button>
            <input
                className={ bemClass('input') }
                value={ count }
                type="text"
                name="name"
                id="id"
                onChange={ (event) => updateCount(checkValue(event.target.value)) }
            />
            <button
                className={ bemClass('button') }
                onClick={ () => updateCount(prevCount => increment(prevCount)) }
                type="button"
                disabled={ count >= maxValue }
            >
                +
            </button>
        </div>
    );
};

Counter.propTypes = {
    count: PropTypes.number,
    updateCount: PropTypes.func,
    step: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
};

Counter.defaultProps = {
    count: 1
};

Counter.displayName = "Counter";

export default Counter;
