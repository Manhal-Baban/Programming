document.addEventListener("DOMContentLoaded", function () {
  const ordersContainer = document.getElementById("ordersContainer");
  const searchBox = document.getElementById("searchBox");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");
  const loginMessage = document.getElementById("loginMessage");
  const orderManager = document.getElementById("orderManager");

  // Load all orders from localStorage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  // ✅ Accept any password (no check)
  loginButton.addEventListener("click", function () {
    document.getElementById("loginBox").style.display = "none";
    orderManager.style.display = "block";
    displayOrders();
  });

  // 🧾 Show and filter orders
  function displayOrders() {
    ordersContainer.innerHTML = "";

    const searchTerm = searchBox.value.toLowerCase();

    // Filter orders by customer name, ID, pancake type, or delivery method
    let filteredOrders = orders.filter(function (order) {
      return (
        order.customerName.toLowerCase().includes(searchTerm) ||
        order.id.toString().includes(searchTerm) ||
        order.selectedPancake.toLowerCase().includes(searchTerm) ||
        order.deliveryMethod.toLowerCase().includes(searchTerm)
      );
    });

    // Sort orders by status: waiting → ready → delivered
    filteredOrders.sort(function (a, b) {
      const statusOrder = { waiting: 1, ready: 2, delivered: 3 };
      return statusOrder[a.status] - statusOrder[b.status];
    });

    // Loop through filtered orders and display them
    filteredOrders.forEach(function (order) {
      const orderDiv = document.createElement("div");
      orderDiv.className = "order " + order.status;

      orderDiv.innerHTML =
        "<h3>Order #" +
        order.id +
        "</h3>" +
        "<p><strong>Customer:</strong> " +
        order.customerName +
        "</p>" +
        "<p><strong>Pancake Type:</strong> " +
        order.selectedPancake +
        "</p>" +
        "<p><strong>Toppings:</strong> " +
        (order.toppings.join(", ") || "None") +
        "</p>" +
        "<p><strong>Extras:</strong> " +
        (order.extras.join(", ") || "None") +
        "</p>" +
        "<p><strong>Delivery:</strong> " +
        order.deliveryMethod +
        "</p>" +
        "<p><strong>Price:</strong> " +
        order.totalPrice.toFixed(2) +
        "€</p>" +
        "<label for='status-" +
        order.id +
        "'><strong>Status:</strong></label>" +
        "<select id='status-" +
        order.id +
        "' data-id='" +
        order.id +
        "'>" +
        "<option value='waiting' " +
        (order.status === "waiting" ? "selected" : "") +
        ">⏳ Waiting</option>" +
        "<option value='ready' " +
        (order.status === "ready" ? "selected" : "") +
        ">✅ Ready</option>" +
        "<option value='delivered' " +
        (order.status === "delivered" ? "selected" : "") +
        ">📦 Delivered</option>" +
        "</select><br><br>" +
        (order.status === "delivered"
          ? "<button class='delete-btn' data-id='" +
            order.id +
            "'>Delete Order</button>"
          : "");

      ordersContainer.appendChild(orderDiv);
    });

    addEventListeners();
  }

  // 🎛 Add dropdown and delete button actions
  function addEventListeners() {
    const dropdowns = document.querySelectorAll("select");

    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("change", function () {
        const id = parseInt(this.getAttribute("data-id"));
        const newStatus = this.value;

        const order = orders.find(function (o) {
          return o.id === id;
        });

        if (order) {
          order.status = newStatus;
          localStorage.setItem("orders", JSON.stringify(orders));
          displayOrders(); // Refresh view
        }
      });
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));

        // Remove order with matching ID
        orders = orders.filter(function (o) {
          return o.id !== id;
        });

        localStorage.setItem("orders", JSON.stringify(orders));
        displayOrders(); // Refresh view
      });
    });
  }

  // 🔍 Live search when typing
  searchBox.addEventListener("keyup", function () {
    displayOrders();
  });
});
