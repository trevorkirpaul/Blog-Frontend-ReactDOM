import React, { Component } from 'react';
import axios from 'axios';

export default class Stories extends Component {
  componentDidMount() {
    const URI = 'https://blog-life-story.herokuapp.com/blogposts';
    axios
      .get(URI)
      .then(blogs => console.log({ blogs }))
      .catch(err => console.log({ err }));
  }
  render() {
    return (
      <div>
        <p>Stories</p>
      </div>
    );
  }
}
