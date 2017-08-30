import React from 'react';
import { addItem } from '../redux/actions';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

class NewForm extends React.Component{
  render(){
    return (
      <form className="add-form form-input-group" onSubmit={e => {
        e.preventDefault();
        this.props.handleSubmit(this.textInput.value);
        this.textInput.value = '';
        this.textInput.focus();
      }}>
          <input className="input_add" ref={input=>{this.textInput = input;}}/>
          <span className="btn-input-group">
             <button type="submit" className="btn-simple">
                <FontAwesome
                    name='plus-circle'
                />
             </button>
          </span>
      </form>
    );
  }
}

let NewFormRedux = ({ dispatch }) => {
    return (
      <NewForm handleSubmit={value=>{dispatch(addItem(value));}} />
    )
};

NewFormRedux = connect()(NewFormRedux);

export default NewFormRedux;
