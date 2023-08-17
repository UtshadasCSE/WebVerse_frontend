const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

const jokeShow = document.getElementById("joke");
const catagory = document.getElementById("catagory");
const jokeInfo = document.querySelector(".jokeInfo");
const btn = document.getElementById("btn");

function getJoke() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      jokeShow.innerHTML = json.joke;
      catagory.innerHTML = json.category;
    });
}
btn.onclick = () => {
  jokeInfo.style.display = "block";
  getJoke();
};
