import {showPayDialog} from "../../utils/dialog";

export function popDocStr(docStr: string): boolean {
    showPayDialog(() => {
        const wnd = window.open(
            "about:blank",
            "",
            "height=440, width=960, top=0, left=0"
        );
        if (!wnd) {
            return false;
        }
        wnd.document.write(docStr);
    });
    return true;
}

export function downloadBlob(fileName: string, content: Blob, blobOptions = {}) {
    const blob = new Blob([content], blobOptions);
    const a = document.createElement('a');
    a.innerHTML = fileName;
    a.download = fileName;
    a.href = URL.createObjectURL(blob);

    document.body.appendChild(a);
    const evt = document.createEvent("MouseEvents");
    evt.initEvent("click", false, false);
    a.dispatchEvent(evt);
    document.body.removeChild(a);
}
