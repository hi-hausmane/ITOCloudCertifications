import React from 'react';
import { getSortedPostsData } from '@/utils/blogReader';

export default function BlogList() {
  const posts = getSortedPostsData();

  console.log('Posts:', posts); // ← Debug line

  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-slate-400 mb-4">{post.date}</p>
            <p className="mb-4">{post.description}</p>
            <a href={`/blog/${post.slug}`} className="text-blue-400 hover:underline">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}