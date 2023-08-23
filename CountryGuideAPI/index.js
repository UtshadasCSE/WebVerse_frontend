const countryName = document.getElementById("countryName").value;
const btn = document.getElementById("btn");
const result_show = document.getElementById("result-show");

btn.onclick = () => {
  let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      result_show.innerHTML = `
      <div class="img">
      <img src="${data[0].flags.svg}" alt="" />
      <h2>${data[0].name.official}</h2>
    </div>
    <div class="info">
      <p>Capital🏙️:${data[0].capital}</p>
      <p>Continent🌍:${data[0].continents}</p>
      <p>Population👥:${data[0].population}</p>
      <p>Currency💸:${
        data[0].currencies[Object.keys(data[0].currencies)].name
      } - ${Object.keys(data[0].currencies)[0]}</p>
      <p>Common Languages🗣️:${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ")}</p>
    </div>`;
    });
};
