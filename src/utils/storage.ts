export function setItem(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function getItem(key: string): string | null {
    return localStorage.getItem(key);
}

export function clear() {
    localStorage.clear();
}

export function removeItem(key: string) {
    localStorage.removeItem(key);
}

export function setReduxState(key: string, state: any) {
    localStorage.setItem(key, JSON.stringify(state));
}

export function getReduxState(key: string) {
    const stateString = localStorage.getItem(key);
    return stateString ? JSON.parse(stateString) : null;
}
