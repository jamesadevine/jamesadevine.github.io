// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import childProcess from "child_process";


export const SITE_TITLE = 'James Devine';
export const SITE_DESCRIPTION = 'A personal website and blog by James Devine';
export const GIT_SHA = childProcess
    .execSync("git rev-parse --short HEAD")
    .toString()
    .trim();
export const GITHUB_REPO_URL = 'https://github.com/jamesadevine/jamesadevine.github.io';