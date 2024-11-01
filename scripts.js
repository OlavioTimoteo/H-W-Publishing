// Máscara para o telefone
document.getElementById("phone").addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
});

const bannerImages = ["images/01.jpg", "images/02.jpg", "images/03.jpg"];
const galleryImages = ["images/gallery1.jpg", "images/gallery2.jpg"];
const descriptions = [
  "Descrição do produto para a imagem 1, com seus benefícios.",
  "Descrição do produto para a imagem 2, com outros diferenciais.",
  "Descrição do produto para a imagem 3, destacando características únicas.",
];
let currentImageIndex = 0;

// Troca de imagem do banner e atualização de descrição
function changeImage(index) {
  document.getElementById("bannerImage").src = bannerImages[index];
  document.querySelectorAll(".thumbnail").forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === index);
  });
  updateDescription(index);
}

function updateDescription(index) {
  document.getElementById("product-description").textContent =
    descriptions[index];
}

// Exibir modal de imagem
function openModal(index) {
  currentImageIndex = index;
  document.getElementById("modalImage").src = galleryImages[currentImageIndex];
  document.getElementById("modal").style.display = "flex";
}

// Fechar modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Envio do formulário e transição para a página do produto
document.getElementById("captureForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("user-name").textContent = name;

  document.getElementById("lead-form").style.display = "none";
  document.getElementById("product-page").style.display = "block";
});

// Temporizador regressivo
let timer = 300;
const countdownElement = document.getElementById("countdown");

function startCountdown() {
  const countdown = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    countdownElement.textContent = `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;

    if (timer-- <= 0) clearInterval(countdown);
  }, 1000);
}

startCountdown();
