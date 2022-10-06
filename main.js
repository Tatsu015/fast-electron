const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})



app.on('ready', function () {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// app.on('ready', function () {
//     var subpy = require('child_process').spawn('python', ['./hello.py']);
//     var rq = require('request-promise');
//     var mainAddr = 'http://localhost:5000';

//     var openWindow = function () {
//         mainWindow = new BrowserWindow({ width: 400, height: 300 });
//         mainWindow.loadURL(mainAddr);

//         // 終了処理
//         mainWindow.on('closed', function () {
//             mainWindow = null;
//             subpy.kill('SIGINT');
//         });
//     };

//     var startUp = function () {
//         rq(mainAddr)
//             .then(function (htmlString) {
//                 console.log('server started');
//                 openWindow();
//             })
//             .catch(function (err) {
//                 startUp();
//             });
//     };

//     startUp();
// });
