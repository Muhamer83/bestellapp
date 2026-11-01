var products = [
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

function renderHauptgerichte() {
  let menue = document.getElementById("menue");
  if (!menue) return;
  menue.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === "haupt") {
      menue.innerHTML += getProductHTML(products[i], i);
    }
  }
}

function renderBeilagen() {
  let menue = document.getElementById("beilagen");
  if (!menue) return;
  menue.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].category === "beilage" ||
      products[i].category === "extra"
    ) {
      menue.innerHTML += getProductHTML(products[i], i);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("menue")) renderHauptgerichte();
  if (document.getElementById("beilagen")) renderBeilagen();
});
