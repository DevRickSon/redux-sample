import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import {List} from 'immutable';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    const counterList = counters.map((counter, i) => (
        <Counter
            key={i}
            index={i}
            {...counter.toJS()}
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
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: console.warn('onIncrement no defined'),
    onDecrement: console.warn('onDecrement no defined'),
    onSetColor: console.warn('onSetColor no defined')
};

export default CounterList;
