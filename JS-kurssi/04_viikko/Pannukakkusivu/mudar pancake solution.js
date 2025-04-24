document.addEventListener("DOMContentLoaded", function () {
  const typeSelect = document.getElementById("type");
  const toppingCheckboxes = document.querySelectorAll(".topping");
  const extraCheckboxes = document.querySelectorAll(".extra");

  typeSelect.addEventListener("change", updatePrice);
  console.log("type of order changed");
  toppingCheckboxes.forEach((topping) => {
    topping.addEventListener("change", updatePrice);
  });

  extraCheckboxes.forEach((extra) =>
    extra.addEventListener("change", updatePrice)
  );
  updatePrice();
});

function updatePrice() {
  const typeSelect = document.getElementById("type");
  const toppingCheckboxes = document.querySelectorAll(".topping:checked");
  const extraCheckboxes = document.querySelectorAll(".extra:checked");

  let total = parseFloat(typeSelect.value);

  total += toppingCheckboxes.length * 1;
  extraCheckboxes.forEach((extra) => {
    console.log("extra topping added");
    total += parseFloat(extra.value);
    console.log("total price for now is: ", total);
  });

  const formattedTotal = total.toFixed(2) + "€";
  document.getElementById("totalPrice").textContent = formattedTotal;
  document.getElementById("totalPriceDisplay").textContent = formattedTotal;
}
