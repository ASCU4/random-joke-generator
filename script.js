const jokecontainer = document.getElementById("joke");
const button = document.getElementById("button");
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

let getJoke = () => {
    jokecontainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokecontainer.textContent = `${item.joke}`;
        jokecontainer.classList.add("fade");
    });
}
button.addEventListener("click",getJoke);

getJoke();



