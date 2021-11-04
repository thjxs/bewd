export function log(...message) {
    if (process.env.NODE_ENV === 'development') {
        console.log(...message);
    }
}
