import React from 'react';
import Story from './Story';

const StoriesList = ({ stories }) => {
  return (
    <ul>
      {stories
        ? stories.map(story => (
          <Story
            key={story._id}
            title={story.title}
            body={story.body}
            author={story.author}
          />
        ))
        : 'none'}
    </ul>
  );
};

export default StoriesList;
