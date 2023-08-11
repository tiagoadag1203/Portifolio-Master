// script.js
function openTab(tabId, button) {
    const tabContents = document.querySelectorAll('.desatived');
    const tabButtons = document.querySelectorAll('.btn-menu');
    
    // Oculta todos os conteúdos das abas
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    
    // Remove a classe .ativo de todos os botões
    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('ativo');
    });
    
    // Mostra o conteúdo da aba selecionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
    
    // Encontra o botão correspondente ao ID da aba e adiciona a classe .ativo
    const activeButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    activeButton.classList.add('ativo');
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
