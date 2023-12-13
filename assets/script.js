const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let i = 0;
const bannerImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const arrow_left = document.querySelector(".arrow_left");
const displayslide = (index) => {
  bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  console.log(i);
  for (let i = 0; i < dots.children.length; i++) {
    const dot = dots.children[i];
    if (i == index) {
      dot.className = "dot dot_selected";
    } else {
      dot.className = "dot";
    }
  }
};

arrow_left.addEventListener("click", () => {
  i--;
  if (i === -1) {
    i = slides.length - 1;
  }
  displayslide(i);
});

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => {
  i++;
  if (i === slides.length) {
    i = 0;
  }
  displayslide(i);
});

const dots = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("button");
  dot.className = "dot";
  dots.appendChild(dot);
  if (i === 0) {
    dot.className = "dot dot_selected";
  }
  dot.addEventListener("click", () => {
    displayslide(i);
  });
}
