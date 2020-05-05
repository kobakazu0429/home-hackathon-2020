import "./style.css";

import oneupOgg from "./assets/1up.ogg";
import gameoverOgg from "./assets/gameover.ogg";
import pipeOgg from "./assets/pipe.ogg";
import treadOgg from "./assets/tread.ogg";
import kickOgg from "./assets/kick.ogg";
import coinOgg from "./assets/coin.ogg";
import jumpOgg from "./assets/jump.ogg";
import blockOgg from "./assets/block.ogg";
import powerupOgg from "./assets/powerup.ogg";
import fireballOgg from "./assets/fireball.ogg";

import oneupMp3 from "./assets/1up.mp3";
import gameoverMp3 from "./assets/gameover.mp3";
import pipeMp3 from "./assets/pipe.mp3";
import treadMp3 from "./assets/tread.mp3";
import kickMp3 from "./assets/kick.mp3";
import coinMp3 from "./assets/coin.mp3";
import jumpMp3 from "./assets/jump.mp3";
import blockMp3 from "./assets/block.mp3";
import powerupMp3 from "./assets/powerup.mp3";
import fireballMp3 from "./assets/fireball.mp3";

const addPlayListener = (elementId: string, src: string) => {
  const audio = new Audio(src);

  const element = document.getElementById(elementId);
  if (!element) return;
  element.addEventListener("click", () => {
    audio.play();
  });
};

window.addEventListener("load", () => {
  const isIOS = /iP(hone|(o|a)d)/.test(navigator.userAgent);
  const isSafari = /Safari/.test(navigator.userAgent);

  // iOS and Safari do not support ogg
  if (isIOS || isSafari) {
    addPlayListener("1up", oneupMp3);
    addPlayListener("gameover", gameoverMp3);
    addPlayListener("pipe", pipeMp3);
    addPlayListener("tread", treadMp3);
    addPlayListener("kick", kickMp3);
    addPlayListener("coin", coinMp3);
    addPlayListener("jump", jumpMp3);
    addPlayListener("block", blockMp3);
    addPlayListener("powerup", powerupMp3);
    addPlayListener("fireball", fireballMp3);
  } else {
    addPlayListener("1up", oneupOgg);
    addPlayListener("gameover", gameoverOgg);
    addPlayListener("pipe", pipeOgg);
    addPlayListener("tread", treadOgg);
    addPlayListener("kick", kickOgg);
    addPlayListener("coin", coinOgg);
    addPlayListener("jump", jumpOgg);
    addPlayListener("block", blockOgg);
    addPlayListener("powerup", powerupOgg);
    addPlayListener("fireball", fireballOgg);
  }
});
