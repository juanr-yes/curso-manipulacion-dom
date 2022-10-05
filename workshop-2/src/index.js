import {registerImage} from './lazy';

const API = "https://randomfox.ca/";
const appNode = document.getElementById("images");
const addImage = document.querySelector("button");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const getImage = async (urlApi) => {
  try {
    const apiImage = await fetchData(`${urlApi}/floof`);
    const card = document.createElement("div");
    card.className = "p-4";
    const image = document.createElement("img");
    image.dataset.src = apiImage.image;
    image.className = "mx-auto";
    image.width = "320";
    card.append(image);
    appNode.append(card);
    registerImage(image);
  } catch (error) {
    console.log(error);
  }
}

addImage.addEventListener("click", () => {
  getImage(API)
});