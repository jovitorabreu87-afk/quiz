let perguntas = [
    {
        pergunta: "Qual nome da mansao do primeiro jogo?",
        respostas: ["Mansao Spencer", "Mansao Baker", "Mansao Jackson"],
        correto: 0
    },
    {
        pergunta: "Qual o nome do criador da franquia?",
        respostas: ["Hideo Kojima", "Hideki Kamiya", "Shinji Mikami"],
        correto: 2
    },
    {
        pergunta: "Qual é o modelo do Nemesis?",
        respostas: ["Tyrant T-002", "T-103", "NE-a Type"],
        correto: 2
    }
];

let agr = 0;

function mp() {
    let pergunta = document.getElementById("pergunta");
    let botoes = document.querySelectorAll("button");

    pergunta.innerText = perguntas[agr].pergunta;

    botoes.forEach((btn, i) => {
        btn.innerText = perguntas[agr].respostas[i];
    });
}

function responder(opcao) {
    if (opcao === perguntas[agr].correto) {
        agr++;
         let som = document.getElementById("al");
        som.currentTime = 0;
        som.play(); 
        if (agr < perguntas.length) {
            mp();
        } else {
            alert("Voce venceu!");
            agr = 0;
            mp();
        }
    } else {
        let som = document.getElementById("silvio");
        som.currentTime = 0;
        som.play();
        alert("Errou! Voltando ao inicio...");
        agr = 0;
        mp();
    }
}

mp();