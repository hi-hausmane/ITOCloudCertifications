import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'blogposts');

function getSortedPostsData() {
  const fileNames = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));

  const allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      content,
      ...data,
    };
  });

  // Filter only published posts
  const publishedPosts = allPosts.filter(post => post.published === true);

  // Sort by date (most recent first)
  return publishedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Generate JSON output
const sortedPosts = getSortedPostsData();
fs.writeFileSync(
  path.join(process.cwd(), 'src/data/blog-posts.json'),
  JSON.stringify(sortedPosts, null, 2)
);

console.log(`✅ Generated ${sortedPosts.length} blog posts into blog-posts.json`);
