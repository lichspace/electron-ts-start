import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as API from "./api";
import { createMenu } from "./menu";

function createWindow() {
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
  });

  createMenu({mainWindow});
  mainWindow.loadFile(path.join(__dirname, "../index.html"));
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  // 注册事件
  ipcMain.on('setTitle', API.main.setTitle)

});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
