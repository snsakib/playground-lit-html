# Workflow
## Setup:
1. First install Polymer CLI `npm i -g polymer-cli`
2. Create a `index.html` file
3. Create a `index.js` file
4. Insert a `<script>` tag inside the `<head>` tag to link the `index.js` file **(add type="module")**
`<script type="module" src="index.js"></script>`
5. Run the dev server: `polymer serve`

## Write Code (index.js):
- Install lit-html from npm: `npm i lit-html`
- Import neccessary functions from lit-html
`import { html, render } from "./node_modules/lit-html/lit-html";`
- Create the template & store it in a variable:


    const myTemplate = name => html`<p>Hello ${name}</p>`;
- Render the template:
   

     render(myTemplate("Sakib"), document.body);
