import jobPosts from '../data/job-posts.json';

export function getSortedJobData() {
  return jobPosts;
}

export function getJobData(slug) {
  return jobPosts.find((post) => post.slug === slug);
}
