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
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent =  item.pergunta
  
    for (let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
  }
  
  