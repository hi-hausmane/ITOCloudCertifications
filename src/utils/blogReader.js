import blogPosts from '../data/blog-posts.json';

export function getSortedPostsData() {
  return blogPosts;
}

export function getPostData(slug) {
  return blogPosts.find((post) => post.slug === slug);
}