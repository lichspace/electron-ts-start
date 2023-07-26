import { Menu, BrowserWindow } from "electron";

type MenuOption = {
  mainWindow: BrowserWindow;
};

export const createMenu = ({ mainWindow }: MenuOption) => {
  const menu = Menu.buildFromTemplate([
    {
      label: "Coloring",
      submenu: [
        {
          label: "自动上色",
          submenu: [
            {
              label: "关于自动上色",
              click: () =>
                mainWindow.webContents.send(
                  "update-counter",
                  "动漫上色 版本 0.0.1"
                ),
            },
            {
              label: "退出",
              click: () => {},
            },
          ],
        },
        {
          click: () => mainWindow.webContents.send("update-counter", -1),
          label: "帮助",
          submenu: [
            {
                label: '关于智影'
            }
          ]
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);
};
