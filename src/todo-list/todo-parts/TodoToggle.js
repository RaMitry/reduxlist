import React from 'react';
import { toggleItemDone } from '../../redux/actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';



let TodoToggle = ({ dispatch, todoId, isDone }) => {

    let faicon = '';

    if (isDone) {
        faicon = 'circle';
    } else {
        faicon = 'circle-o';
    }

    return (
        <FontAwesome className="toggle-status" name={faicon} onClick={()=>{
            dispatch(toggleItemDone(todoId));
        }} />
    )
};

TodoToggle = connect()(TodoToggle);

export default TodoToggle
