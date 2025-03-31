// ობიექტების მასივი (პროდუქტების სია)
let products = [
  { product: "მონიტორი", price: 500 },
  { product: "კლავიატურა", price: 75 },
  { product: "მაუსი", price: 45 },
  { product: "მონიტორი", price: 500 },
  { product: "კლავიატურა", price: 75 },
  { product: "მაუსი", price: 45 },
];

// კალათაში პროდუქტების ცხრილი
let cart = [];

// პროდუქტის კალათაში დამატების ფუნქცია
function addToCart(product, price) {
  cart.push({ product, price });
  displayCart();
}

// კალათის შინაარსის განახლების ფუნქცია
function displayCart() {
  let cartItems = document.getElementById("cartItems");
  let totalPrice = 0;

  // კალათის შინაარსის განახლება
  cartItems.innerHTML = ""; // გასუფთავება

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - ${item.price} ლარი`;
    cartItems.appendChild(li);
    li.onclick = function () {
      delitem(index);
    };
    totalPrice += item.price;
  });

  // ჯამის განახლება
  document.getElementById("totalPrice").textContent = totalPrice;
}

// პროდუქტების ღილაკების შექმნა
let productList = document.getElementById("productList");
products.forEach((product) => {
  let productCard = document.createElement("div");
  productCard.classList.add("product-card");

  let button = document.createElement("button");
  button.textContent = `${product.product} - ${product.price} ლარი`;
  button.onclick = () => addToCart(product.product, product.price);
  productCard.appendChild(button);
  productList.appendChild(productCard);
});

//ელემენტის წაშლა კალათიდან
function delitem(index) {
  cart.splice(index, 1);
  displayCart();
}

// კალათის დეტალების გამოჩენა/დამალვა
function toggleCartDetails() {
  let cartItems = document.getElementById("cartItems");

  if (cartItems.style.display === "none" || cartItems.style.display === "") {
    cartItems.style.display = "block";
  } else {
    cartItems.style.display = "none";
  }
}
