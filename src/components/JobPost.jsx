import ReactMarkdown from 'react-markdown';

export default function JobPost({ jobData }) {
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <a href="/jobs" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
        ← Back to Jobs
      </a>

      <h1 className="text-4xl font-bold mb-4">{jobData.title}</h1>
      <p className="text-slate-400 mb-6">
        {jobData.company} — {jobData.location} · Posted: {jobData.postedDate}
      </p>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{jobData.content}</ReactMarkdown>
      </div>
    </div>
  );
}
