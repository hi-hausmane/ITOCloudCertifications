import os
import glob
import frontmatter
import json
from datetime import datetime

POSTS_DIR = "blogposts"
OUTPUT_JSON = "src/data/blog-posts.json"

def publish_next_5_posts():
    post_files = sorted(glob.glob(os.path.join(POSTS_DIR, "*.md")))
    published_count = 0

    all_published_posts = []

    for filepath in post_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                post = frontmatter.load(f)
            except Exception as e:
                print(f"⚠️ Error loading {filepath}: {e}")
                continue

        if post.get('published', False):
            if post.get('published', False) == True:
                all_published_posts.append({
                    'slug': os.path.basename(filepath).replace('.md', ''),
                    'title': post.get('title', ''),
                    'date': post.get('date', datetime.now().strftime("%Y-%m-%d")),
                    'description': post.get('description', '')
                })
            continue

        # Mark as published
        post['published'] = True
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(frontmatter.dumps(post))

        print(f"✅ Published {os.path.basename(filepath)}")
        all_published_posts.append({
            'slug': os.path.basename(filepath).replace('.md', ''),
            'title': post.get('title', ''),
            'date': post.get('date', datetime.now().strftime("%Y-%m-%d")),
            'description': post.get('description', '')
        })

        published_count += 1
        if published_count >= 5:
            break

    # Save JSON for app
    all_published_posts.sort(key=lambda x: x['date'], reverse=True)

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(all_published_posts, f, ensure_ascii=False, indent=2)

    print(f"📝 Generated JSON for {len(all_published_posts)} blog posts")


if __name__ == "__main__":
    publish_next_5_posts()
