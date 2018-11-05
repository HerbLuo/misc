export function getUrlParam(key: string, url: string = window.location.href)
  : string | void {
  const regExecRes = new RegExp(`[?&]${key}=([^&]*)`).exec(url);
  if (regExecRes) {
    return regExecRes[1]
  }
}

export function replaceUrlParamAndPush2State(key: string, value: string): void {
  const newUrl = replaceUrlParam(key, value);
  window.history.pushState({}, '', newUrl);
}

function replaceUrlParam(key: string, value: string, url: string = window.location.href): string {
  const newUrl = url.replace(new RegExp(`([?&]${key}=)[^&]*`), `$1${value}`);
  if (newUrl !== url) {
    return url
  }

  // includes query
  if (url.includes('?')) {
    return url.replace('?', `?${key}=${value}&`);
  }

  // includes hash
  if (url.includes('#')) {
    return url.replace('#', `?${key}=${value}#`)
  }

  return `${url}?${key}=${value}`;
}
