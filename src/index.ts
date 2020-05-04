import "normalize.css";
import "./style.css";

import oneup from "./assets/1up.ogg";

const addPlayListener = (elementId: string, src: string) => {
  const audio = new Audio();
  audio.preload = "none";
  audio.src = src;

  const element = document.getElementById(elementId);
  if (!element) return;
  element.addEventListener("click", () => {
    audio.play();
  });
};

window.addEventListener("load", () => {
  addPlayListener("1up", oneup);
});
