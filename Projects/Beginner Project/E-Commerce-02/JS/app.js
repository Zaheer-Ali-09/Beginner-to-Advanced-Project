// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {

//     navLinks.classList.toggle("active");

// });
// /* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



/* ================= CART ================= */

const cartIcon = document.querySelector(".cart-icon");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCart = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});



/* ================= ADD TO CART ================= */

const cartButtons = document.querySelectorAll(".add-cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");

let total = 0;

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const productCard = button.parentElement;

        const title =
            productCard.querySelector("h3").innerText;

        const price =
            productCard.querySelector("h4").innerText;

        const image =
            productCard.parentElement.querySelector("img").src;



        /* create cart item */

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");



        cartItem.innerHTML = `

            <img src="${image}">

            <div class="cart-item-info">

                <h4>${title}</h4>

                <p>${price}</p>

                <span class="remove-btn">
                    Remove
                </span>

            </div>

        `;



        cartItems.appendChild(cartItem);

        cartItems.appendChild(cartItem);



        /* ================= TOAST SHOW ================= */

        toast.classList.add("active");

        setTimeout(() => {

            toast.classList.remove("active");

        }, 2000);

        /* total price */

        total += parseInt(price.replace("$", ""));

        cartTotal.innerText = total;



        /* remove item */

        const removeBtn =
            cartItem.querySelector(".remove-btn");

        removeBtn.addEventListener("click", () => {

            cartItem.remove();

            total -= parseInt(price.replace("$", ""));

            cartTotal.innerText = total;

        });

    });

});
// 
/* ================= SCROLL TOP ================= */

const scrollTopBtn =
    document.querySelector(".scroll-top");



window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("active");

    }

    else {

        scrollTopBtn.classList.remove("active");

    }

});



scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});