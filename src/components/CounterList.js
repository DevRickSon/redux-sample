import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    const counterList = counters.map((counter, i) => (
        <Counter
            key={i}
            index={i}
            {...counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}
        />
    ));

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.array,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
    onIncrement: console.warn('onIncrement no defined'),
    onDecrement: console.warn('onDecrement no defined'),
    onSetColor: console.warn('onSetColor no defined')
};

export default CounterList;
