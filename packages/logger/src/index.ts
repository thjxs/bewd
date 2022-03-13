export function log(...data: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log.apply(null, data);
  }
}

export function info(...data: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.info.apply(null, data);
  }
}

export function error(...data: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.error.apply(null, data);
  }
}
