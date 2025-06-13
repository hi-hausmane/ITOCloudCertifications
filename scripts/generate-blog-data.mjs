import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog');
const BLOGPOSTS_DIR = path.join(process.cwd(), 'blogposts');

function getSortedPostsData() {
  const localFiles = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
  const generatedFiles = fs.readdirSync(BLOGPOSTS_DIR).filter(file => file.endsWith('.md'));

  const allPosts = [...localFiles, ...generatedFiles].map((file) => {
    let fullPath;

    if (fs.existsSync(path.join(POSTS_DIR, file))) {
      fullPath = path.join(POSTS_DIR, file);
    } else {
      fullPath = path.join(BLOGPOSTS_DIR, file);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: file.replace(/\.md$/, ''),
      content,
      ...data,
    };
  });

  const publishedPosts = allPosts.filter(post => post.published === true);
  return publishedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

const sortedPosts = getSortedPostsData();
fs.writeFileSync(
  path.join(process.cwd(), 'src/data/blog-posts.json'),
  JSON.stringify(sortedPosts, null, 2)
);

console.log(`✅ Generated ${sortedPosts.length} blog posts`);