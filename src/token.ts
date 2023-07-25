export const TOKEN_KEY = "token-key";

export function setToken(v?: string) {
  if (v) {
    localStorage.setItem(TOKEN_KEY, v);
  }
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
