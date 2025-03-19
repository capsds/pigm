// Button Whatsapp
document.addEventListener("DOMContentLoaded", function () {
    // Crear el enlace
    let waLink = document.createElement("a");
    waLink.href = "https://wa.me/1234567890"; // Reemplaza con tu número
    waLink.target = "_blank";
    waLink.style.position = "fixed";
    waLink.style.bottom = "20px";
    waLink.style.right = "20px";
    waLink.style.width = "60px";
    waLink.style.height = "60px";
    waLink.style.backgroundColor = "#25D366";
    waLink.style.borderRadius = "50%";
    waLink.style.display = "flex";
    waLink.style.alignItems = "center";
    waLink.style.justifyContent = "center";
    waLink.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
    waLink.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.5s";
    waLink.style.cursor = "pointer";
    waLink.style.opacity = "0"; // Para efecto de aparición

    // Efecto hover (brillo y escala)
    waLink.onmouseover = function () {
        waLink.style.transform = "scale(1.2)";
        waLink.style.boxShadow = "2px 2px 15px rgba(0, 255, 0, 0.6)";
    };
    waLink.onmouseout = function () {
        waLink.style.transform = "scale(1)";
        waLink.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
    };

    // Crear la imagen dentro del enlace
    let waImg = document.createElement("img");
    waImg.src = "https://cdn-icons-png.flaticon.com/512/733/733585.png";
    waImg.alt = "WhatsApp";
    waImg.style.width = "40px";
    waImg.style.height = "40px";

    // Agregar la imagen al enlace
    waLink.appendChild(waImg);

    // Agregar el botón al body
    document.body.appendChild(waLink);

    // Efecto de aparición suave
    setTimeout(() => {
        waLink.style.opacity = "1";
    }, 300);

    // Animación de rebote cada 3 segundos
    setInterval(() => {
        waLink.style.transform = "scale(1.1)";
        setTimeout(() => {
            waLink.style.transform = "scale(1)";
        }, 300);
    }, 3000);
});


// Accesibility Button
document.addEventListener("DOMContentLoaded", function () {
    // Agregar iconos de FontAwesome
    let fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
    document.head.appendChild(fontAwesome);
    // Crear el contenedor del botón flotante
let container = document.createElement("div");
container.style.position = "fixed";
container.style.bottom = "20px";
container.style.left = "20px";
container.style.width = "60px";
container.style.height = "60px";
container.style.zIndex = "1000";

// Crear botón principal
let mainButton = document.createElement("button");
mainButton.innerHTML = '<i class="fa-solid fa-universal-access"></i>';
mainButton.style.width = "60px";
mainButton.style.height = "60px";
mainButton.style.border = "none";
mainButton.style.borderRadius = "50%";
mainButton.style.backgroundColor = "#007BFF";
mainButton.style.color = "white";
mainButton.style.fontSize = "24px";
mainButton.style.cursor = "pointer";
mainButton.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.4)";
mainButton.style.transition = "transform 0.3s ease-in-out";
mainButton.style.position = "absolute";
mainButton.style.bottom = "0";
mainButton.style.left = "0";

// Efecto de pulsación para atraer la atención
setInterval(() => {
    mainButton.style.transform = "scale(1.1)";
    setTimeout(() => {
        mainButton.style.transform = "scale(1)";
    }, 300);
}, 2500);

// Crear botones secundarios en círculo
let options = [
    { icon: "fa-moon", action: toggleDarkMode, color: "#333" },
    { icon: "fa-adjust", action: highContrastMode, color: "#f39c12" },
    { icon: "fa-plus", action: increaseFontSize, color: "#27ae60" },
    { icon: "fa-link", action: highlightLinks, color: "#e74c3c" },
    { icon: "fa-volume-up", action: readPageText, color: "#8e44ad" }
];

let buttons = [];
options.forEach((opt, index) => {
    let btn = document.createElement("button");
    btn.innerHTML = `<i class="fa ${opt.icon}"></i>`;
    btn.style.width = "50px";
    btn.style.height = "50px";
    btn.style.border = "none";
    btn.style.borderRadius = "50%";
    btn.style.backgroundColor = opt.color;
    btn.style.color = "white";
    btn.style.fontSize = "20px";
    btn.style.cursor = "pointer";
    btn.style.position = "absolute";
    btn.style.bottom = "5px";
    btn.style.left = "5px";
    btn.style.transform = "scale(0)";
    btn.style.transition = "transform 0.3s ease-in-out";
    btn.onclick = opt.action;
    container.appendChild(btn);
    buttons.push(btn);
});

// Animación para mostrar/ocultar los botones
let menuOpen = false;
mainButton.onclick = function () {
    menuOpen = !menuOpen;
    buttons.forEach((btn, index) => {
        let angle = (index * (Math.PI / (buttons.length - 1))) - Math.PI / 2;
        let x = Math.cos(angle) * 80;
        let y = Math.sin(angle) * 80;
        if (menuOpen) {
            btn.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        } else {
            btn.style.transform = "scale(0)";
        }
    });
};

// Agregar elementos al documento
container.appendChild(mainButton);
document.body.appendChild(container);

// Función: Alternar Modo Oscuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (!document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    } else {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
    }
}

// Función: Alternar Modo Alto Contraste
function highContrastMode() {
    document.body.classList.toggle("high-contrast");
    if (!document.body.classList.contains("high-contrast")) {
        document.body.style.filter = "";
    } else {
        document.body.style.filter = "contrast(1.5)";
    }
}

// Función: Aumentar tamaño de texto
function increaseFontSize() {
    document.body.style.fontSize = (parseInt(window.getComputedStyle(document.body).fontSize) + 2) + "px";
}

// Función: Resaltar enlaces
function highlightLinks() {
    document.querySelectorAll("a").forEach(link => {
        link.style.backgroundColor = "yellow";
        link.style.color = "black";
        link.style.fontWeight = "bold";
    });
}

// Función: Leer texto de la página
function readPageText() {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.body.innerText;
    speech.lang = "es-ES";
    window.speechSynthesis.speak(speech);
}
});


