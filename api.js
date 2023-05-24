const { app, BrowserWindow, Menu, MenuItem } = require('electron');

const browserURL = 'https://www.midjourney.com/app/users/95555de4-677b-4957-ad17-b778dbfd19ac/';


const localHTML = 'index.html';

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

const init = () => {

  const galleryWindow = new BrowserWindow({
    width: 1080,
    height: 720
  });

  const midjourneyWindow = new BrowserWindow({
    width: 900,
    height: 900
  });
  midjourneyWindow.loadURL(browserURL);

  midjourneyWindow.webContents.on('before-input-event', (event, input) => {
    if (input.type == 'keyDown' && input.meta && input.code == 'Enter') {

      let id;
      const url = midjourneyWindow.webContents.getURL();
      console.log('URL:', url);

      if (url.match(/\?jobId\=/)) {
        const urlObj = new URL(url);
        id = urlObj.searchParams.get('jobId');
      } else {
        const match = url.match(/\/jobs\/([^/]*)/);
        id = match && match[1];
      }

      if (id) {
        console.log('loading job:', id);
        fetchJob(id);
      } else {
        console.log('no job ID found');
      }
    }
  });

  // galleryWindow.webContents.openDevTools();

  galleryWindow.loadFile(localHTML);

  function fetchJob(id){

    const script = `
      fetch("https://www.midjourney.com/api/app/job-status/", {
        "headers": {
          "accept": "*/*",
          "content-type": "application/json",
        },
        "body": '{"jobIds":["${id}"]}',
        "method": "POST"
      }).then(resp => resp.json())
    `;

    midjourneyWindow.webContents.executeJavaScript(script, true)
    .then((result) => {
      const data = {
        prompt: result.prompt,
        id: result.id,
        path: result.image_paths[0]
      };

      console.log(data);

      galleryWindow.webContents.executeJavaScript(
        `fadeOutAndUpdate(${JSON.stringify(data)})`, 
        true
      )
    })
    .catch((error) => {
      console.error('error:', error);
    });
  }

  fetchJob('8301b547-4e00-422f-b4bf-883873f42055');
}

app.whenReady().then(() => {
  init();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});