let basket = JSON.parse(localStorage.getItem("basket")) || [];

function saveBasket() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasketItem(i) {
  for (let j = 0; j < basket.length; j++) {
    if (basket[j].i === i) return basket[j];
  }
  return null;
}

function addToBasket(i) {
  let item = getBasketItem(i);
  if (item) {
    item.qty += 1;
  } else {
    basket.push({ i: i, qty: 1 });
  }
  saveBasket();
  renderBasket();
}

function changeQty(i, delta) {
  for (let j = 0; j < basket.length; j++) {
    if (basket[j].i === i) {
      basket[j].qty += delta;
      if (basket[j].qty <= 0) basket.splice(j, 1);
      break;
    }
  }
  saveBasket();
  renderBasket();
}

function removeItem(i) {
  for (let j = 0; j < basket.length; j++) {
    if (basket[j].i === i) {
      basket.splice(j, 1);
      break;
    }
  }
  saveBasket();
  renderBasket();
}

function clearBasket() {
  if (confirm("Möchtest du den Warenkorb wirklich löschen?")) {
    basket = [];
    saveBasket();
    renderBasket();
  }
}

function orderBasket() {
  if (basket.length === 0) return;
  alert("Deine Bestellung wird verarbeitet.");
  basket = [];
  saveBasket();
  renderBasket();
}

function renderBasket() {
  let content = document.getElementById("basket_content");
  if (!content) return;
  content.innerHTML = "";
  if (basket.length === 0) {
    content.innerHTML = "<p>Warenkorb leer</p>";
    document.getElementById("basket_total").textContent = "0,00 €";
  } else {
    calculateAndRender(content);
  }
}

function calculateAndRender(content) {
  let sum = 0;
  for (let j = 0; j < basket.length; j++) {
    let item = basket[j];
    let p = products[item.i];
    sum += p.price * item.qty;
    content.innerHTML += getBasketItemHTML(p, item);
  }
  document.getElementById("basket_total").textContent =
    sum.toFixed(2).replace(".", ",") + " €";
}

function toggleMenu() {
  let nav = document.getElementById("nav_links");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", renderBasket);
