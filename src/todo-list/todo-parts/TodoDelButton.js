import React from 'react';
import { deleteItem } from '../../redux/actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

let TodoDelButton = ({ dispatch, todoId }) => {

  return (
    <div className="delete-button">
        <a className="link-button-icon" onClick={e => {
            dispatch(deleteItem(todoId));
        }} href="#">
            <FontAwesome
                name='trash'
            />
        </a>
    </div>
  )
};

TodoDelButton = connect()(TodoDelButton);

export default TodoDelButton;
