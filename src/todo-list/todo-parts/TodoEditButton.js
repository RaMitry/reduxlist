import React from 'react';
import { holdEditMode } from '../../redux/actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

let TodoEditButton = ({ dispatch, todoId }) => {

  return (
    <div className="edit-button">
      <a className="link-button-icon" onClick={e => {
          dispatch(holdEditMode(todoId));
      }} href="#">
        <FontAwesome
            name='pencil'
        />
      </a>
    </div>
  )
};

TodoEditButton = connect()(TodoEditButton);

export default TodoEditButton;
