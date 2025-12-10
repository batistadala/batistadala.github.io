const btn = document.getElementById("toggle-welcome");
const welcomeSection = document.querySelector(".welcome");

let isVisible = true; // controla o estado atual

btn.addEventListener("click", function () {
    if (isVisible) {
        // Oculta
        welcomeSection.style.display = "none";
        btn.textContent = "Mostrar boas-vindas";
        isVisible = false;
    } else {
        // Mostra
        welcomeSection.style.display = "block";
        btn.textContent = "Ocultar boas-vindas";
        isVisible = true;
    }
});

// Botão de tema escuro/claro
const themeBtn = document.getElementById("toggle-theme");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");
    

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙 Modo escuro";
    } else {
        themeBtn.textContent = " ☀️ Modo claro";
    }
});

