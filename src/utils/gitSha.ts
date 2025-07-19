import { execSync } from "child_process";

export const GET_GIT_SHA = () => {
    return execSync("git rev-parse --short HEAD")
        .toString()
        .trim()
}
