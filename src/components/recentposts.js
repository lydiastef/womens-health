// RecentPosts.jsx
import React, { useState } from 'react';
import PostCard from './postcard';

const RecentPosts = () => {
  const [posts, setPosts] = useState([
    { title: 'Personalized Care', content: 'We offer personalized health plans tailored to meet your unique needs.' },
    { title: 'Expert Advice', content: 'Our team of experts is here to provide you with the best advice and support.' },
    { title: 'Community Support', content: 'Join our community and connect with others who share your health goals.' },
  ]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="recent-posts">
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default RecentPosts;
