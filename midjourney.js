(function () {

  if (window.windowIsMidJourneyGallery && currentID) {
    return;
  }

  const origin = 'https://www.midjourney.com';
  const galleryURL = 'https://aem1k.com/midjourney-mkg/';

  let id;
  const location = document.location;
  console.log('URL:', location);
  
  // check if on midjourney domain
  if (location.origin != origin) {
    document.location.href = origin;
    return;
  }

  // try to get job
  if (location.href.match(/\?jobId\=/)) {
    const url = new URL(location.href);
    console.log(url);
    id = url.searchParams.get('jobId');
  } else {
    const match = location.href.match(/\/jobs\/([^/]*)/);
    id = match && match[1];
  }

  if (!id) {
    alert('No job ID found. Please open a single image.');
    return;
  }

  // load job meta data
  console.log('loading job:', id);

  const options ={ 
    headers: {
      "accept": "*/*",
      "content-type": "application/json",
    },
    body: `{"jobIds":["${id}"]}`,
    method: 'POST'
  };

  fetch('/api/app/job-status/', options)
    .then(resp => resp.json())
    .then(result => {
      const data = {
        prompt: result.prompt,
        id: result.id,
        path: result.image_paths[0]
      };
  
      console.log(result,data);

      const hash = encodeURIComponent(JSON.stringify(data));
      const location = `${galleryURL}#${hash}`;

      if (window.mkgGalleryWindow && mkgGalleryWindow.closed == false) {
        mkgGalleryWindow.location = location
      } else {
        window.mkgGalleryWindow = window.open(location, 'gallery');
      }  
   });
}) ();