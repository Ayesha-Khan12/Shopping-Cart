function checkout() {
    let item1Price = parseInt(prompt("Enter the price of item 1:"));
    let quantity1 = parseInt(prompt("Enter the quantity of item 1:"));
    let item2Price = parseInt(prompt("Enter the price of item 2:"));
    let quantity2 = parseInt(prompt("Enter the quantity of item 2:"));
    let shippingCharges = parseInt(prompt("Enter the shipping charges:"));

    if (isNaN(item1Price) || isNaN(quantity1) || isNaN(item2Price) || isNaN(quantity2) || isNaN(shippingCharges)) {
      alert("Please provide valid inputs!");
      return;
    }

    let totalItem1 = item1Price * quantity1;
    let totalItem2 = item2Price * quantity2;
    let totalCost = totalItem1 + totalItem2 + shippingCharges;

    let receipt = `
      <p>Price of Item 1: <strong>${item1Price}</strong></p>
      <p>Quantity of Item 1: <strong>${quantity1}</strong></p>
      <p>Price of Item 2: <strong>${item2Price}</strong></p>
      <p>Quantity of Item 2: <strong>${quantity2}</strong></p>
      <p>Shipping Charges: <strong>${shippingCharges}</strong></p>
      <hr>
      <p class="total">Total Cost: <strong>${totalCost}</strong></p>
    `;
    document.getElementById("receipt").innerHTML = receipt;
  }
  function restart(){
      document.getElementById("receipt").innerHTML = "";
  }