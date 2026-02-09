---
on:
  schedule: daily
  workflow_dispatch:
permissions:
  contents: read
  issues: read
  pull-requests: read
network: defaults
tools:
  github:
  bash: ["cat", "ls", "find"]
safe-outputs:
  create-issue:
steps:
  - uses: actions/checkout@v4
---

# Daily content reviewer

Review all blog posts and pages in this Astro website for content quality issues.

## Instructions

1. Find all markdown and MDX content files in `src/content/posts/` and `src/pages/`.

2. For each content file, review for:
   - **Spelling errors and typos** - misspelled words, repeated words, missing words
   - **Grammar issues** - incorrect verb tenses, subject-verb agreement, punctuation errors
   - **Factual inaccuracies** - incorrect dates, broken claims, outdated information
   - **Broken markdown syntax** - unclosed formatting, malformed links, invalid frontmatter

3. Compile a list of issues found. For each issue, note:
   - The file path
   - The specific line or sentence containing the issue
   - A description of what's wrong
   - A suggested correction

4. **Only report high-confidence, serious issues.** Ignore:
   - Stylistic preferences
   - Minor formatting variations
   - Intentional informal language
   - Technical terms or proper nouns that may appear as misspellings

5. If serious issues are found, create a single GitHub issue titled "Content Review: Issues Found" with:
   - A summary of the number of files reviewed and issues found
   - A categorized list of all issues grouped by file
   - Suggested fixes for each issue

6. If no serious issues are found, do not create an issue. Simply report that the content review passed.

