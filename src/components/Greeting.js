import React from 'react';

class Aloha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: true,
    };
  }
  h1Handler() {
    this.setState({
      greet: !this.state.greet,
    });
  }

  render() {
    const greetWord = this.state.greet ? 'Hello' : 'Bye';
    return (
      <h1
        onClick={() => {
          this.h1Handler();
        }}
      >
        {greetWord}, {this.props.firstName} {this.props.lastName}
      </h1>
    );
  }
}

export default Aloha;
