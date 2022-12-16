function component() {
  const element = document.createElement("div");

  // Uses the Lodash library to join the array
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

import join from 'lodash/join';
import "./scss/style.scss";
import jpg from "./images/bild.jpg";

