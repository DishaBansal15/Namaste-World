import React from 'react';
import './Profile.css';

const user = {
  username: 'user1',
  bio: 'I love coding and sharing my thoughts with the world.',
  posts: [
    {
      id: 1,
      content: 'This is one of my posts!',
    },
    {
      id: 2,
      content: 'Another post on my profile.',
    },
  ],
};

const Profile = () => {
  return (
    <div className="profile">
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <h3>My Posts</h3>
      <div className="profile-posts">
        {user.posts.map(post => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
