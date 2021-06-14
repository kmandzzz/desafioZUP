const imagem1 = document.getElementById("imagemUm");
const imagem2 = document.getElementById("imagemDois");
const imagem3 = document.getElementById("imagemTres");
const imagem4 = document.getElementById("imagemQuatro");

const nome1 = document.getElementById("nome1");
const nome2 = document.getElementById("nome2");
const nome3 = document.getElementById("nome3");
const nome4 = document.getElementById("nome4");

const totalPersonagem = 671;

aleatorioNumeros = () => {
  return Math.floor(Math.random() * totalPersonagem);
};

chamarAPI = (imagemElemento, nomeElemento) => {
  let random = aleatorioNumeros();
  return fetch(`https://rickandmortyapi.com/api/character/${random}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      imagemElemento.src = data.image;
      nomeElemento.innerHTML = data.name;
    });
};
trocaDeImagem = () => {
  chamarAPI(imagem1, nome1);
  chamarAPI(imagem2, nome2);
  chamarAPI(imagem3, nome3);
  chamarAPI(imagem4, nome4);
};

//botão para atualizar a página
atualizar = () =>{
    location.reload();
}

document.onload = trocaDeImagem();
