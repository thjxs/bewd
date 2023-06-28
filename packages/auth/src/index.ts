let key = 'user';
let token = localStorage.getItem(key);
export function setAuthKey(authKey: string) {
  key = authKey;
  token = localStorage.getItem(key);
}

export function getToken() {
  return token;
}

export function setToken(authToken: string) {
  token = authToken;
  localStorage.setItem(key, token);
}

export function clearToken() {
  token = null;
  localStorage.removeItem(key);
}
