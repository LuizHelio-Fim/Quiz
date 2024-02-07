const perguntas = [
    {
      pergunta: "Qual é o jogo mais vendido de todos os tempos?",
      resposta: [
        "Minecraft",
        "Tetris",
        "Grand Theft Auto V",
        "Wii Sports",
      ],
      correta: 1 // Tetris
    },
    {
      pergunta: "Quem é o mascote da Nintendo?",
      resposta: [
        "Pikachu",
        "Mario",
        "Sonic",
        "Donkey Kong",
      ],
      correta: 1 // Mario
    },
    {
      pergunta: "Qual desses jogos foi lançado primeiro?",
      resposta: [
        "The Legend of Zelda: Ocarina of Time",
        "Super Mario 64",
        "Pokémon Red and Blue",
        "Sonic the Hedgehog",
      ],
      correta: 1 // Super Mario 64
    },
    {
      pergunta: "Qual é o gênero do jogo 'Call of Duty'?",
      resposta: [
        "Aventura",
        "Tiro em primeira pessoa (FPS)",
        "RPG",
        "Simulação",
      ],
      correta: 1 // Tiro em primeira pessoa (FPS)
    },
    {
      pergunta: "Qual é a empresa por trás da série de jogos 'Final Fantasy'?",
      resposta: [
        "Square Enix",
        "Capcom",
        "Electronic Arts",
        "Ubisoft",
      ],
      correta: 0 // Square Enix
    },
    {
      pergunta: "Qual é o nome do protagonista de 'The Legend of Zelda'?",
      resposta: [
        "Link",
        "Zelda",
        "Ganon",
        "Gandalf",
      ],
      correta: 0 // Link
    },
    {
      pergunta: "Qual é o jogo mais jogado atualmente?",
      resposta: [
        "Fortnite",
        "League of Legends",
        "Valorant",
        "Minecraft",
      ],
      correta: 1 // League of Legends
    },
    {
      pergunta: "Quem é o criador do jogo 'Minecraft'?",
      resposta: [
        "Markus Persson",
        "Notch",
        "Elon Musk",
        "Tim Sweeney",
      ],
      correta: 1 // Notch
    },
    {
      pergunta: "Qual é o console mais vendido de todos os tempos?",
      resposta: [
        "PlayStation 2",
        "Nintendo DS",
        "Game Boy",
        "PlayStation 4",
      ],
      correta: 0 // PlayStation 2
    },
    {
      pergunta: "Em que ano foi lançado o primeiro 'Pac-Man'?",
      resposta: [
        "1980",
        "1978",
        "1982",
        "1985",
      ],
      correta: 0 // 1980
    },
  ];
  // perguntas e respostas
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  // puxando do html para o js
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  //looping que passa por todos os itens acima para selecionar as repostas
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent =  item.pergunta
  
  // looping aninhado que cola as respostas
    for (let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
  
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  //tira o "Resposta A" da tela
    quizItem.querySelector('dl dt').remove()
  
  //mostra tudo na tela
    quiz.appendChild(quizItem)
  }
  
  
  