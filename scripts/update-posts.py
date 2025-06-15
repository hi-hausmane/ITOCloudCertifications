import os
import glob
import frontmatter
import json
import fs.path
import datetime

# Folder containing your blog posts
POSTS_DIR = "blogposts"
OUTPUT_JSON = "src/data/blog-posts.json"

def publish_next_5_posts():
    post_files = sorted(glob.glob(os.path.join(POSTS_DIR, "*.md")))

    published_count = 0

    for filepath in post_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                post = frontmatter.load(f)
            except Exception as e:
                print(f"⚠️ Error parsing {filepath}: {e}")
                continue

        if post.get('published', False):
            continue

        # Set published to True
        post['published'] = True

        # Write updated file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(frontmatter.dumps(post))

        print(f"✅ Published {os.path.basename(filepath)}")
        published_count += 1

        if published_count >= 5:
            break

    if published_count == 0:
        print("📌 No more unpublished blog posts found.")

    # Regenerate blog-posts.json
    all_posts = []
    for md_file in glob.glob(os.path.join(POSTS_DIR, "*.md")):
        with open(md_file, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)

        if post.get('published', False):
            all_posts.append({
                'title': post.get('title', ''),
                'slug': os.path.basename(md_file).replace('.md', ''),
                'date': post.get('date', datetime.datetime.now().strftime("%Y-%m-%d")),
                'description': post.get('description', '')
            })

    # Sort by date
    all_posts.sort(key=lambda x: x['date'], reverse=True)

    # Save JSON
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(all_posts, f, ensure_ascii=False, indent=2)

    print(f"📝 Generated {len(all_posts)} published blog posts")


if __name__ == "__main__":
    publish_next_5_posts()