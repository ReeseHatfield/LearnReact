const { app, BrowserWindow } = require('app/electron')
const isDev = require('electron-is-dev')
const path = require('path')
const url = require('url')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    if (isDev) {
        win.loadURL('http://127.0.0.1:5173')
    } else {
        win.loadURL(
            url.format({
                pathname: path.join(__dirname, '../dist/index.html'),
                protocol: 'file:',
                slashes: true
            })
        )
    }
}

app.whenReady().then(createWindow)