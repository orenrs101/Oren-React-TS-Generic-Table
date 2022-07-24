export function debounce(func:Function, timeout = 250): () => void {
    let timer: ReturnType<typeof setTimeout>;

    return (...args:[]) => {
        clearTimeout(timer);
        // @ts-ignore
        timer = setTimeout(() => {func.apply(this, args);}, timeout);
    };
}