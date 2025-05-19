document.addEventListener("DOMContentLoaded", function () {
  // Optional variables
  const form = document.getElementById("pancakeForm");

  const totalPriceBanner = document.getElementById("totalPrice");

  const totalPriceDisplay = document.getElementById("totalPriceDisplay");

  const seeOrderButton = document.getElementById("seeOrder");

  const summaryText = document.getElementById("summaryText");

  const typeSelect = document.getElementById("type");

  // Arrays to store selected toppings and extras
  let toppings = [];
  let extras = [];

  // One event listener for the entire form
  form.addEventListener("change", function (event) {
    const target = event.target;

    // Check which checkbox group the selection belongs to
    if (target.classList.contains("topping")) {
      handleToppings(target);
    } else if (target.classList.contains("extra")) {
      handleExtras(target);
    }
    updatePrice();
  });

  function handleToppings(checkbox) {
    const toppingName = checkbox.parentElement.textContent.trim(); // The label is the parent element in HTML
    if (checkbox.checked) {
      toppings.push(toppingName);
    } else {
      toppings = toppings.filter((t) => t !== toppingName);
    }
    console.log("toppings:", toppings);
  }

  function handleExtras(checkbox) {
    const extraName = checkbox.parentElement.textContent.trim(); // The label is the parent element in HTML
    if (checkbox.checked) {
      extras.push(extraName);
    } else {
      extras = extras.filter((e) => e !== extraName);
    }
    console.log("extras:", extras);
  }

  function updatePrice() {
    const pancakeType = document.getElementById("type");
    const selectedType = pancakeType.options[pancakeType.selectedIndex];
    let total = parseFloat(selectedType.getAttribute("data-price"));

    // Add €1 to the total price for each topping
    total += toppings.length * 1;

    // Go through the extras list and add the selected ones' prices
    let extraChoices = document.querySelectorAll(".extra");
    extraChoices.forEach((checkbox) => {
      if (checkbox.checked) {
        total = total + parseFloat(checkbox.getAttribute("data-price"));
      }
    });

    // Get the selected delivery method and add its price (can be zero)
    let delivery = document.querySelector("input[name='delivery']:checked");
    total += parseFloat(delivery.getAttribute("data-price"));

    // Format total price to two decimal places
    let formattedTotal = total.toFixed(2) + "€";
    totalPriceBanner.textContent = formattedTotal;
    totalPriceDisplay.textContent = formattedTotal;
  }

  seeOrderButton.addEventListener("click", function () {
    // Get the customer's name
    const customerName = document.getElementById("customerName").value.trim();
    const selectedType = typeSelect.options[typeSelect.selectedIndex];
    const delivery = document
      .querySelector("input[name=delivery]:checked")
      .parentElement.textContent.trim();

    // Show order details
    let summary = `<strong>Customer:</strong> ${
      customerName || "(no name)"
    }<br>`;
    summary += `Type: ${selectedType.value}<br>`;
    summary += `Toppings: ${
      toppings.length > 0 ? toppings.join(", ") : "No toppings"
    }<br>`;
    summary += `Extras: ${
      extras.length > 0 ? extras.join(", ") : "No extras"
    }<br>`;
    summary += `Delivery method: ${delivery}<br>`;
    summary += `Total price: ${totalPriceDisplay.textContent}`;

    summaryText.innerHTML = summary;
  });
});
