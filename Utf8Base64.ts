export const Utf8Base64 = {
    decode(str: string): string {
        return decodeURIComponent([...atob(str)]
            .map(c =>
                `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
    },
    encode(str: string) {
        return btoa(encodeURIComponent(str)
            .replace(/%([0-9A-F]{2})/g, (match, p1) =>
                String.fromCharCode(parseInt(p1, 16))
            ));
    }
};

export function base64ToFile(base64: string): File {
    const bytes = atob(base64);
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new File([ab], 'contract.pdf');
}
