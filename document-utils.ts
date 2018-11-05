import {delay} from "../../utils/delay";

export function onDocumentMayLoad() {
    return Promise.race([
        new Promise((resolve) => {
            if (document.readyState === "complete") {
                resolve();
                return;
            }
            document.onreadystatechange = () => {
                if (document.readyState == "complete") {
                    setTimeout(resolve, 10);
                }
            };
        }),
        delay(3000)
    ]);
}
