function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //Stop function for keys without audio data-key
  audio.currentTime = 0; //for key press before audio file has finished playing, rewind audio
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName != 'transform') return; //only listen to one transitionend event.thi
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);