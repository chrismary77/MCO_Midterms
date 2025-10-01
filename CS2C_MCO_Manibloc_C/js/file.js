let cart = [];

function addProduct(name) {
  cart.push(name);
  alert(name + " has been added to your cart!");
  updateCart();
}

function updateCart() {
  let cartCounter = document.getElementById("cart-count");
  if (cartCounter) {
    cartCounter.textContent = cart.length;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-card button").forEach(btn => {
    let name = btn.parentElement.querySelector("h3").textContent;
    btn.setAttribute("onclick", `addProduct('${name}')`);
  });
});
