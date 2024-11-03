import { initBackground } from "./background";
import { initLauncher } from "./launcher";
import { initQuickLaunch } from "./quick-launch";
import "./style.css";

const onReady = () => {
  initBackground();
  initQuickLaunch();
  initLauncher();
};

document.addEventListener("DOMContentLoaded", onReady);
