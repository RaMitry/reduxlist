import React from 'react';

class TodoText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <span className="content-span">{this.props.itemText}</span>
    )
  }
}

export default TodoText
