export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const timer = (fn: () => void) => {
    setTimeout(fn, 3000);
}