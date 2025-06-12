const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const POSTS_DIR = path.join(__dirname, '../src/content/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/data/blog-posts.json');

function generateBlogData() {
  const fileNames = fs.readdirSync(POSTS_DIR);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(POSTS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      content,
      ...data,
    };
  });

  // Sort by date (newest first)
  const sortedPosts = posts.sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  );

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(sortedPosts, null, 2));
  console.log(`✅ Generated ${sortedPosts.length} blog posts into ${OUTPUT_FILE}`);
}

generateBlogData();
