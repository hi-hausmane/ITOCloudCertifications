import React from 'react';
import jobPosts from '@/data/job-posts.json';

export default function JobsList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cloud & Finance Jobs in Morocco</h1>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {jobPosts.map((job) => (
          <article key={job.slug} className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-blue-400 mb-1">{job.company}</p>
            <p className="text-slate-400 mb-4">{job.location} · Posted: {job.postedDate}</p>
            <p className="mb-4">{job.description}</p>
            <a href={`/jobs/${job.slug}`} className="text-blue-400 hover:text-blue-300 inline-block mt-2">
              View details →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
