
const box = document.querySelector(".box");
const carta = document.querySelector(".btn");
const msgSaidaPersonagem = document.querySelector(".msgSaida-personagem");
const msgSaidaNivel = document.querySelector(".msgSaida-nivel");
const msgSaidaStatus = document.querySelector(".msgSaida-status");
const bgMusic = new Audio("sons/calm-fantasy-harp-and-strings-197736.mp3");
bgMusic.volume= 0.4;
const somEspada = new Audio("sons/draw-sword1-44724.mp3");
const somBonus = new Audio("sons/metal-whoosh-hit-12-202179.mp3");


box.addEventListener('mouseover',()=>bgMusic.play());

const personagens = [
  {
    tipo: "guerreiro",
    img:
      "https://pm1.aminoapps.com/6593/5bf260d7ebddba7d0ce5756108e332b8f46cfebd_00.jpg"
  },
  {
    tipo: "mago",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eeba25a9-9ec6-40ad-8de3-cd92204aaa20/d5d1i0h-709bc847-e586-4fd7-a8af-8a6671e92dd6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlYmEyNWE5LTllYzYtNDBhZC04ZGUzLWNkOTIyMDRhYWEyMFwvZDVkMWkwaC03MDliYzg0Ny1lNTg2LTRmZDctYThhZi04YTY2NzFlOTJkZDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pPxSo4GM2Pomb__381X4FLPFiun2XtS77FJK8XmDfZw"
  },
  {
    tipo: "ogro",
    img:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDcrJKHppZWUZqq2rUh4Z66v8yzFQ1mkRUcpReYMNIRRyO497tkPIMgHYUE9FDwjT4s1423ARz9JxSlohlY6kC3aSdmdW7vPGKKcWAF43psIfPCG1B2gtmB_TXuIn3utIQii_dggemv78/s1600/43fe645b6e982e289743f72359639e25.jpg"
  },
  {
    tipo: "arqueira",
    img:
      "https://st4.depositphotos.com/1162342/31069/i/1600/depositphotos_310699084-stock-photo-land-elves-portrait-fantasy-heavily.jpg"
  }
]

const levels = [
                "madeira",
                "ferro",
                "bronze",
                "prata",
                "ouro",
                "esmeralda",
                "diamante",
                "platina",
                "ascendente",
                "imortal"
]

const xpAleatorio = () => {
  return Math.floor(Math.random() * 1000);
}

const personagem = () => {
  return Math.floor(Math.random() * personagens.length);
}

carta.addEventListener("click", () => {
  somEspada.play();
  let xp = xpAleatorio();
  let ator = personagem();
  let personagemEscolhido = `url(${personagens[ator].img})`;
  
  let level = Math.floor(xp / 100);
                    
  carta.classList.add("btnAnimation");

  const relogio = setInterval(trocaImagem,200);

  setTimeout(() => {
    carta.classList.remove("btnAnimation");
    clearInterval(relogio);
    carta.style.backgroundImage = personagemEscolhido;
    msgSaidaPersonagem.textContent = ` Personagem: ${personagens[ator].tipo.toUpperCase()}`;
    msgSaidaNivel.textContent = `Nível: ${xp} xp `;
    msgSaidaStatus.textContent = `Status: ${levels[level].toUpperCase()} `;  
    somBonus.play(); 
  
  }, 4000);

 
})


let indexImg = 0;
const trocaImagem = ()=>{
    carta.style.backgroundImage = `url(${personagens[indexImg].img})`;
    indexImg ++;
    if(indexImg>3){
      indexImg = 0;
    }
  }
    
   
    





