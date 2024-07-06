import React from 'react';

const PostCard = ({ title, content }) => (
  <div className="post-card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default PostCard;
