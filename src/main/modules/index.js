import {BrowserWindow} from 'electron'
import appMenu from "./appMenu"
import ipcMain from "./ipcMain"

export default (win) => {
  ipcMain(win)
  appMenu(win)
}
