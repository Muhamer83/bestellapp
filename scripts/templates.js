function getProductHTML(p, i) {
  let preis = p.price.toFixed(2).replace(".", ",");
  return `
    <div class="produkt">
      <img class="produkt_img" src="${p.image}">
      <div class="textbereich">
        <h2>${p.name}</h2><p>${p.ingredients}</p>
        <p class="preis">${preis} €</p>
      </div>
      <button class="plus" onclick="addToBasket(${i})">
        <img src="assets/icons/plus.png">
      </button>
    </div>`;
}

function getBasketItemHTML(p, item) {
  let preis = (p.price * item.qty).toFixed(2).replace(".", ",");
  let trash = "";
  if (item.qty >= 2)
    trash = `<img class="qty_btn trash_btn" src="assets/icons/trash.png" onclick="removeItem(${item.i})">`;
  return `
    <div class="basket_item">
      <div class="basket_item_main">
        <span class="basket_item_name">${p.name}</span>
        <div class="basket_qty_controls">
          <img class="qty_btn" src="assets/icons/minus.png" onclick="changeQty(${item.i}, -1)">
          <span class="basket_qty">${item.qty}</span>
          <img class="qty_btn" src="assets/icons/plus.png" onclick="changeQty(${item.i}, 1)">${trash}
        </div>
      </div><span class="basket_item_price">${preis} €</span>
    </div>`;
}
