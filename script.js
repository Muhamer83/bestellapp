let basket = JSON.parse(localStorage.getItem("basket"));

if (!basket) {
  basket = [];
}

function saveBasket() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function addToBasket(i) {
  let item = null;

  for (let j = 0; j < basket.length; j++) {
    if (basket[j].i === i) {
      item = basket[j];
      break;
    }
  }

  if (item) {
    item.qty += 1;
  } else {
    basket.push({ i: i, qty: 1 });
  }

  saveBasket();
  renderBasket();
}

function changeQty(i, delta) {
  let item = null;
  let index = -1;

  for (let j = 0; j < basket.length; j++) {
    if (basket[j].i === i) {
      item = basket[j];
      index = j;
      break;
    }
  }

  if (!item) {
    return;
  }

  item.qty += delta;

  if (item.qty <= 0) {
    basket.splice(index, 1);
  }

  saveBasket();
  renderBasket();
}

function clearBasket() {
  basket = [];
  localStorage.removeItem("basket");
  renderBasket();
}

function renderBasket() {
  const basketContent = document.getElementById("basket_content");
  const basketTotal = document.getElementById("basket_total");

  if (!basketContent || !basketTotal) {
    return;
  }

  basketContent.innerHTML = "";

  if (basket.length === 0) {
    basketContent.innerHTML = "<p>Warenkorb leer</p>";
    basketTotal.textContent = "0,00 €";
    return;
  }

  let sum = 0;

  for (let j = 0; j < basket.length; j++) {
    const item = basket[j];
    const product = products[item.i];

    if (!product) {
      continue;
    }

    const lineTotal = product.price * item.qty;
    sum += lineTotal;

    basketContent.innerHTML +=
      "<div class='basket_item'>" +
      "<div class='basket_item_main'>" +
      "<span class='basket_item_name'>" +
      product.name +
      "</span>" +
      "<div class='basket_qty_controls'>" +
      "<img class='qty_btn' src='assets/icons/minus.png' alt='-' onclick='changeQty(" +
      item.i +
      ", -1)'>" +
      "<span class='basket_qty'>" +
      item.qty +
      "</span>" +
      "<img class='qty_btn' src='assets/icons/plus.png' alt='+' onclick='changeQty(" +
      item.i +
      ", 1)'>" +
      "</div>" +
      "</div>" +
      "<span class='basket_item_price'>" +
      lineTotal.toFixed(2).replace(".", ",") +
      " €</span>" +
      "</div>";
  }

  basketTotal.textContent = sum.toFixed(2).replace(".", ",") + " €";
}

document.addEventListener("DOMContentLoaded", renderBasket);
