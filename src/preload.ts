import { contextBridge, ipcRenderer } from "electron";

import type { IAPI } from "./types";

const API: IAPI = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  setTitle: (title) => ipcRenderer.send("setTitle", title),
};

contextBridge.exposeInMainWorld("API", API);
