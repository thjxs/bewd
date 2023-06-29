let key = 'user';
let token = localStorage.getItem(key);
export function setStorageKey(storageKey) {
    key = storageKey;
    token = localStorage.getItem(key);
}
export function getToken() {
    return token;
}
export function setToken(authToken) {
    token = authToken;
    localStorage.setItem(key, token);
}
export function clearToken() {
    token = null;
    localStorage.removeItem(key);
}
