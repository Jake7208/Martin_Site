window.addEventListener("scroll", () => {
  if (window.scrollY > 55) {
    document.querySelector("body").classList.add("background");
    document.querySelector(".menuPopUp").classList.remove("hide");
  } else {
    document.querySelector("body").classList.remove("background");
    document.querySelector(".menuPopUp").classList.add("hide");
  }
});

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

const ele = document.getElementById("testimonialCards");
const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".testimonialButtons button");

let firstCardWidth = cards[0].clientWidth + 32;
let activeCardIndex = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    ele.scrollLeft +=
      button.id === "testimonialButtonB" ? firstCardWidth : -firstCardWidth;

    cards[activeCardIndex].classList.remove("active");

    let nextCardIndex =
      activeCardIndex + (button.id === "testimonialButtonB" ? 1 : -1);

    nextCardIndex = Math.max(0, Math.min(nextCardIndex, cards.length - 1));

    cards[nextCardIndex].classList.add("active");

    // Update the activeCardIndex
    activeCardIndex = nextCardIndex;
  });
});

const magnetic = document.querySelectorAll(".magnetic");

magnetic.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const position = item.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    item.style.transform = `translate(${x * 1}px, ${y * 1}px) scale(1.1)`;
  });
});
magnetic.forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    item.style.transform = "translate(0px, 0px)";
    item.style.transition = ".3s all";
  });
});

document.getElementById("hamburger").addEventListener("click", () => {
  const navContainer = document.querySelector(".nav-container");
  const body = document.body;

  if (navContainer.classList.contains("activeNav")) {
    navContainer.classList.remove("activeNav");
    body.style.overflow = "auto"; // Restore scrolling
  } else {
    navContainer.classList.add("activeNav");
    body.style.overflow = "hidden"; // Prevent scrolling
  }

  document.querySelectorAll(".menu_link").forEach((link) => {
    link.addEventListener("click", () => {
      navContainer.classList.remove("activeNav");
      body.style.overflow = "auto"; // Restore scrolling
    });
  });
});
