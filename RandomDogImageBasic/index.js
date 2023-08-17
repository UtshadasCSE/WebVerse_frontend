const imgShow = document.getElementById("dogImage");
const button = document.getElementById("btn");
function randomIamges() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((image) => {
      imgShow.innerHTML = `<img src='${image.message}'/>`;
    });
}
button.onclick = () => {
  randomIamges();
};
