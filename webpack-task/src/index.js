import "./index.scss";
import Header from "./components/header/header";
import KeyBoard from "./components/keyBoard/keyBoard";

const { body } = document;
const root = document.createElement("div");
root.id = "root";

root.append(Header);
root.append(KeyBoard);

body.prepend(root);
console.log(root);
