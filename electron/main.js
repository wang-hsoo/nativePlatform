const { app, BrowserWindow, ipcMain  } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    },
    autoHideMenuBar: true,
    frame: false
  });

  mainWindow.loadFile(path.join(__dirname, '../web-build/index.html'));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Add IPC listeners
ipcMain.on('message', (event, data) => {
  console.log(data); // 'Hello from React Native Web!'
  event.reply('reply', true);
});