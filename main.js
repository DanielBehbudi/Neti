// (() => console.log("working"))();
const input = document.getElementById("input");
const root = document.getElementById("root");
const searchBtn = document.getElementById("btn");
const card = document.getElementById("card");

let inputValue = "";

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  root.innerHTML = "";
  inputValue = input.value;
  getData();
});

async function getData() {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${inputValue}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7c3e66b36msha48887b710fb453p11f533jsn9a8274591b80",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    result.d.map((movie) => {
      root.innerHTML += `
        <div id= "card"> 
            <img src="${movie.i.imageUrl}">
            <p> ${movie.l}</p>
            <p>Ranking:${movie.rank}</p>
        </div>`;
    });
  } catch (error) {
    console.error(error);
  }
}
