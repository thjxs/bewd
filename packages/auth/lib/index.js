let key = "user";
let token = localStorage.getItem(key);
export function setAuthKey(authKey) {
    key = authKey;
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
