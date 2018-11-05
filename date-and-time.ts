export function getNow(): number {
    return new Date().getTime();
}

const to2 = (n: number) => n > 9 ? n : "0" + n;

export function getAndFormatNow(): string {
    const d = new Date();
    return `${getAndFormatDate(d)} ${
        to2(d.getHours())}:${
        to2(d.getMinutes())}:${
        to2(d.getSeconds())}`;
}

export function getAndFormatDate(d: Date = new Date()): string {
    return `${d.getFullYear()}-${to2(d.getMonth() + 1)}-${to2(d.getDate())}`;
}
