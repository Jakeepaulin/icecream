let icecreams = [
  {
    name: "Vanilla",
    cost: 3,
    quantity: 0,
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1912&q=80",
  },
  {
    name: "Chocolate",
    cost: 4,
    quantity: 0,
    image:
      "https://images.unsplash.com/photo-1504855101244-34edfbd4b861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80",
  },
  {
    name: "Strawberry",
    cost: 5,
    quantity: 0,
    image:
      "https://images.unsplash.com/photo-1532678465554-94846274c297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Sprinkles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg",
    cost: 1,
    quantity: 0,
  },
  {
    name: "Choclate Chips",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360",
    cost: 2,
    quantity: 0,
  },
];

// NOTE How to Add item to Cart
function addIcecreamToCart(name) {
  console.log("You Bought Vanilla");
  let icecream = icecreams.find((icecream) => icecream.name == name);
  // @ts-ignore
  icecream.quantity++;
  console.log(icecream);
  drawCart();
}

//NOTE how to Dynamically draw images to screen
function drawIcecreams() {
  let icecream = document.getElementById("icecreams");
  let template = "";

  icecreams.forEach((icecream) => {
    template += `
      <div class="col-md-4 item">
      <img src="${icecream.image}" alt="" class="img-fluid my-2" onclick="addIcecreamToCart('${icecream.name}')"/>
      <div class="d-flex justify-content-around">
      <div>${icecream.name}</div>
      <div>$${icecream.cost}</div>
      </div>
      </div>
      `;
  });
  // @ts-ignore
  icecream.innerHTML = template;
}

// NOTE How to show item Cart
function drawCart() {
  let cart = document.getElementById("cart");
  let template = "";

  icecreams.forEach((icecream) => {
    // @ts-ignore
    if (icecream.quantity > 0) {
      template += `
      <div class="col-md-12 d-flex justify-content-between text-dark py-2 px-3">
      <h4><b>${icecream.name}</b> x ${icecream.quantity} </h4>
      <h4>$${icecream.cost}</h4>
      </div>
      `;
    }
  });
  // @ts-ignore
  cart.innerHTML = template;
  drawTotal();
}

// NOTE how to add up the total of items Costs
function drawTotal() {
  let total = 0;
  icecreams.forEach((icecream) => {
    total += icecream.quantity * icecream.cost;
  });
  console.log("Your total is", total);
  // @ts-ignore
  document.getElementById("total").innerText = total.toFixed(2);
}

//NOTE how to clear cart
function checkout() {
  if (window.confirm("Are you sure you are ready to Buy?")) {
    icecreams.forEach((icecream) => {
      icecream.quantity = 0;
    });
    drawCart();
  }
}

drawIcecreams();
