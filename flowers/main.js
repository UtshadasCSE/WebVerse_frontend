onload = () => {
  document.body.classList.remove("container");
};
function music(audioName) {
  let audio = new Audio(audioName);
  audio.loop = true;
  audio.play();
}
music("/assets/opiya.mp3");
