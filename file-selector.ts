
export function fileSelector(): Promise<File[]> {
  return new Promise<File[]>((resolve, reject) => {
    const input = document.createElement('input');
    input.type = "file";
    input.onchange = (e: any) => {
      const files: FileList = e.target.files;
      resolve(Array.from(files));
    };
    input.oncancel = () => {
      reject('canceled');
    };
    input.click();
  });
}
