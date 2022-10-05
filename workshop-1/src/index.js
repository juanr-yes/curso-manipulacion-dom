const API = "https://platzi-avo.vercel.app";
let appNode = document.getElementById("js-mount");
appNode.addEventListener("click", (e) => {
  console.log(e.target.nodeName)
  if (e.target.nodeName == "H4") {
    window.alert("Hola");
  }
})

//// Intl
// 1- Formatear fechas
// 2- Formatear monedas

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD"
  }).format(price)
  return newPrice;
}

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const getAvocados = async (urlApi) => {
  try {
    const avocados = await fetchData(`${urlApi}/api/avo`);
    const todosLosItems = [];
    avocados.data.forEach(avocado => {
      // Card
      const card = document.createElement("div");
      card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300 cursor-pointer";
      // Image
      let image = document.createElement("img");
      image.src = `${API}/${avocado.image}`;
      image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      // Title
      let title = document.createElement("h4");
      title.textContent = avocado.name;
      // title.style = "font-size: 2rem";
      // title.style.fontSize = "3rem";
      // title.classList.add("text-2xl", "text-red-600")
      title.className = "text-lg"
      // Price
      let price = document.createElement("h5");
      price.textContent = formatPrice(avocado.price);
      price.className = "text-gray-600 mb-1"
      // Short description
      let shortDesc = document.createElement("p");
      shortDesc.textContent = avocado.attributes.description.slice(0, 110)+'...'
      shortDesc.className = "text-indigo-800 text-xs"
      // Title, price and desc Container
      const titlePriceDesc = document.createElement("div")
      titlePriceDesc.className = "text-center md:text-left";
      titlePriceDesc.append(title, price, shortDesc);

      card.append(image, titlePriceDesc);
      todosLosItems.push(card)
    });
    appNode.append(...todosLosItems);
  } catch (error) {
    console.log(error);
  }
}

getAvocados(API);