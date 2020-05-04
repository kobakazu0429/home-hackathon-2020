import "normalize.css";
import "./style.css";

import oneup from "./assets/1up.ogg";
import gameover from "./assets/gameover.ogg";
import pipe from "./assets/pipe.ogg";
import tread from "./assets/tread.ogg";
import kick from "./assets/kick.ogg";
import coin from "./assets/coin.ogg";
import jump from "./assets/jump.ogg";
import block from "./assets/block.ogg";
import powerup from "./assets/powerup.ogg";
import fireball from "./assets/fireball.ogg";

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
  addPlayListener("gameover", gameover);
  addPlayListener("pipe", pipe);
  addPlayListener("tread", tread);
  addPlayListener("kick", kick);
  addPlayListener("coin", coin);
  addPlayListener("jump", jump);
  addPlayListener("block", block);
  addPlayListener("powerup", powerup);
  addPlayListener("fireball", fireball);
});
