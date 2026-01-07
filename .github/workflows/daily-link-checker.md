---
on:
  schedule:
    - cron: "0 9 * * *"
  workflow_dispatch:
permissions:
  contents: read
  issues: read
  pull-requests: read
network: defaults
tools:
  github:
  bash:
safe-outputs:
  create-issue:
steps:
  - name: Install dependencies
    run: sudo snap install lychee
---

# Daily broken link checker

1. Use the check:links (specified in package.json scripts) to analyze the repository for any broken links.
1. Create a Github issue for each broken link found.