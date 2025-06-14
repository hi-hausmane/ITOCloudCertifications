import os
import glob
import frontmatter

POSTS_DIR = "src/content/jobs"

def publish_next_5_jobs():
    post_files = sorted(glob.glob(os.path.join(POSTS_DIR, "*.md")))

    published_count = 0

    for filepath in post_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)

        if post.get('published', False):
            continue

        # Set published: true
        post['published'] = True

        with open(filepath, 'w', encoding='utf-8') as f:
            frontmatter.dump(post, f)

        print(f"✅ Published {os.path.basename(filepath)}")
        published_count += 1

        if published_count >= 5:
            break

    if published_count == 0:
        print("⚠️ No more unpublished jobs found.")

if __name__ == "__main__":
    publish_next_5_jobs()
