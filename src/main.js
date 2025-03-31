import "./style.css";
import { links } from "./links.js";

const container = document.getElementById("links");
container.innerHTML = Object.entries(links)
    .map(
        ([category, items]) => `
        <h1>${category}</h1>
        ${items
            .map(
                (link) =>
                    `<div><a href="${link.url}" target="_blank">${link.dsc || link.url}</a></div>`,
            )
            .join("")}
    `,
    )
    .join("");
