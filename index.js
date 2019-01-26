const electron = require("electron")
const { app, BrowserWindow } = electron

app.on("ready", () => {
    let win = new BrowserWindow({ width: 350, height: 245,frame:false,resizable:false });
    win.loadURL(`file://${__dirname}/index.html`)
})

app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })