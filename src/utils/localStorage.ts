export const setIntoLocalStorage = (key: string, value: string) => {
  if (!key) {
    return "";
  }

  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string) => {
  if (!key) {
    return "";
  }

  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  if (!key) {
    return "";
  }

  return localStorage.removeItem(key);
};
