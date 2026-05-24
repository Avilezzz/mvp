const productCards = document.querySelectorAll(".product-card");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const modalPrice = document.getElementById('modalPrice');
const buyButton = document.querySelector(".buy-whatsapp");

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const description = card.dataset.description;
    const image = card.dataset.image;
    const price = card.dataset.price;
    

    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalImage.src = image;
    modalPrice.innerText = price;

    /* MENSAJE WHATSAPP */

    const message = `Hola 👋
Estoy interesado en el producto:

📦 ${title}
💵 ${price}

¿Me puedes dar más información?`;

    const phone = "593990560327";

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    buyButton.href = whatsappURL;

    const modal = new bootstrap.Modal(document.getElementById("productModal"));

    modal.show();
  });
});
