// Product database
// category: "haupt", "beilage", "extra"

var products = [
  // --- Main dishes ---
  {
    name: "Pasta Napoli",
    ingredients: "mit Tomatensauce und frischem Basilikum",
    price: 11.5,
    image: "assets/img/pasta_napoli.jpg",
    category: "haupt",
  },
  {
    name: "Pasta Penne",
    ingredients: "mit Speck, Ei und Rahmsauce",
    price: 12.9,
    image: "assets/img/pasta_penne.jpg",
    category: "haupt",
  },
  {
    name: "Pizza Margherita",
    ingredients: "mit Tomatensauce und Mozzarella",
    price: 9.5,
    image: "assets/img/pizza_margherita.jpg",
    category: "haupt",
  },
  {
    name: "Pizza Funghi",
    ingredients: "mit Champignons und Mozzarella",
    price: 10.5,
    image: "assets/img/pizza_funghi.jpg",
    category: "haupt",
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "mit Schinken und Kaese",
    price: 11.0,
    image: "assets/img/pizza_prosciutto.jpg",
    category: "haupt",
  },
  {
    name: "Spaghetti Bolognese",
    ingredients: "mit Rindfleischsauce und Parmesan",
    price: 12.0,
    image: "assets/img/spaghetti_bolognese.jpg",
    category: "haupt",
  },
  {
    name: "Thai Curry",
    ingredients: "mit Kokosmilch, Gemuese und Reis",
    price: 14.5,
    image: "assets/img/thai_curry.jpg",
    category: "haupt",
  },
  {
    name: "Pad Thai",
    ingredients: "Reisnudeln mit Erdnüssen und Gemuese",
    price: 13.9,
    image: "assets/img/pad_thai.jpg",
    category: "haupt",
  },

  // --- Sides ---
  {
    name: "Knoblauchbrot",
    ingredients: "frisch gebacken, mit Knoblauchbutter",
    price: 4.5,
    image: "assets/img/supplements/knoblauchbrot.jpg",
    category: "beilage",
  },
  {
    name: "Gemischter Salat",
    ingredients: "mit Haus-Dressing",
    price: 5.9,
    image: "assets/img/supplements/salat.jpg",
    category: "beilage",
  },
  {
    name: "Pommes Frites",
    ingredients: "knusprig, mit Salz",
    price: 4.9,
    image: "assets/img/supplements/pommes.jpg",
    category: "beilage",
  },

  // --- Extras / sauces ---
  {
    name: "Extra Tomatensauce",
    ingredients: "hausgemachte Tomatensauce",
    price: 1.5,
    image: "assets/img/supplements/sauce_tomate.jpg",
    category: "extra",
  },
  {
    name: "Extra Knoblauchsauce",
    ingredients: "cremige Knoblauch-Joghurtsauce",
    price: 1.8,
    image: "assets/img/supplements/su.jpg",
    category: "extra",
  },
  {
    name: "Extra Chiliöl",
    ingredients: "sehr scharf",
    price: 1.2,
    image: "assets/img/supplements/chili.jpg",
    category: "extra",
  },
];

// Render main dishes into #menue
function renderHauptgerichte() {
  var menue = document.getElementById("menue");
  if (!menue) return;

  menue.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    if (p.category !== "haupt") continue;

    menue.innerHTML +=
      "<div class='produkt'>" +
      "<img class='produkt_img' src='" +
      p.image +
      "'>" +
      "<div class='textbereich'>" +
      "<h2>" +
      p.name +
      "</h2>" +
      "<p>" +
      p.ingredients +
      "</p>" +
      "<p class='preis'>" +
      p.price.toFixed(2).replace(".", ",") +
      " €</p>" +
      "</div>" +
      "<button class='plus' onclick='addToBasket(" +
      i +
      ")'>" +
      "<img src='assets/icons/plus.png'>" +
      "</button>" +
      "</div>";
  }
}

// Render sides + extras into #beilagen
function renderBeilagen() {
  var menue = document.getElementById("beilagen");
  if (!menue) return;

  menue.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    if (p.category !== "beilage" && p.category !== "extra") continue;

    menue.innerHTML +=
      "<div class='produkt'>" +
      "<img class='produkt_img' src='" +
      p.image +
      "'>" +
      "<div class='textbereich'>" +
      "<h2>" +
      p.name +
      "</h2>" +
      "<p>" +
      p.ingredients +
      "</p>" +
      "<p class='preis'>" +
      p.price.toFixed(2).replace(".", ",") +
      " €</p>" +
      "</div>" +
      "<button class='plus' onclick='addToBasket(" +
      i +
      ")'>" +
      "<img src='assets/icons/plus.png'>" +
      "</button>" +
      "</div>";
  }
}

// Auto-render the correct page menu (no inline script needed)
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("menue")) renderHauptgerichte();
  if (document.getElementById("beilagen")) renderBeilagen();
});
