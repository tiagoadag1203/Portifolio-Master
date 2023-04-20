function sobremim() {
    var sobremim = document.getElementById("cont-sobremim");
    if (sobremim.style.display === "flex") {
        sobremim.style.display = "none";
    } else {
        sobremim.style.display = "flex";
    }
}

function skills() {
    var sobremim = document.getElementById("cont-skills");
    if (sobremim.style.display === "flex") {
        sobremim.style.display = "none";
    } else {
        sobremim.style.display = "flex";
    }
}


function experiencia() {
    var sobremim = document.getElementById("cont-experiencia");
    if (sobremim.style.display === "flex") {
        sobremim.style.display = "none";
    } else {
        sobremim.style.display = "flex";
    }
}

function contato() {
    var sobremim = document.getElementById("cont-contato");
    if (sobremim.style.display === "flex") {
        sobremim.style.display = "none";
    } else {
        sobremim.style.display = "flex";
    }
}










function changeTheme() {
    var element = document.documentElement;
    element.classList.toggle("dark");
    if (element.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Verifica se há um tema armazenado e aplica-o na inicialização
if (localStorage.getItem("theme") === "dark") {
    var element = document.documentElement;
    element.classList.add("dark");
}
