import React, { Component } from 'react';
import Toggler from './Toggler';
import './Scene.css';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLight: true,
    };
  }

  toggleScene() {
    this.setState({
      isLight: !this.state.isLight,
    });
  }

  render() {
    const { isLight } = this.state;
    const className = isLight ? 'scene-on' : 'scene-off';
    return (
      <div className={className}>
        <Toggler changeParentState={() => this.toggleScene()} />
      </div>
    );
  }
}

export default Scene;
