
"use client"
import React, { useState } from "react";

type Post = {
  id: number;
  content: string;
};

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, content: "This is a sample post." },
    { id: 2, content: "Another example post with some text!" },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;

    setPosts([{ id: Date.now(), content: newPost }, ...posts]);
    setNewPost("");
  };

  return (
    <div className="max-w-xl mx-auto mt-6 px-4">
      {/* Input Box */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6 border border-gray-200">
        <textarea
          className="w-full resize-none p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring"
          rows={3}
          placeholder="What’s happening?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handlePost}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full"
          >
            Post
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-2xl shadow border border-gray-200"
          >
            <p className="text-gray-800">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
