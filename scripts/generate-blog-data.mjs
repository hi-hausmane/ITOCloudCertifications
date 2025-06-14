// scripts/generate-blog-data.cjs
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGPOSTS_DIR = path.join(process.cwd(), 'blogposts');

function getSortedPostsData() {
  const generatedFiles = fs.readdirSync(BLOGPOSTS_DIR).filter(file => file.endsWith('.md'));

  const allPosts = generatedFiles.map((file) => {
    const fullPath = path.join(BLOGPOSTS_DIR, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: file.replace(/\.md$/, ''),
      content,
      ...data,
    };
  });

  // Filter published: true
  const publishedPosts = allPosts.filter(post => post.published === true);

  // Sort by date (newest first)
  return publishedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Generate JSON output
const sortedPosts = getSortedPostsData();
fs.writeFileSync(
  path.join(process.cwd(), 'src/data/blog-posts.json'),
  JSON.stringify(sortedPosts, null, 2)
);

console.log(`✅ Generated ${sortedPosts.length} blog posts from blogposts/`);