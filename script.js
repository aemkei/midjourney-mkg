window.windowIsMidJourneyGallery = true;

const slideshow = document.getElementById('slideshow');
const prompt = document.getElementById('prompt');
let currentID = null;

function update(data) {

  if (data.id == currentID) {
    return
  }

  currentID = data.id;
  slideshow.innerHTML = '';

  const img = new Image();
  img.src = data.path;

  img.onload = function () {
    slideshow.appendChild(img);
  }

  const text = `"${data.prompt}"`;

  prompt.innerHTML = 'Prompt: <br><br>';

  text.split(' ').forEach((text, index) => {
    const span = document.createElement('span');
    span.innerHTML = text + ' ';

    span.style.animationDelay = `${(index + 3) * 300}ms`;

    prompt.append(span);
  });
}

let timerID;

function fadeOutAndUpdate(data) {

  if (!currentID) {
    update(data);
    return;
  }

  clearTimeout(timerID);

  document.body.classList.add('fade-out');
  timerID = setTimeout(fadeIn, 4 * 1000);

  function fadeIn() {
    document.body.classList.remove('fade-out');
    update(data);
  }
}

function checkHash(url) {
  const hash = url.match(/#(.*)/)?.[1];

  if (hash) {
    const data = JSON.parse(decodeURIComponent(hash));
    console.log('hash:', data);
    fadeOutAndUpdate(data);
  }
}

window.addEventListener("hashchange", (event) => {
  console.log(event.newURL)
  checkHash(event.newURL);
});

checkHash(document.location.href);