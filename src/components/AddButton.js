import React from 'react';

export default class AddButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // onAddCountとして渡されたメソッドをAddButtonで定義したhandleClickメソッドを介して使用できるようにする
    this.props.onAddCount();
  }

  render() {
    return (
      <button onClick={this.handleClick}>ADD</button>
    )
  }
}