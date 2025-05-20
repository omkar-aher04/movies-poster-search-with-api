const form = document.querySelector("form");
const input = form.querySelector("input");
const BASE_PATH = "https://image.tmdb.org/t/p/original";

const API_KEY = "0a0ac63a794f52cce913169db8058e9f";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        input.value +
        "&include_adult=false&language=en-US&page=1&api_key=" +
        API_KEY
    );
    const result = await response.json();
    console.log(result.results);
    displayData(result.results);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  results.innerHTML = "";
  const fragment = document.createDocumentFragment();
  data.forEach((obj) => {
    const image = document.createElement("img");
    image.classList.add("images");
    image.src = BASE_PATH + obj.poster_path;
    fragment.append(image);
  });
  results.append(fragment);
}
