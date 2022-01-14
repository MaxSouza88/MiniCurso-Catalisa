const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especieDoPersonagem = document.querySelector('#especie');
const statusDoPersonagem = document.querySelector('#vivo');

gerarValorAleatorio = () =>{
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
let numeroAleatorio = gerarValorAleatorio();

return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method:'GET',
    headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
    }
}).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especieDoPersonagem.innerHTML = data.species;
    statusDoPersonagem.innerHTML = data.status;
});


}

botao.onclick = pegarPersonagem;