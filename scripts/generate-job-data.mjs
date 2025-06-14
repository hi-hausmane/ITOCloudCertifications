import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const JOBS_DIR = path.join(process.cwd(), 'src/content/jobs');

function getSortedJobData() {
  const fileNames = fs.readdirSync(JOBS_DIR).filter(file => file.endsWith('.md'));

  const allJobs = fileNames.map((fileName) => {
    const fullPath = path.join(JOBS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      content,
      ...data,
    };
  });

  // Filter only published jobs
  const publishedJobs = allJobs.filter(job => job.published === true);

  // Sort by date (newest first)
  return publishedJobs.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
}

// Generate JSON output
const sortedJobs = getSortedJobData();
fs.writeFileSync(
  path.join(process.cwd(), 'src/data/job-posts.json'),
  JSON.stringify(sortedJobs, null, 2)
);

console.log(`✅ Generated ${sortedJobs.length} published job posts`);
