import React from 'react';
import CountDisplay from '../components/CountDisplay.js';
import AddButton from '../components/AddButton.js';

export default class TopPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // addCountメソッドでのthisでTopPageを参照できるようにする(この記述がないとaddCountメソッド内でのthisがundefinedになってしまう)
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState((state) => {
      return {
        count: state.count + 1
        // returnで何を返すからとても重要（this.stateではなく、stateの中のcountキーに対応する値（初期値は０）に値を足していく
      }
    })
  }

  render() {
    return (
      <div>
        <CountDisplay count={this.state.count} />
        <AddButton onAddCount={this.addCount} />
      </div>
    )
  }


}

// Reactでは、タグのような形で大文字から始めたら、そのコンポーネント自体を表示することができる