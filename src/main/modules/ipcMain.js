import {ipcMain} from 'electron'
export default (win) => {
  ipcMain.on('message', (event, data) => {
    event.sender.send('reMessage', '主线程收到了：' + data)
  })
}
