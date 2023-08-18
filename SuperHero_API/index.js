const superHero_Token = "10223569763528853";
const BASE_URL = `https://superheroapi.com/api.php/${superHero_Token}`;
// from html file
const inputName = document.getElementById("inputName");
const searchBtn = document.getElementById("searchBtn");
const randomGen = document.getElementById("randomGen");

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      display(hero);
    });
};
function getSuperHeros(id) {
  fetch(`https://superheroapi.com/api.php/${superHero_Token}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      display(json);
    });
}
function display(json) {
  const showImage = document.getElementById("herosInfo");
  const name = document.getElementById("name");
  const intelligence = document.getElementById("intelligence");
  const strength = document.getElementById("strength");
  const speed = document.getElementById("speed");
  const occupation = document.getElementById("occupation");

  showImage.innerHTML = `<img src="${json.image.url}"/>`;
  name.innerHTML = `Name:${json.name}`;
  intelligence.innerHTML = `Intelligence🧠:${json.powerstats.intelligence}`;
  strength.innerHTML = `Strength💪:${json.powerstats.strength}`;
  speed.innerHTML = `Speed💨:${json.powerstats.speed}`;
  occupation.innerHTML = `Occupation💼:${json.work.occupation}`;
}
randomGen.onclick = () => {
  let randomID = Math.floor(Math.random() * 731) + 1;
  getSuperHeros(randomID);
};
searchBtn.onclick = () => {
  getSearchSuperHero(inputName.value);
};
