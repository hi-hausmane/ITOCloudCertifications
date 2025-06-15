import os
import random
import re

BLOG_FOLDER = "blogposts"
MAX_POSTS_TO_PUBLISH = 5

def parse_front_matter(content):
    # Extract front matter between ---
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return None, None, content  # No front matter found
    front_matter = match.group(1)
    rest = content[match.end():]
    return front_matter, rest, content[match.start():]

def update_front_matter(front_matter, key, value):
    lines = front_matter.splitlines()
    for i, line in enumerate(lines):
        if line.startswith(f"{key}:"):
            lines[i] = f"{key}: {value}"
            break
    else:
        lines.append(f"{key}: {value}")
    return "\n".join(lines)

def main():
    post_files = []

    for filename in os.listdir(BLOG_FOLDER):
        if filename.endswith(".md"):
            filepath = os.path.join(BLOG_FOLDER, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            front_matter_block, _, _ = parse_front_matter(content)
            if not front_matter_block:
                continue

            published_line = [line for line in front_matter_block.splitlines() if line.startswith("published:")]
            if published_line and "false" in published_line[0].lower():
                post_files.append(filepath)

    # Randomly choose up to MAX_POSTS_TO_PUBLISH
    selected_posts = random.sample(post_files, min(MAX_POSTS_TO_PUBLISH, len(post_files)))

    for filepath in selected_posts:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        front_matter_block, rest_content, full_front_matter = parse_front_matter(content)

        updated_front_matter = update_front_matter(front_matter_block, "published", "true")
        new_content = f"{full_front_matter.replace(front_matter_block, updated_front_matter)}\n{rest_content}"

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Published: {filepath}")

    print(f"Published {len(selected_posts)} blog posts.")

if __name__ == "__main__":
    main()

