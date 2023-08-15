let phones = [
  ["iPhone 14 Pro Max", "999"],
  ["iPhone 14 Pro", "799"],
  ["iPhone 14", "699"],
  ["iPhone 13 Pro Max", "799"],
  ["iPhone 13 Pro", "699"],
  ["iPhone 13", "599"],
];

function updatePrice() {
  const selectedPhone = document.getElementById("phone").value;
  const priceElement = document.getElementById("price");

  for (let i = 0; i < phones.length; i++) {
    let phone = phones[i][0];
    let price = phones[i][1];
    let serviceFee = 100;
    let cost = parseInt(price) + serviceFee;
    if (phone === selectedPhone) {
      priceElement.innerHTML = `<p class="highlight">$</p> <p class="serviceCost">${cost}</p>`;
      break;
    }
  }
}

// Call the function initially when the page loads
window.addEventListener("load", updatePrice);

// Add an event listener to the select element
document.getElementById("phone").addEventListener("change", updatePrice);
