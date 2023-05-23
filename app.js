const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");
const SHOW_NEW_IMG = () => {
  if (currentImgIndex === THUMBNAILS.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};
const SHOW_PREVIOUS_IMG = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};
const CLOSE_POPUP = () => {
  POPUP.classList.add("fade-out");
  setTimeout(() => {
    POPUP.classList.add("hidden");
    POPUP.classList.remove("fade-out");
  }, 300);
};

let currentImgIndex;

THUMBNAILS.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
  });
});

POPUP_CLOSE.addEventListener("click", CLOSE_POPUP);

ARROW_RIGHT.addEventListener("click", SHOW_NEW_IMG);

ARROW_LEFT.addEventListener("click", SHOW_PREVIOUS_IMG);

document.addEventListener("keydown", (e) => {
  if (!POPUP.classList.contains("hidden")) {
  }

  if (e.code === "ArrowRight" && e.keyCode === 39) {
    SHOW_NEW_IMG();
  }

  if (e.code === "ArrowLeft" && e.keyCode === 37) {
    SHOW_PREVIOUS_IMG();
  }

  if (e.code === "Escape" && e.keyCode === 27) {
    CLOSE_POPUP();
  }
});

POPUP.addEventListener("click", (e) => {
  if (e.target === POPUP) {
    CLOSE_POPUP();
  }
});
