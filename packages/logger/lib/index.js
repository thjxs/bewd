export function log(...data) {
    if (process.env.NODE_ENV === 'development') {
        console.log.apply(null, data);
    }
}
export function info(...data) {
    if (process.env.NODE_ENV === 'development') {
        console.info.apply(null, data);
    }
}
export function error(...data) {
    if (process.env.NODE_ENV === 'development') {
        console.error.apply(null, data);
    }
}
