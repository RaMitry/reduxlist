import React from 'react';
import TodoDelButton from './TodoDelButton';
import TodoToggle from './TodoToggle';
import TodoText from './TodoText';
import TodoEditButton from './TodoEditButton';
import EditForm from './EditForm';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    if (this.props.isEditMode) {
        return (
          <li>
              <EditForm todoId={this.props.id} itemText={this.props.itemText} />
          </li>
        )
    }

    return (
      <li className="todo-item">
          <label>
            <TodoToggle todoId={this.props.id} isDone={this.props.isDone} />
            <TodoText todoId={this.props.id} itemText={this.props.itemText} isDone={this.props.isDone} />
          </label>
          <TodoDelButton todoId={this.props.id} />
          <TodoEditButton todoId={this.props.id} />
      </li>
    )
  }
}

export default TodoItem
