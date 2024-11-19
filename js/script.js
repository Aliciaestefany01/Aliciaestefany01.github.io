// Pegar os dois elementos com as informações da Home
const homeH1 = document.getElementById('apresentacaoH1');
const homeH3 = document.getElementById('apresentacaoH3');

// Separar letra por letra de cada elemento em um array
const textoArrayH1 = homeH1.innerHTML.split('');
const textoArrayH3 = homeH3.innerHTML.split('');

// Limpar o conteúdo dos dois elementos no HTML
homeH1.innerHTML = '';
homeH3.innerHTML = '';

// Executar a função que faz a animação das frases 
digitarTexto(homeH1, textoArrayH1);
// Timeout para a segunda frase aparecer somente depois da primeira
setTimeout(() => digitarTexto(homeH3, textoArrayH3), 1500);

// Função que percorre o array das palavras e inclui uma a uma no HTML com um timeout definido, gerando a animação
function digitarTexto(elemento, texto) {
    texto.forEach((letra, index) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * index);
    });
}