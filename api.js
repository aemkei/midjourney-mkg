const { app, BrowserWindow } = require('electron');

const browserURL = 'https://www.midjourney.com/app/collections/jiovjZKXTb2hbc0TnETStA/';

const apiURL = 'https://www.midjourney.com/api/app/recent-jobs/?amount=10&dedupe=true&jobStatus=completed&jobType=upscale&orderBy=new&page=1&searchType=advanced&type=all&userId=75250145-d9b5-48be-b4fd-60ae39237d59';

const localHTML = 'index.html';

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

const init = () => {
  const midjourneyWindow = new BrowserWindow();
  midjourneyWindow.loadURL(browserURL);
  // midjourneyWindow.webContents.openDevTools();
 
  const galleryWindow = new BrowserWindow({
    width: 1080,
    height: 720
  });
  
  galleryWindow.loadFile(localHTML);

  let firstRun = true;

  function update(){
    midjourneyWindow.webContents.executeJavaScript(
      `fetch("${apiURL}").then(resp => resp.json())`, 
      true
    )
    .then((result) => {
      const image = result[0];

      console.log({
        prompt: image.prompt,
        id: image.id,
        path: image.image_paths[0]
      });

      if (firstRun) {
        firstRun = false;
      }

    })
    .catch((error) => {
      console.error('error:', error);
    });
  }

  setInterval(update, 15 * 1000);
  update();
}

app.whenReady().then(() => {
  init();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});