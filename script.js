document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully!");

    // Select modal elements
    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const closeModal = document.querySelector(".close");

    // Product Click Event
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => {
            modalImage.src = card.dataset.image;
            modalTitle.textContent = card.dataset.name;
            modalPrice.textContent = card.dataset.price;
            modal.style.display = "flex";
        });
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close on outside click
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
