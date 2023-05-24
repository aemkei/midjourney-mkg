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

  img.onload = function(){
    slideshow.appendChild(img);
  }

  const text = `"${data.prompt}"`;

  prompt.innerHTML = 'Prompt: <br><br>';
  
  text.split(' ').forEach((text, index) => {
    const span = document.createElement('span');
    span.innerHTML = text + ' ';

    span.style.animationDelay = `${(index+3) * 300}ms`;

    prompt.append(span);
  });  
}

let timerID;

function fadeOutAndUpdate(data){

  clearTimeout(timerID);

  document.body.classList.add('fade-out');
  timerID = setTimeout(fadeIn, 4 * 1000);

  function fadeIn(){
    document.body.classList.remove('fade-out');
    update(data);
  }
}
