import "normalize.css";
import "./style.css";

import oneup from "./assets/1up.ogg";
import gameover from "./assets/gameover.ogg";
import pipe from "./assets/土管.ogg";
import tread from "./assets/踏む.ogg";
import kick from "./assets/蹴る.ogg";
import coin from "./assets/コイン.ogg";
import jump from "./assets/ジャンプ.ogg";
import block from "./assets/ブロック.ogg";
import powerup from "./assets/パワーアップ.ogg";
import fireball from "./assets/ファイアーボール.ogg";

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
