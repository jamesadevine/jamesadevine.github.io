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
  bash: ["npm:*", "cat", "ls"]
safe-outputs:
  create-issue:
steps:
  - name: Install lychee
    run: |
      curl -sSfL https://github.com/lycheeverse/lychee/releases/latest/download/lychee-x86_64-unknown-linux-gnu.tar.gz | tar xz
      sudo mv lychee /usr/local/bin/
---

# Daily broken link checker

1. Run the command `npm run check:links` (specified in package.json scripts) to analyze the repository for any broken links.
2. Parse the lychee output to identify any broken links.
3. If broken links are found, create a single GitHub issue summarizing all broken links with their locations and HTTP status codes.