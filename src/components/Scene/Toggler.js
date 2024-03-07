import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  clickHandler() {
    this.setState({ isOn: !this.state.isOn });

    this.props.changeParentState();
  }

  render() {
    const { isOn } = this.state;
    return (
      <button
        onClick={() => {
          this.clickHandler();
        }}
      >
        {isOn ? 'Off' : 'On'}
      </button>
    );
  }
}

export default Toggler;
