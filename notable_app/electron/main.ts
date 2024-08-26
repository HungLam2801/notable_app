declare var require: any
const { app, BrowserWindow } = require('electron/main');
const path = require('path');

import { fileURLToPath } from 'url';


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadFile('dist/index.html');

  //mainWindow.loadURL('http://localhost:5173'); // URL của Vite trong chế độ phát triển
} 

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
