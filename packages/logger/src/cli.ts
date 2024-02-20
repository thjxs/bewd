export const Colors = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',

  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',

  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
};

function logWithColor(color: string, data: any) {
  console.log(`${color}${data}${Colors.Reset}`);
}

export function success(data: string) {
  logWithColor(Colors.FgGreen, data);
}

export function warning(data: any) {
  logWithColor(Colors.FgYellow, data);
}

export function error(data: any) {
  logWithColor(Colors.FgRed, data);
}

export function info(data: any) {
  logWithColor(Colors.FgBlue, data);
}

export function message(data: any) {
  logWithColor(Colors.FgMagenta, data);
}
