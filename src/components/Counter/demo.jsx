import React, { useState } from "react";
import PropTypes from "prop-types";
import cnBem from "../global/bem"
import { Counter } from "../index"

const Demo = () => {
    const [count, setCount] = useState(1);

    const updateCount = (value) => {
        setCount(value)
    }

    return (
        <Counter
            step={1}
            minValue={1}
            maxValue={30}
            count={ count }
            updateCount={ updateCount }
        />
    );
};

Demo.displayName = "Demo";

export default Demo;
