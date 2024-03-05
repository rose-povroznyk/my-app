import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  toggleHandler() {
    this.setState({
      on: !this.state.on,
    });
  }

  render() {
    const classForDiv = this.state.on ? 'lampOn' : 'lampOff';
    return (
      <>
        <div className={classForDiv}></div>
        <button
          onClick={() => {
            this.toggleHandler();
          }}
        >
          Toggle
        </button>
      </>
    );
  }
}

export default App;
