console.log("Nike Air More Money E-Commerce Project");

import "./toggleCart.js";
import { formatPrice } from "./formatPrice.js";
export let store = getCurrentStorage("itemList");
console.log(store);
const mainCartContainer = document.querySelector(".cart-items");

//////////////////////////////////////////////////////
// add item to local storage
function addItemToStorage(id, name, color, price, image, amount) {
  const addedItem = {
    id: id,
    name: name,
    color: color,
    price: price,
    image: image,
    amount: amount,
  };
  let currentStorageList = getCurrentStorage("itemList");
  console.log(currentStorageList);
  currentStorageList.push(addedItem);
  localStorage.setItem("itemList", JSON.stringify(currentStorageList));
}

// add to cart functionality
function addToCart(id, name, price, image, amount) {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  const dataAttribute = document.createAttribute("data-id");
  article.setAttributeNode(dataAttribute);
  dataAttribute.value = `${id}`;
  article.innerHTML = `<img
                src="${image}"
                class="cart-item-img"
              />
              <h4 class="cart-item-name">${name}</h4>
              <span class=cart-item-price>$${formatPrice(price)}</span>
              <div class="cart-quantity">
                <img src="./SVG/Arrow-Up-1.svg" class="cart-arrow-up-${id}" />
                <span class="item-quantity-${id}">${amount}</span>
                <img src="./SVG/Arrow-Down-1.svg" class="cart-arrow-down-${id}" />
              </div>`;

  mainCartContainer.appendChild(article);
}

// access local storage functionality
function getCurrentStorage() {
  const currentItems = JSON.parse(localStorage.getItem("itemList"));
  console.log(currentItems);
  if (currentItems) {
    return JSON.parse(localStorage.getItem("itemList"));
  } else {
    return [];
  }
}

function getCurrentCart() {
  let currentStoredItems = getCurrentStorage();
  currentStoredItems.map(function (item) {});
}
getCurrentCart();

// cart persistence functionality in home page

function cartPersistence() {
  let currentStore = getCurrentStorage();
  currentStore.map(function (item) {
    const { id, name, price, image, amount } = item;
    addToCart(id, name, price, image, amount);
  });
}

cartPersistence();

// item present in the cart functionality

function cartNotification() {
  let currentStore = getCurrentStorage();
  if (currentStore.length > 0) {
    console.log("There are items in the cart");
    const cartRedDot = document.querySelector(".red-dot");
    console.log(cartRedDot);
    if (cartRedDot) {
      cartRedDot.classList.add("visibility");
    }
  }
}

cartNotification();

export { addItemToStorage, addToCart, getCurrentStorage };
