function formatPrice(price) {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
}

export { formatPrice };
