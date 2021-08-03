const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");

const btn21 = document.getElementById("btn21");
const btn22 = document.getElementById("btn22");

const btn31 = document.getElementById("btn31");
const btn32 = document.getElementById("btn32");

const btn41 = document.getElementById("btn41");
const btn42 = document.getElementById("btn42");

const btn51 = document.getElementById("btn51");
const btn52 = document.getElementById("btn52");

const input = document.getElementById("search");

btn11.addEventListener("mouseover", function () {
  btn11.href = "https://google.com/search?q=" + input.value;
});

btn12.addEventListener("mouseover", function () {
  btn12.href = "https://google.com/search?q=" + input.value;
});

btn21.addEventListener("mouseover", function () {
  btn21.href = "https://youtube.com/results?search_query=" + input.value;
});

btn22.addEventListener("mouseover", function () {
  btn22.href = "https://youtube.com/results?search_query=" + input.value;
});

btn31.addEventListener("mouseover", function () {
  btn31.href = "https://telegram.me/" + input.value;
});

btn32.addEventListener("mouseover", function () {
  btn32.href = "https://telegram.me/" + input.value;
});

btn41.addEventListener("mouseover", function () {
  btn41.href = "https://open.spotify.com/search/" + input.value;
});

btn42.addEventListener("mouseover", function () {
  btn42.href = "https://open.spotify.com/search/" + input.value;
});

btn51.addEventListener("mouseover", function () {
  btn51.href = "https://en.wikipedia.org/wiki/" + input.value;
});

btn52.addEventListener("mouseover", function () {
  btn52.href = "https://en.wikipedia.org/wiki/" + input.value;
});
