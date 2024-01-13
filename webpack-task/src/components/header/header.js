import createElement from "helpers/createElement";
import "./header.scss";

const header = createElement("header", "header");

const title = createElement("h1", "title");
title.textContent = "Hangman";

const warning = createElement("p", "warning");
warning.textContent =
  "Hello, everybody! Please, use an English keyboard layout. Have a good game!";

header.append(title);
header.append(warning);

export default header;
