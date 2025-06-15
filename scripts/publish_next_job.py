import os
import glob
import frontmatter

def publish_next_5_jobs():
    POSTS_DIR = "src/content/jobs"
    post_files = sorted(glob.glob(os.path.join(POSTS_DIR, "*.md")))

    published_count = 0

    for filepath in post_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                post = frontmatter.load(f)
            except Exception as e:
                print(f"⚠️ Error loading {filepath}: {e}")
                continue

        if post.get('published', False):
            continue

        # Set published to True
        post['published'] = True

        # Write updated file using string mode
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(frontmatter.dumps(post))

        print(f"✅ Published {os.path.basename(filepath)}")
        published_count += 1

        if published_count >= 5:
            break

    if published_count == 0:
        print("📌 No more unpublished jobs found.")


if __name__ == "__main__":
    publish_next_5_jobs()