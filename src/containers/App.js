import React, {Component} from 'react';
import * as actions from '../modules';
import Button from '../components/Button';
import CounterListContainer from '../containers/CounterListContainer';
import {connect} from 'react-redux';

import {getRandomColor} from '../utils';

class App extends Component {
    render(){
        const {onCreate, onRemove} = this.props;

        return (
            <div>
                <Button
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapDispatchToProps)(App);
