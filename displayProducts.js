import { formatPrice } from "./formatPrice.js";

// products source
const products = [
  {
    id: 0,
    name: "Nike Air More Money Tan",
    color: "tan",
    price: 18000,
    image: "./Shoes Img/Nike-Air-More-Tan.jpg",
    amount: 1,
  },
  {
    id: 1,
    name: "Nike Air More Money White",
    color: "white",
    price: 22000,
    image: "./Shoes Img/Nike-Air-More-White.jpg",
    amount: 1,
  },
  {
    id: 2,
    name: "Nike Air More Money Black Platinum",
    color: "black",
    price: 25000,
    image: "Shoes Img/Nike-Air-More-Money-Black-Pure.jpg",
    amount: 1,
  },
];
const itemContainer = document.querySelector(".shoe-card-container");
// console.log(itemContainer);
let productDisplay = "";

// display purchaseable items in DOM
const displayProducts = () => {
  productDisplay = products.map((item) => {
    const { id, name, color, price, image } = item;
    console.log(item);
    const shoeArticle = document.createElement("article");
    const dataAttribute = document.createAttribute("data-id");
    shoeArticle.setAttributeNode(dataAttribute);
    dataAttribute.value = `${id}`;
    shoeArticle.classList.add(`shoe-card-${id + 1}`);
    shoeArticle.innerHTML = `<img src="${image}" alt="${name}" />
          <h3>${name}</h3>
          <div class="shoe-color-box-${color}"></div>
          <p class="card-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            maiores. Necessitatibus sint vero dolor labore.
          </p>
          <button class="cart-btn btn-${id + 1}">
            Add to cart<img src="./SVG/Plus.svg" />
          </button>
          <span class="shoe-price-${id + 1}">Price: ${formatPrice(
      price
    )}</span>`;

    itemContainer.appendChild(shoeArticle);
  });
};

export { products, itemContainer, displayProducts };
