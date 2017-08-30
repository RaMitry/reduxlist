import React from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../../redux/actions';
import FontAwesome from 'react-fontawesome';

let EditForm = ({ dispatch, itemText, todoId }) => {

  return (
    <form className="form-input-group" onSubmit={(e)=>{
      e.preventDefault();
      let value = e.target.querySelector('input').value;
      dispatch(updateItem(todoId, value));
    }}>
      <input defaultValue={itemText} className="input_add" />
      <span className="btn-input-group">
        <button type="submit" className="btn-simple">
          <FontAwesome
              name='floppy-o'
          />
        </button>
      </span>
    </form>
  )
};

EditForm = connect()(EditForm);

export default EditForm;
