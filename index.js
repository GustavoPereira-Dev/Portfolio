import { translate } from "./language.js";

// Tela Mobile
let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");
let listasMb = document.getElementsByClassName('click');
let close = document.querySelector(".bi-x-lg");
  
btnMenu.addEventListener("click", () =>{
    menu.classList.add("abrir-menu");
})

close.addEventListener("click", () =>{
    menu.classList.remove("abrir-menu");
})

// Adiciona o mesmo event listener a todos os elementos
for (var i = 0; i < listasMb.length; i++) {
  listasMb[i].addEventListener('click', function() {
    menu.classList.remove("abrir-menu");
  });
}

overlay.addEventListener("click", () =>{
    menu.classList.remove("abrir-menu");
})




// Transição mais sútil ao clicar no link interno
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});



//Mudança de temas + linguagem

//tema
const favicon = document.querySelector('link[rel="shortcut icon"]');
const logoNav = document.querySelector("#img_nav");
const logoFooter = document.querySelector("#img_footer");


//linguagem
const selects = document.querySelectorAll("select");



window.toggleDarkMode = function() {
  // Obtém o elemento <body>
  const body = document.querySelector('body');

  // Verifica se a classe 'dark-mode' já está presente no <body>
  const isDarkMode = body.classList.contains('light-mode');

  // Adiciona ou remove a classe 'dark-mode' dependendo do estado atual
  changeMode(body.classList.contains('light-mode'));

  // Armazena o estado do modo dark no armazenamento local
  localStorage.setItem('lightMode', isDarkMode);
}
  
// Verifica o estado do modo dark armazenado e aplica-o ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  //getElements("Teste");
  // Aplica o modo dark ou claro com base no estado armazenado
  changeMode(localStorage.getItem('lightMode') !== 'true');

  
  const savedLang = localStorage.getItem('language') || 'pt-br';
  selects.forEach(s => s.value = savedLang);
  translate(savedLang);
 
   
});
  
// Armazena o estado do modo dark ao fechar a página
window.addEventListener('beforeunload', function() {
  
 
  const isDarkMode = document.querySelector('body').classList.contains('light-mode');

  localStorage.setItem('lightMode', isDarkMode);

});

function changeMode(isDarkMode){
  if (!isDarkMode) {
    document.querySelector('body').classList.add('light-mode');
    favicon.href="images/logo2.png"
    logoNav.src="images/logo2.png"
    logoFooter.src="images/logo2.png"
    
    const imgTop = document.querySelector("#img_topo");
    if(imgTop) imgTop.src = "images/topo2.png";
    
  } else {
    document.querySelector('body').classList.remove('light-mode');
    favicon.href="images/logo1.png"
    logoNav.src="images/logo1.png"
    logoFooter.src="images/logo1.png"
    
    const imgTop = document.querySelector("#img_topo");
    if(imgTop) imgTop.src = "images/topo1.png";
  }
}

//listener de mudança de linguagem
selects.forEach(select => {
  select.addEventListener("change", (e) => {
      const lang = e.target.value;
      translate(lang);
      localStorage.setItem('language', lang);
      selects.forEach(s => s.value = lang); // Sincroniza todos os selects
  });
});

/**
 * // Obtém o caminho completo do arquivo
const path = window.location.pathname;

// Extrai o nome do arquivo
const fileName = path.substring(path.lastIndexOf('/') + 1);

// Verifica o nome do arquivo e realiza ações distintas
if (fileName === 'index.html') {
    console.log('Ação para index.html');
    // Coloque aqui a ação específica para index.html
} else if (fileName === 'nome.html') {
    console.log('Ação para nome.html');
    // Coloque aqui a ação específica para nome.html
} else {
    console.log('Ação para outros arquivos');
    // Coloque aqui a ação para outros arquivos
}
 */