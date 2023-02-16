import { displayProducts, itemContainer, products } from "./displayProducts.js";
import { addItemToStorage, getCurrentStorage, addToCart } from "./app.js";
import { store } from "./app.js";
import { formatPrice } from "./formatPrice.js";
import { openCart } from "./toggleCart.js";

const shoppingCartContainer = document.querySelector(".cart-items");
console.log(shoppingCartContainer);
const searchBar = document.querySelector(".search-bar");
// console.log(searchBar.value);

// display products in DOM from local source
if (itemContainer) {
  displayProducts();
  // add a specific item to cart
  itemContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-1")) {
      console.log("btn 1 clicked");
      const productOne = products[0];
      const { id, name, color, price, image, amount } = productOne;
      addItemToStorage(id, name, color, price, image, amount);
      addToCart(id, name, price, image, amount);
      openCart();
      cartTotalDOM();
    }
    if (e.target.classList.contains("btn-2")) {
      console.log("btn 2 clicked");
      const productTwo = products[1];
      const { id, name, color, price, image, amount } = productTwo;
      addItemToStorage(id, name, color, price, image, amount);
      addToCart(id, name, price, image, amount);
      openCart();
      cartTotalDOM();
    }
    if (e.target.classList.contains("btn-3")) {
      console.log("btn 3 clicked");
      const productThree = products[2];
      const { id, name, color, price, image, amount } = productThree;
      addItemToStorage(id, name, color, price, image, amount);
      addToCart(id, name, price, image, amount);
      openCart();
      cartTotalDOM();
    }
  });
}
// get total cart item count
// displayCartItemCount();
// function displayCartItemCount() {
//   const itemAmount = store.reduce(function (acc, cartItem) {
//     return (acc += cartItem.amount);
//   }, 0);
//   console.log(itemAmount);
// }

// increase local storage amount for specific item
function increaseStorageAmount(id) {
  let currentStore = getCurrentStorage("itemList");
  currentStore.map(function (item) {
    if (item.id === id) {
      console.log("it works");
      console.log(item.amount);
      let newAmount = parseInt(item.amount) + 1;
      console.log(newAmount);
      item.amount = newAmount;
    }
    return item;
  });
  localStorage.setItem("itemList", JSON.stringify(currentStore));
}

// decrease local storage amount for specific item
function decreaseStorageAmount(id) {
  let currentStore = getCurrentStorage("itemList");
  currentStore.map(function (item) {
    if (item.id === id) {
      console.log("it works");
      console.log(item.amount);
      let newAmount = parseInt(item.amount) - 1;
      console.log(newAmount);
      item.amount = newAmount;
    }
    return item;
  });
  localStorage.setItem("itemList", JSON.stringify(currentStore));
}

// add/decrease shopping cart amount
shoppingCartContainer.addEventListener("click", function (e) {
  // add/decrease amount to nike tan
  if (e.target.classList.contains("cart-arrow-up-0")) {
    console.log("arrow up");
    increaseStorageAmount(0);
    updateCartQuantityDOM(0);
    cartTotalDOM();
  }
  if (e.target.classList.contains("cart-arrow-down-0")) {
    console.log("arrow down");
    decreaseStorageAmount(0);
    updateCartQuantityDOM(0);
    cartTotalDOM();
    let quantityValue = e.target.parentElement.children[1].textContent;
    let itemContainer = e.target.parentElement.parentElement;
    // console.log(quantityValue);
    // console.log(itemContainer);
    if (quantityValue == 0) {
      removeCartItem(0);
      itemContainer.remove();
    }
  }
  // add/decrese amount to nike white
  if (e.target.classList.contains("cart-arrow-up-1")) {
    console.log("arrow up");
    increaseStorageAmount(1);
    updateCartQuantityDOM(1);
    cartTotalDOM();
  }
  if (e.target.classList.contains("cart-arrow-down-1")) {
    console.log("arrow down");
    decreaseStorageAmount(1);
    updateCartQuantityDOM(1);
    cartTotalDOM();
    let quantityValue = e.target.parentElement.children[1].textContent;
    let itemContainer = e.target.parentElement.parentElement;
    if (quantityValue == 0) {
      removeCartItem(1);
      itemContainer.remove();
    }
  }
  // add/decrese amount to nike black
  if (e.target.classList.contains("cart-arrow-up-2")) {
    console.log("arrow up");
    increaseStorageAmount(2);
    updateCartQuantityDOM(2);
    cartTotalDOM();
  }
  if (e.target.classList.contains("cart-arrow-down-2")) {
    console.log("arrow down");
    decreaseStorageAmount(2);
    updateCartQuantityDOM(2);
    cartTotalDOM();
    let quantityValue = e.target.parentElement.children[1].textContent;
    let itemContainer = e.target.parentElement.parentElement;
    if (quantityValue == 0) {
      removeCartItem(2);
      itemContainer.remove();
    }
  }
});

