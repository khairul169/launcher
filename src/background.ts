import * as blurhash from "blurhash";

const bgHash =
  "|ZCshDM^M_axogogWCWAWA-@WAWBj]axaxj[j]ay9boGobWCR%ayt7ofj[4,xZoeWCaxj[ofj]j[V=ofaxa}ofj[WCWVfP$|WEj^ofofayWBaya{s+R*ogs;axWBayj[j[RiWUj]j[WVj[j[axayRioKflfSa{axaxfPa#";
const bgUrl = "/images/1226538.webp";

const onLoaded = () => {
  const searchBar = document.querySelector(".search-bar") as HTMLDivElement;
  if (searchBar) {
    searchBar.classList.add("loaded");
    searchBar.style.opacity = "1";
  }

  const quickLaunch = document.querySelector(".quick-launch") as HTMLDivElement;
  if (quickLaunch) {
    quickLaunch.classList.add("loaded");
    quickLaunch.style.opacity = "1";
  }
};

export const initBackground = () => {
  const hashCanvas = document.getElementById("bg-hash") as HTMLCanvasElement;
  if (!hashCanvas) {
    throw new Error("Could not find canvas");
  }

  hashCanvas.width = 32;
  hashCanvas.height = 18;

  const pixels = blurhash.decode(bgHash, 32, 18);
  const ctx = hashCanvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get 2d context");
  }

  const imageData = ctx.createImageData(hashCanvas.width, hashCanvas.height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  // Load background image
  const bg = document.getElementById("bg-main") as HTMLDivElement;
  const img = new Image();
  img.src = bgUrl;
  img.onload = () => {
    bg.style.backgroundImage = `url(${bgUrl})`;
    bg.style.opacity = "1";
    bg.classList.add("loaded");

    setTimeout(() => {
      // remove hashCanvas from dom
      hashCanvas.remove();
    }, 2000);

    onLoaded();
  };
};
