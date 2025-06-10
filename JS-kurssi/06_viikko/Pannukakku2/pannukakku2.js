document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pancakeForm");
  const totalPriceBanner = document.getElementById("totalPrice");
  const totalPriceDisplay = document.getElementById("totalPriceDisplay");
  const seeOrderButton = document.getElementById("seeOrder");
  const summaryText = document.getElementById("summaryText");
  const typeSelect = document.getElementById("type");

  let toppings = [];
  let extras = [];

  form.addEventListener("change", function (event) {
    const target = event.target;

    if (target.classList.contains("topping")) {
      handleToppings(target);
    } else if (target.classList.contains("extra")) {
      handleExtras(target);
    }
    updatePrice();
  });

  function handleToppings(checkbox) {
    const toppingName = checkbox.parentElement.textContent.trim();
    if (checkbox.checked) {
      toppings.push(toppingName);
    } else {
      toppings = toppings.filter(function (t) {
        return t !== toppingName;
      });
    }
  }

  function handleExtras(checkbox) {
    const extraName = checkbox.parentElement.textContent.trim();
    if (checkbox.checked) {
      extras.push(extraName);
    } else {
      extras = extras.filter(function (e) {
        return e !== extraName;
      });
    }
  }

  function updatePrice() {
    const selectedType = typeSelect.options[typeSelect.selectedIndex];
    let total = parseFloat(selectedType.getAttribute("data-price"));

    const toppingBoxes = document.querySelectorAll(".topping");
    toppingBoxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        total += 1;
      }
    });

    const extraBoxes = document.querySelectorAll(".extra");
    extraBoxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        total += parseFloat(checkbox.getAttribute("data-price"));
      }
    });

    const delivery = document.querySelector("input[name='delivery']:checked");
    total += parseFloat(delivery.getAttribute("data-price"));

    const formatted = total.toFixed(2) + "€";
    totalPriceBanner.textContent = formatted;
    totalPriceDisplay.textContent = formatted;
  }

  seeOrderButton.addEventListener("click", function () {
    const customerName = document.getElementById("customerName").value.trim();
    const selectedType = typeSelect.options[typeSelect.selectedIndex];
    const deliveryInput = document.querySelector(
      "input[name=delivery]:checked"
    );
    const delivery = deliveryInput.parentElement.textContent.trim();
    const totalPrice = parseFloat(totalPriceDisplay.textContent);

    let summary =
      "<strong>Customer:</strong> " + (customerName || "(no name)") + "<br>";
    summary += "Type: " + selectedType.value + "<br>";
    summary +=
      "Toppings: " +
      (toppings.length > 0 ? toppings.join(", ") : "No toppings") +
      "<br>";
    summary +=
      "Extras: " +
      (extras.length > 0 ? extras.join(", ") : "No extras") +
      "<br>";
    summary += "Delivery method: " + delivery + "<br>";
    summary += "Total price: " + totalPrice.toFixed(2) + "€";
    summaryText.innerHTML = summary;

    // ✅ SAVE ORDER TO LOCALSTORAGE
    const order = {
      id: Date.now(),
      customerName: customerName || "(no name)",
      selectedPancake: selectedType.value,
      toppings: toppings,
      extras: extras,
      deliveryMethod: delivery,
      totalPrice: totalPrice,
      status: "waiting",
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  });
});
