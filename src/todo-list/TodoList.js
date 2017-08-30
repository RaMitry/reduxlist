import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo-parts/TodoItem';

let TodoList = ({ todoArr }) => {
  let todoHtml = todoArr.map((todo)=>(
    <TodoItem key={todo.key} id={todo.key} itemText={todo.content} isEditMode={todo.editMode} isDone={todo.done} />
  ));
  return (
    <div className="todo-block">
      <ul className="todo-list">
        {todoHtml}
      </ul>
    </div>
  )
};
const mapStateProps = (state) => {
  return {
    todoArr: state || []
  }
};

TodoList = connect(mapStateProps)(TodoList);

export default TodoList;
