import os
import glob

def publish_next_5_posts():
    POSTS_DIR = "blogposts"
    post_files = sorted(glob.glob(os.path.join(POSTS_DIR, "*.md")))

    published_count = 0

    for filepath in post_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        # Check if already published
        has_published = any(line.startswith("published: true") for line in lines)
        if has_published:
            continue

        # Find and update `published: false` or add if missing
        published_line_index = next((i for i, line in enumerate(lines) if line.startswith("published:")), None)

        if published_line_index is not None:
            lines[published_line_index] = "published: true\n"
        else:
            # Insert after frontmatter start if no `published` field exists
            insert_index = lines.index("---\n", 1) + 1
            lines.insert(insert_index, "published: false\n")

        # Update and save
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)

        print(f"✅ Published {os.path.basename(filepath)}")
        published_count += 1

        if published_count >= 5:
            break

    if published_count == 0:
        print("⚠️ No more unpublished posts found.")

if __name__ == "__main__":
    publish_next_5_posts()
