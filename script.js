const slideshow = document.getElementById('slideshow');
const prompt = document.getElementById('prompt');

function update(image) {
  slideshow.innerHTML = '';

  const img = new Image();
  img.src = image.path;
  // img.src = image.path + "?" + Math.random();

  img.onload = function(){
    slideshow.appendChild(img);
  }

  const text = `"${image.prompt}"`;

  prompt.innerHTML = 'Prompt: <br><br>';
  
  text.split(' ').forEach((text, index) => {
    const span = document.createElement('span');
    span.innerHTML = text + ' ';

    span.style.animationDelay = `${(index+3) * 300}ms`;

    prompt.append(span);
  });  
}


function test(){


  update(testData[0]);

  let index = 0;

  next();

  function next(){
    index++;
    setTimeout(fadeOut, 30 * 1000)
  }

  function fadeOut(){    
    document.body.classList.add('fade-out');
    setTimeout(fadeIn, 4 * 1000)
  }

  function fadeIn(){
    document.body.classList.remove('fade-out');
    update(testData[index % testData.length]);
    next();
  }
}

test();