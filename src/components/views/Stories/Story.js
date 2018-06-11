import React from 'react';

// _id, title, body, author
// author:
// _id, email, password

const Story = ({ id, title, body, author }) => {
  return (
    <li>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <p>Author: {author.email}</p>
    </li>
  );
};

export default Story;
