// =========================================
// SCALEZARI DIGITAL
// BASIC CART FUNCTIONALITY
// =========================================

let cartCount = 0;

const cartCounter = document.querySelector(".cart-count");

const addToCartButtons = document.querySelectorAll(".add-cart");

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "✓";

        setTimeout(function() {
            button.textContent = "+";
        }, 1000);

    });

});