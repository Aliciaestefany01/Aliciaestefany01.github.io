const homeH1 = document.getElementById('apresentacaoH1');
const homeH3 = document.getElementById('apresentacaoH3');

const textoArrayH1 = homeH1.innerHTML.split('');
const textoArrayH3 = homeH3.innerHTML.split('');

homeH1.innerHTML = '';
homeH3.innerHTML = '';

digitarTexto(homeH1, textoArrayH1);
setTimeout(() => digitarTexto(homeH3, textoArrayH3), 1500);

function digitarTexto(elemento, texto) {
    texto.forEach((letra, index) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * index);
    });
}