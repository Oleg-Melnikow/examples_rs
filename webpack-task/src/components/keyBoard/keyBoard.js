import createElement from "helpers/createElement";
import "./keyBoard.scss";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const keys = [
  {
    key: "a",
    code: "KeyA",
  },
  {
    key: "b",
    code: "KeyB",
  },
  {
    key: "c",
    code: "KeyC",
  },
  {
    key: "d",
    code: "KeyD",
  },
  {
    key: "e",
    code: "KeyE",
  },
  {
    key: "f",
    code: "KeyF",
  },
  {
    key: "g",
    code: "KeyG",
  },
  {
    key: "h",
    code: "KeyH",
  },
  {
    key: "i",
    code: "KeyI",
  },
  {
    key: "j",
    code: "KeyJ",
  },
  {
    key: "k",
    code: "KeyK",
  },
  {
    key: "l",
    code: "KeyL",
  },
  {
    key: "m",
    code: "KeyM",
  },
  {
    key: "n",
    code: "KeyN",
  },
  {
    key: "o",
    code: "KeyO",
  },
  {
    key: "p",
    code: "KeyP",
  },
  {
    key: "q",
    code: "KeyQ",
  },
  {
    key: "r",
    code: "KeyR",
  },
  {
    key: "s",
    code: "KeyS",
  },
  {
    key: "t",
    code: "KeyT",
  },
  {
    key: "u",
    code: "KeyU",
  },
  {
    key: "v",
    code: "KeyV",
  },
  {
    key: "w",
    code: "KeyW",
  },
  {
    key: "x",
    code: "KeyX",
  },
  {
    key: "y",
    code: "KeyY",
  },
  {
    key: "z",
    code: "KeyZ",
  },
];

document.addEventListener;

const keyBoard = createElement("section", "key-board");
keys.forEach((el) => {
  const { code, key } = el;
  const elementKey = createElement("div", "key-board__item");
  elementKey.classList.add(code);
  elementKey.textContent = key.toUpperCase();

  elementKey.addEventListener("click", (event) => {
    if (!event.target.classList.contains("active")) {
      console.log(event.target.outerText);
      event.target.classList.add("active");
    }
  });

  keyBoard.append(elementKey);
});

export default keyBoard;
