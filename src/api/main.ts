import { BrowserWindow, IpcMainEvent } from "electron";

export const main = {
  setTitle(event: IpcMainEvent, title: string) {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  },
};
