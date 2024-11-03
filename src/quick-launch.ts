import { launcherItems } from "./launcher";

export const initQuickLaunch = () => {
  const container = document.querySelector(".quick-launch .items");
  if (!container) {
    throw new Error("Could not find quick-launch container");
  }

  const pinnedItems = launcherItems.filter((item) => item.pinned);

  container.innerHTML = pinnedItems
    .filter((item) => item.disabled !== true)
    .map((item) => {
      return `
      <a href="${item.href}" class="item" rel="noopener noreferrer" title="${item.name}">
        <img src="${item.icon}" alt="${item.name}" />
      </a>
    `;
    })
    .join("");
};
