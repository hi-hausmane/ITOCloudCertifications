// src/components/BlogPost.jsx
import './blog.css';
import ReactMarkdown from 'react-markdown';
import './blog.css'; // Optional: custom styles if needed later

export default function BlogPost({ postData }) {
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <a href="/blog" className="text-blue-400 hover:text-blue-300 mb-6 inline-block transition-colors duration-200">
        ← Back to Blog
      </a>

      <h1 className="text-4xl font-bold mb-4 text-white">{postData.title}</h1>
      <p className="text-slate-400 mb-8">{postData.date}</p>

      <div className="prose prose-invert prose-slate max-w-none">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>
    </div>
  );
}
