document.querySelector(
  "h1"
).innerHTML = `<img class="normal-size" src="./messi.jpg" />`;

const imageElement = document.querySelector("img");

imageElement.addEventListener("mouseover", increaseSize);

function increaseSize() {
  imageElement.classList = "large-size";
}

imageElement.addEventListener("mouseout", originalSize);

function originalSize() {
  imageElement.classList = "normal-size";
}
