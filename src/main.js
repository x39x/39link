export function renderLinks(containerId, links) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = Object.entries(links)
        .map(
            ([category, items]) => `
            <h1>${category}</h1>
            ${items
                .map(
                    (link) =>
                        `<div><a href="${link.url}" target="_blank" rel="noopener noreferrer nofollow">${link.dsc || link.url}</a></div>`,
                )
                .join("")}
        `,
        )
        .join("");
}
