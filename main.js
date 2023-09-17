const products = [
  {
    name: "ASUS Vivobook Go E1504FA-BQ204W",
    price: 439,
    stars: 4.5,
    reviews: 16,
    seller: "ASUS",
    relevance: 3,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694692954/2_PC_Componentes_DOM_Proyect/Products_Pictures/1_g7nksk.webp",
  },
  {
    name: "Alurin Go Start Intel Celeron N4020",
    price: 199,
    stars: 4.2,
    reviews: 9,
    seller: "PcComponentes",
    relevance: 2,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693054/2_PC_Componentes_DOM_Proyect/Products_Pictures/2_b2s2et.webp",
  },
  {
    name: "MSI Katana 15 B12VFK-095XES",
    price: 1029,
    stars: 4.8,
    reviews: 165,
    seller: "MSI",
    relevance: 4,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693133/2_PC_Componentes_DOM_Proyect/Products_Pictures/3_hgxij9.webp",
  },
  {
    name: "PcCom Revolt 4050 Intel Core i5",
    price: 1059,
    stars: 0,
    reviews: 0,
    seller: "PcComponentes",
    relevance: 5,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693208/2_PC_Componentes_DOM_Proyect/Products_Pictures/4_bfalpw.webp",
  },
  {
    name: "Lenovo IdeaPad 3 15ITL6",
    price: 439,
    stars: 5,
    reviews: 38,
    seller: "Lenovo",
    relevance: 2,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693292/2_PC_Componentes_DOM_Proyect/Products_Pictures/5_p0ikju.webp",
  },
  {
    name: "Lenovo IdeaPad 3 15ALC6 AMD Ryzen 7",
    price: 479,
    stars: 4,
    reviews: 138,
    seller: "Lenovo",
    relevance: 3,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693364/2_PC_Componentes_DOM_Proyect/Products_Pictures/6_sqeaut.webp",
  },
  {
    name: "HP 15S-FQ5085NS Intel Core i5",
    price: 489,
    stars: 4.2,
    reviews: 194,
    seller: "PcComponentes",
    relevance: 4,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693427/2_PC_Componentes_DOM_Proyect/Products_Pictures/7_h52n0w.webp",
  },
  {
    name: "HP 15S-FQ5013NS Intel Core i5",
    price: 489,
    stars: 4.2,
    reviews: 164,
    seller: "PcComponentes",
    relevance: 4,
    new: true,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693493/2_PC_Componentes_DOM_Proyect/Products_Pictures/8_vlixqs.webp",
  },
  {
    name: "ASUS VivoBook 15 F1502ZA",
    price: 589,
    stars: 4,
    reviews: 251,
    seller: "ASUS",
    relevance: 5,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693574/2_PC_Componentes_DOM_Proyect/Products_Pictures/9_wcrkll.webp",
  },
  {
    name: "Lenovo IdeaPad 1 15ADA7 AMD Ryzen 3",
    price: 329,
    stars: 5,
    reviews: 51,
    seller: "Lenovo",
    relevance: 2,
    new: false,
    image:
      "https://res.cloudinary.com/dbinlquvz/image/upload/v1694693644/2_PC_Componentes_DOM_Proyect/Products_Pictures/10_wpfe2j.webp",
  },
];

const productSection = document.querySelector(".pc-main-products");
const relevantButton = document.querySelector(".pc-button-relevance");
const lowestPriceButton = document.querySelector(".pc-button-lowest-price");
const highestPriceButton = document.querySelector(".pc-button-highest-price");
const mostSellingButton = document.querySelector(".pc-button-most-selling");
const newsButton = document.querySelector(".pc-button-news");

const filterSection = document.querySelector(".pc-sidebar-filters");

const cleanFiltersDiv = document.createElement("div");
cleanFiltersDiv.className = "pc-sidebar-clear-filters --pc-display-flex-column";
filterSection.append(cleanFiltersDiv);

const sellersDiv = document.createElement("div");
sellersDiv.className = "pc-sidebar-filter-sellers --pc-display-flex-column";
filterSection.append(sellersDiv);

const priceDiv = document.createElement("div");
priceDiv.className = "pc-sidebar-filters-price --pc-display-flex-column";
filterSection.append(priceDiv);

let isRelevanceSorted = false;
let isLowerPriceSorted = false;
let isHighestPriceSorted = false;
let isMostSellingSorted = false;
let isNewsSorted = false;

let priceInput;
let clearFiltersButton;
let sellersSelect;

const productTemplate = (image, name, price, seller) => {
  return `<article class="grid-item">
  <img src="${image}" alt="${name}">

  <div class="pc-article-buttoms">
    <button class="pc-partner">Patrocinado</button>
    <button class="pc-free-shipping">Envío gratis</button>  
  </div>
  <p class="product-name">${name}</p>
  <p class="product-price">${price}€</p>
  <p class="pc-product-shipping-info">Recibelo mañana</p>
  <p class="pc-product-seller">Vendido por <strong>${seller}</strong></p>
</article>`;
};

