import React, { Component } from 'react';
import Button from 'components/shared/Button';

class Home extends Component {
  handleCreateStory() {
    console.log('workds');
  }
  render() {
    return (
      <div>
        <div>
          <h1>Life Story</h1>
          <p>A React based project</p>
        </div>
        <Button label="Write Story" onClick={this.handleCreateStory} />
        <Button label="Danger" onClick={this.handleCreateStory} type="danger" />
        <Button label="Ghost" onClick={this.handleCreateStory} type="ghost" />
      </div>
    );
  }
}

export default Home;
