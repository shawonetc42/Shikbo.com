import React from 'react';

const Posts = ({ posts }) => {
  // Sort posts based on some criteria (e.g., date, likes, etc.)
  const sortedPosts = posts.slice().sort((a, b) => b.likes - a.likes);

  return (
    <div className="flex flex-col lg:p-10 sm:p-5 items-stretch">
      {sortedPosts.map((post) => (
        <div key={post.id} className="border p-4 rounded-md bg-white shadow-md">
          <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
          {post.image && (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded"
              />
            </a>
          )}
          <p className="text-gray-800 mb-4">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