const filtersTemplate = () => {
  cleanFiltersDiv.innerHTML += `<button class="pc-clear-filters">Borrar filtros</button>`;
  sellersDiv.innerHTML += `<h4>Vendedores</h4>
  <div class="pc-filter-sellers-select --pc-display-flex-column">
    <select id="pc-select-filter" class="pc-select-filter">
      <option selected disabled>Elige un vendedor</option>
      <option>PcComponentes</option>
      <option>ASUS</option>
      <option>Lenovo</option>
      <option>MSI</option>
    </select>
  </div>`;
  priceDiv.innerHTML += `<h4>Precio</h4>
  <input class="pc-filter-input-price" placeholder="Escribe tu precio" type="number">
  <button class="pc-submit-price-button" type="submit">Buscar</button>`;

  


  clearFiltersButton = document.querySelector(".pc-clear-filters");
  sellersSelect = document.querySelector(".pc-select-filter");
  const submitPriceButton = document.querySelector(".pc-submit-price-button");
  priceInput = document.querySelector(".pc-filter-input-price");

  clearFiltersButton.addEventListener("click", onCleanFiltersButton);
  sellersSelect.addEventListener("change", onSelect);
  submitPriceButton.addEventListener("click", onSubmitPriceButton);


};

const printProducts = () => {
  products.forEach((product) => {
    productSection.innerHTML += productTemplate(
      product.image,
      product.name,
      product.price,
      product.seller
    );
  });
};

const onRelevantButton = () => {
  productSection.innerHTML = "";

  if (isRelevanceSorted) {
    printProducts();
  } else {
    const reorderedArrayByRelevance = products
      .slice()
      .sort((a, b) => b.relevance - a.relevance);

    reorderedArrayByRelevance.forEach((product) => {
      productSection.innerHTML += productTemplate(
        product.image,
        product.name,
        product.price,
        product.seller
      );
    });
  }
  //Cambio el valor para que se quede ordenado
  isRelevanceSorted = !isRelevanceSorted;

  // Agrega o elimina la clase "active" según el estado actual
  relevantButton.classList.toggle("pc-active");
};

const onLowestPriceButton = () => {
  productSection.innerHTML = "";

  if (isLowerPriceSorted) {
    printProducts();
  } else {
    const reorderedArrayByLowestPrice = products
      .slice()
      .sort((a, b) => a.price - b.price);

    reorderedArrayByLowestPrice.forEach((product) => {
      productSection.innerHTML += productTemplate(
        product.image,
        product.name,
        product.price,
        product.seller
      );
    });
  }
  isLowerPriceSorted = !isLowerPriceSorted;
  lowestPriceButton.classList.toggle("pc-active");
};

const onHighestPriceButton = () => {
  productSection.innerHTML = "";

  if (isHighestPriceSorted) {
    printProducts();
  } else {
    const reorderedArrayByHighestPrice = products
      .slice()
      .sort((a, b) => b.price - a.price);

    reorderedArrayByHighestPrice.forEach((product) => {
      productSection.innerHTML += productTemplate(
        product.image,
        product.name,
        product.price,
        product.seller
      );
    });
  }
  isHighestPriceSorted = !isHighestPriceSorted;
  highestPriceButton.classList.toggle("pc-active");
};

const onMostSellingButton = () => {
  productSection.innerHTML = "";

  if (isMostSellingSorted) {
    printProducts();
  } else {
    const reorderedArrayByMostSelling = products
      .slice()
      .sort((a, b) => b.stars - a.stars);

    reorderedArrayByMostSelling.forEach((product) => {
      productSection.innerHTML += productTemplate(
        product.image,
        product.name,
        product.price,
        product.seller
      );
    });
  }
  isMostSellingSorted = !isMostSellingSorted;
  mostSellingButton.classList.toggle("pc-active");
};

const onNewsButton = () => {
  productSection.innerHTML = "";
  if (isNewsSorted) {
    printProducts();
  } else {
    const arrayFilteredByNew = products.filter(
      (product) => product.new === true
    );

    arrayFilteredByNew.forEach((product) => {
      productSection.innerHTML += productTemplate(
        product.image,
        product.name,
        product.price,
        product.seller
      );
    });
  }
  isNewsSorted = !isNewsSorted;
  newsButton.classList.toggle("pc-active");
};

const onCleanFiltersButton = () => {
  priceInput.value = "";
  sellersSelect.value = "Elige un vendedor";

  productSection.innerHTML = "";
  printProducts();
}

const onSelect = (event) => {
  const selectedOption = event.target.value;
  productSection.innerHTML = "";

  const filteredArray = products.filter(
    (product) => product.seller === selectedOption
  );
  filteredArray.forEach((product) => {
    productSection.innerHTML += productTemplate(
      product.image,
      product.name,
      product.price,
      product.seller
    );
  });
};

const onSubmitPriceButton = () => {
  const maxPrice = parseFloat(priceInput.value);

  const filteredArray = products.filter((product) => product.price < maxPrice);
  productSection.innerHTML = "";

  filteredArray.forEach((product) => {
    productSection.innerHTML += productTemplate(
      product.image,
      product.name,
      product.price,
      product.seller
    );
  });
};



relevantButton.addEventListener("click", onRelevantButton);
lowestPriceButton.addEventListener("click", onLowestPriceButton);
highestPriceButton.addEventListener("click", onHighestPriceButton);
mostSellingButton.addEventListener("click", onMostSellingButton);
newsButton.addEventListener("click", onNewsButton);

filtersTemplate();
printProducts();
