function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const butnStart = document.querySelector('[data-start]');
const butnStop = document.querySelector('[data-stop]');

butnStart.addEventListener("click", e => { 
    timeoutId = setInterval(() => { 
        body.style.backgroundColor = getRandomHexColor();
        butnStart.disabled = true;
        butnStop.disabled = false;
        
    },1000)
});

butnStop.addEventListener('click', e => { 
    butnStop.disabled = true;
    butnStart.disabled = false;
    clearInterval(timeoutId);
});
