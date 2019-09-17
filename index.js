// import neccessary functions from lit-html;
import { html, render } from "./node_modules/lit-html/lit-html";

// create the template & store it in a variable
const myTemplate = name =>
  html`
    <p>Hello ${name}</p>
  `;

// render the template
render(myTemplate("Sakib"), document.body);
