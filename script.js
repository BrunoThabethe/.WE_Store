document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully!");

    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const closeModal = document.querySelector(".close");
    const addToCartBtn = document.getElementById("addToCart");

    const cartModal = document.getElementById("cartModal");
    const cartItemsList = document.getElementById("cartItems");
    const cartTotalPrice = document.getElementById("totalPrice");
    const closeCartBtn = document.querySelector(".close-cart");
    const cartBtn = document.getElementById("cartBtn");
    const cartCount = document.getElementById("cartCount");

    let cart = [];

    // Open Product Modal
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => {
            modalImage.src = card.dataset.image;
            modalTitle.textContent = card.dataset.name;
            modalPrice.textContent = "£" + card.dataset.price;
            addToCartBtn.setAttribute("data-name", card.dataset.name);
            addToCartBtn.setAttribute("data-price", card.dataset.price);
            modal.style.display = "flex";
        });
    });

    // Close Product Modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Add to Cart
    addToCartBtn.addEventListener("click", () => {
        let itemName = addToCartBtn.getAttribute("data-name");
        let itemPrice = parseFloat(addToCartBtn.getAttribute("data-price"));

        cart.push({ name: itemName, price: itemPrice });
        updateCart();
        modal.style.display = "none";
    });

    // Open Cart Modal
    cartBtn.addEventListener("click", () => {
        cartModal.style.display = "flex";
    });

    // Close Cart Modal
    closeCartBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Update Cart UI
    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - £${item.price.toFixed(2)} 
                            <button class="remove" data-index="${index}">X</button>`;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        cartTotalPrice.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;

        document.querySelectorAll(".remove").forEach(button => {
            button.addEventListener("click", (event) => {
                let index = event.target.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            });
        });
    }
});
