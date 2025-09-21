//to an uppercase letter key
function keyFromEvent(e){
  if (e.key) return e.key.toUpperCase();

}

// Core: find pad+audio by key animate & play
function playByKey(key){
  const keys = document.querySelector(`.keys[data-key="${key}"]`);
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!keys || !audio) return;

  // visual feedback
  keys.classList.add('playing');
  setTimeout(() => keys.classList.remove('playing'), 130);

  // retrigger fast
  audio.currentTime = 0;
  audio.play().catch(()=>{ /* ignore until user interacts */ });
}

// Keyboard
window.addEventListener('keydown', (e) => {
  const key = keyFromEvent(e);
  playByKey(key);
});

// Mouse / touch
document.getElementById('kit').addEventListener('click', (e) => {
  const keys = e.target.closest('.keys');
  if (!keys) return;
  playByKey(keys.dataset.key.toUpperCase());
});
