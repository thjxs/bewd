import { execSync } from 'child_process';

const THEME = '#FF6AC1';

const defaultStyle = {
  color: THEME,
  fontSize: '16px',
};

function toDashCase(str: string) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function createLogStyle(style: Record<string, string>) {
  let keys = Object.keys(style);
  return keys.map((key) => `${toDashCase(key)}: ${style[key]}`).join(';');
}

function toConsoleMessage(message: string, style: Record<string, string>) {
  return `console.log('%c${message}','${createLogStyle(style)}');`;
}

function getGitCommitHash() {
  try {
    return execSync('git rev-parse HEAD', { encoding: 'utf-8' });
  } catch (error) {
    return 'Invalid commit hash';
  }
}

export default function main(version: string, style?: Record<string, string>) {
  const commit = getGitCommitHash();
  const commitHash = commit.toString().trim();
  const buildDate = new Date().toLocaleString();

  const styleConfig = { ...defaultStyle, ...style };

  const script = `
    ${toConsoleMessage(`${version}`, styleConfig)}
    ${toConsoleMessage(`${buildDate}`, styleConfig)}
    ${toConsoleMessage(`${commitHash}`, styleConfig)}
  `;
  return script;
}
