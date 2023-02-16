import { generateCartDOM } from "./shoesDisplay.js";

const shoppingCartOverlay = document.querySelector(".cart-overlay");
const shoppingCartBtn = document.querySelector(".shopping-cart");
const cartCloseBtn = document.querySelector(".cart-close");

shoppingCartBtn.addEventListener("click", () => {
  //   console.log("open cart");
  shoppingCartOverlay.classList.add("visible");
});

cartCloseBtn.addEventListener("click", () => {
  shoppingCartOverlay.classList.remove("visible");
});

export function openCart() {
  shoppingCartOverlay.classList.add("visible");
}
