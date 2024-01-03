import { execSync } from 'child_process';

const THEME = '#FF6AC1';

function createLogStyle(color: string) {
  return `color: ${color};font-size: 16px;`;
}

function toConsoleMessage(message: string, color: string) {
  return `console.log('%c${message}','${createLogStyle(color)}');`;
}

function getGitCommitHash() {
  return execSync('git rev-parse HEAD', { encoding: 'utf-8' });
}

export default function main(version: string) {
  const commit = getGitCommitHash();
  const commitHash = commit.toString().trim();
  const buildDate = new Date().toLocaleString();

  const script = `
    ${toConsoleMessage(`${version}`, THEME)}
    ${toConsoleMessage(`${buildDate}`, THEME)}
    ${toConsoleMessage(`${commitHash}`, THEME)}
  `;
  return script;
}
