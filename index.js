import { listImages } from './services/api.js';
import { saveComment } from './services/saveComment.js';
import { theSwiper } from './services/swiper.js';

const inputComment = document.getElementById("comment");
const commentsContainer = document.getElementById("comments");
const button = document.getElementById("button");
const heartButton = document.getElementById("heart-button");
const swipeImages = document.getElementById("swiper-images");

let heartBlack = document.querySelector("#heart-black");
let favoriteIcon = document.querySelector("#heart-red")

const imagesData = await listImages();
theSwiper();

const lisImages = () => {
    const displayImage = imagesData.map(image => `<div class="swiper-slide"><img src="${image.download_url}" /></div>`);
    swipeImages.innerHTML = displayImage;
};

const renderComments = () => {
    !!localStorage.getItem("comments") || localStorage.setItem("comments", JSON.stringify([]));
    const allComments = JSON.parse(localStorage.getItem("comments"));

    const listComments = allComments.map(comment => `<p><b>Comment </b>${comment}</p>`);

    commentsContainer.innerHTML = listComments.join("");
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
};

heartButton.addEventListener('click', () => {
    let faviHeart = window.getComputedStyle(favoriteIcon).display;
    let blackHeart = window.getComputedStyle(heartBlack).display;

    faviHeart === "none" ?  favoriteIcon.style.display = "block" : favoriteIcon.style.display = "none";
    blackHeart === "none" ?  heartBlack.style.display = "block" : heartBlack.style.display = "none";

});

inputComment.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    if (!inputComment.value) return;
    createComment(inputComment.value);
  };
});

const cleanInput = () => {
    inputComment.value = "";
    inputComment.focus();
};

const createComment = (comment) => {
  commentsContainer.innerHTML += `<p><b>Comment </b>${comment}</p>`;
  saveComment(comment);
  renderComments();
  cleanInput();
};

button.addEventListener("click", () => {
  if (!inputComment.value) return;
  createComment(inputComment.value);
});

renderComments();
lisImages();

/* easter egg part */
const showEasterEgg = () => {
  let over = document.getElementById("easter-egg");
  over.onmouseover = () => {
    over.style.opacity = "1";
  }

  let out = document.getElementById("easter-egg");
  out.onmouseout = () => {
    out.style.opacity = "0";
  }
}
showEasterEgg()