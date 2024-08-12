import React from 'react';
import './feed.css';

const posts = [
  {
    id: 1,
    username: 'user1',
    content: 'Hello World! This is my first post.',
  },
  {
    id: 2,
    username: 'user2',
    content: 'Good morning, everyone!',
  },
  // Add more dummy posts as needed
];

const Feed = () => {
  return (
    <div className="feed">
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.username}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
