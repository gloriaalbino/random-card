window.onload = function() {
    //Declaracion de variables y Selectores
    let numeroDeCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let simbolo = ["Diamantes", "Espadas", "Corazones", "Trebol"];
    let NumeroAleatorio = Math.floor(Math.random() * numeroDeCarta.length);
    let SimboloAleatorio = Math.floor(Math.random() * simbolo.length);
    let SimboloFinal = simbolo[SimboloAleatorio];
    
    document.getElementById('ContenidoCarta').innerHTML = numeroDeCarta[NumeroAleatorio];
    document.getElementById('Carta').className = "";
    document.getElementById('Carta').classList.add("card");
    document.getElementById('Carta').classList.add(getSimboloClass(SimboloFinal));
    document.getElementById('recargar');
  }
  //funcion del boton (evento)
  recargar.addEventListener('click', (_) =>{
    location.reload();
  })
  //Declaracion de funciones
  function getSimboloClass(simbolo) {
    switch (simbolo) {
      case "Diamantes": return "simbolo-diamantes";
      case "Espadas": return "simbolo-espadas";
      case "Corazones": return "simbolo-corazones";
      case "Trebol": return "simbolo-trebol";
    }
  }