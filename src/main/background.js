'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import fixPath from 'fix-path'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import registerModule from './modules'
const isDevelopment = process.env.NODE_ENV !== 'production'


fixPath()

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: isDevelopment ? 1700 : 1500,
    height: 800,
    minWidth: 1200,
    minHeight: 640,
    center: true,
    frame: true, // 不创建frameless窗口
    fullscreenable: true,
    backgroundColor: '#eee',
    titleBarStyle: 'hidden',
    resizable: true,
    transparent: true,
    autoHideMenuBar: true,
    title: '资产管理系统',
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      enableRemoteModule: true,
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://../index.html')
  }

  win.on('closed', () => {
    win = null
  })

  registerModule(win)
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

const getTheLock = app.requestSingleInstanceLock()
if(!getTheLock){
  app.quit()
} else {
  app.on('second-instance', (event,commandLine,workingDirectory) => {
    if(mainWindow){
      if(mainWindow.isMinimized()){
        mainWindow.restore()
      }
      mainWindow.focus()
      mainWindow.show()
    }
  })
}
