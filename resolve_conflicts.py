import os
import re

def resolve_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        print(f"Skipping binary file: {filepath}")
        return False
    
    # Regex to capture HEAD content and discard the rest
    # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> ...
    # We use re.DOTALL so . matches newlines
    # We match strictly the markers on their own lines or start of file
    
    # Matches:
    # <<<<<<< HEAD
    # ... content ...
    # =======
    # ... content ...
    # >>>>>>> ...
    
    pattern = re.compile(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> .*?(\n|$)', re.DOTALL)
    
    if not pattern.search(content):
        return False

    new_content = pattern.sub(r'\1', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True

def main():
    root_dir = r"c:\Users\iraquian\automateai-main"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        # Skip node_modules and .git
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        if '.next' in dirs:
            dirs.remove('.next')
            
        for file in files:
            # Check for conflict markers in all text files
             if file.endswith(('.tsx', '.ts', '.css', '.json', '.js', '.md', '.txt')):
                filepath = os.path.join(root, file)
                try:
                    if resolve_file(filepath):
                        print(f"Resolved: {filepath}")
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    
    print(f"Total resolved: {count}")

if __name__ == "__main__":
    main()