// remove item from local storage functionality

function removeCartItem(id) {
  let currentStore = getCurrentStorage();
  let filteredStore = currentStore.filter(function (item) {
    if (item.id !== id) {
      console.log(item);
      return item;
    }
  });
  localStorage.setItem("itemList", JSON.stringify(filteredStore));
}

// generate cart DOM

export function generateCartDOM() {
  let currentStore = getCurrentStorage();
  currentStore.map(function (item) {
    const { id, name, price, image, amount } = item;
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

    shoppingCartContainer.appendChild(article);
  });
}

// function that retrieves the amount of a specific item from local storage

function retrieveItemAmount(id) {
  let amount;
  let currentStore = getCurrentStorage();
  currentStore.map(function (item) {
    if (item.id == id) {
      return (amount = item.amount);
    }
  });
  return amount;
}

// update cart item amount in the DOM
function updateCartQuantityDOM(id) {
  console.log("update function");
  let domAmount = document.querySelector(`.item-quantity-${id}`);
  console.log(domAmount);
  let newValue = retrieveItemAmount(`${id}`);
  console.log(newValue);
  domAmount.innerHTML = newValue;
}

// calculate cart total and display in DOM
function cartTotalDOM() {
  let currentStorage = getCurrentStorage();
  let currentCartTotal;
  currentStorage.reduce(function (acc, item) {
    currentCartTotal = acc += item.price * item.amount;
    console.log(currentCartTotal);
    return acc;
  }, 0);
  let totalDOM = document.querySelector(".cart-total");
  totalDOM.innerHTML = `Total: ${formatPrice(currentCartTotal)}`;
}

cartTotalDOM();

// items present in the cart notification

function cartNotification() {
  let currentStore = getCurrentStorage();
  if (currentStore.length > 0) {
    console.log("There are items in the cart");
    const cartRedDot = document.querySelector(".red-dot-shoes");
    console.log(cartRedDot);
    if (cartRedDot) {
      cartRedDot.classList.add("visibility");
    }
  }
}

cartNotification();

// search functionality
if (searchBar) {
  searchBar.addEventListener("keyup", function (e) {
    e.preventDefault();
    let colorSearch = searchBar.value.trim().toLowerCase();
    console.log(colorSearch);
    filterShoeCards(colorSearch);
  });

  function filterShoeCards(searchTerm) {
    const shoeNames = [...document.getElementsByTagName("h3")];
    shoeNames.splice(0, 2);
    console.log(shoeNames);
    shoeNames.forEach(function (item) {
      // console.log(item.textContent);
      // console.log(item.parentElement);
      let itemName = item.textContent.toString().toLowerCase();
      console.log(itemName);
      let itemParent = item.parentElement;
      if (!itemName.includes(searchTerm)) {
        itemParent.classList.add("filtered");
      } else {
        itemParent.classList.remove("filtered");
      }
    });
  }
}
