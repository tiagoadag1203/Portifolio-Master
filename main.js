function sobremim() {
    var cont = document.getElementById("cont-sobremim");
    if (cont.style.display === "flex") {
        cont.style.display = "none";
    } else {
        cont.style.display = "flex";
    }
}

function skills() {
    var cont = document.getElementById("cont-skills");
    if (cont.style.display === "flex") {
        cont.style.display = "none";
    } else {
        cont.style.display = "flex";
    }
}


function experiencia() {
    var cont = document.getElementById("cont-experiencia");
    if (cont.style.display === "flex") {
        cont.style.display = "none";
    } else {
        cont.style.display = "flex";
    }
}

function contato() {
    var cont = document.getElementById("cont-contato");
    if (cont.style.display === "flex") {
        cont.style.display = "none";
    } else {
        cont.style.display = "flex";
    }
}

function projetos() {
    var cont = document.getElementById("cont-projetos");
    if (cont.style.display === "flex") {
        cont.style.display = "none";
    } else {
        cont.style.display = "flex";
    }
}



function changeTheme() {
    var element = document.documentElement;
    element.classList.toggle("light");
    if (element.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Verifica se há um tema armazenado e aplica-o na inicialização
if (localStorage.getItem("theme") === "light") {
    var element = document.documentElement;
    element.classList.add("light");
}
