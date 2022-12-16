import join from 'lodash/join';
import "./scss/style.scss";
import jpg from "./images/bild.jpg";

function component() {
  const element = document.createElement("div");

  // Uses the Lodash library to join the array
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

function image(source){
  const image = new Image();
  image.src = source;
  image.width = 500;

  return image;
}
document.body.appendChild(component());
document.body.appendChild(image(jpg));



