 const productos = [

  {
    id:1,
    nombre:"Rutina Mañanera",
    precio:"$2",
    emoji:"🌞",
    descripcion:"Tabla visual para ayudar a los niños a seguir hábitos matutinos de forma divertida y autónoma."
  },

  {
    id:2,
    nombre:"Tarjetas Visuales",
    precio:"$2",
    emoji:"🧩",
    descripcion:"Tarjetas educativas con hábitos y actividades diarias para fomentar el aprendizaje visual."
  },

  {
    id:3,
    nombre:"Estrellitas Reward",
    precio:"$2",
    emoji:"⭐",
    descripcion:"Sistema de recompensas imprimibles para motivar hábitos positivos en niños."
  },

  {
    id:4,
    nombre:"Kit Waldorf",
    precio:"$5",
    emoji:"🌿",
    descripcion:"Pack premium inspirado en naturaleza, colores suaves y estilo Waldorf."
  },

  {
    id:5,
    nombre:"Kit Arcoíris",
    precio:"$7",
    emoji:"🌈",
    descripcion:"Versión colorida y divertida para niños que aman diseños alegres."
  },

  {
    id:6,
    nombre:"Organizador Infantil",
    precio:"$3",
    emoji:"📚",
    descripcion:"Organiza tareas, hábitos y rutinas escolares fácilmente."
  }

]

const productosContainer = document.getElementById("productosContainer")

productos.forEach(producto => {

  productosContainer.innerHTML += `

  <div class="col-lg-4 col-md-6">

    <div class="card-soft p-3 product-card h-100"
         onclick="abrirModal(${producto.id})">

      <div class="product-image mb-4">

        <div class="text-center">

          <div style="font-size:70px;">
            ${producto.emoji}
          </div>

          <div>
            Placeholder Imagen
          </div>

        </div>

      </div>

      <div class="px-2 pb-3">

        <h3 style="font-family:'Baloo 2';">
          ${producto.nombre}
        </h3>

        <p class="text-muted">
          ${producto.descripcion}
        </p>

        <div class="d-flex justify-content-between align-items-center mt-4">

          <span class="badge-price">
            ${producto.precio}
          </span>

          <button class="btn btn-light rounded-pill px-4 fw-bold">

            Ver más

          </button>

        </div>

      </div>

    </div>

  </div>

  `

})

function abrirModal(id){

  const producto = productos.find(p => p.id === id)

  document.getElementById("modalTitle").innerText =
  producto.nombre

  document.getElementById("modalDescription").innerText =
  producto.descripcion

  document.getElementById("modalPrice").innerText =
  producto.precio

  document.getElementById("modalImage").innerHTML = `

    <div class="text-center">

      <div style="font-size:90px;">
        ${producto.emoji}
      </div>

      <p class="fw-bold text-muted">
        Placeholder Producto
      </p>

    </div>

  `

  // WHATSAPP MESSAGE
  const mensaje = `Hola 👋
Estoy interesado en:

🌈 Producto: ${producto.nombre}
💲 Precio: ${producto.precio}

¿Está disponible?`

  const url =
  `https://wa.me/593978652638?text=${encodeURIComponent(mensaje)}`

  document.getElementById("whatsappButton")
  .href = url

  // OPEN MODAL
  const modal = new bootstrap.Modal(
    document.getElementById('productoModal')
  )

  modal.show()

}