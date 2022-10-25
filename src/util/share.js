export function setGlobleValue(key, value) {
  window.GM_setValue(key, value);
  window.localStorage.setItem(key, value);
}
export function getGlobleValue(key) {
  let cache = window.localStorage.getItem(key);
  if (cache) {
    return cache;
  }
  return window.GM_getValue(key);
}
