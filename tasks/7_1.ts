// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

// const player1 = {
// 	game: "CS:GO",
// 	hours: 300,
// 	server: "basic",
// };

// const player2 = {
// 	game: 2048,
// 	hours: "300 h.",
// 	server: "arcade",
// };

// const player3 = {
// 	game: "Chess",
// 	hours: {
// 		total: 500,
// 		inMenu: 50,
// 	},
// 	server: "chess",
// };

interface IPlayerData<Game, Hours> {
  game: Game
  hours: Hours
  server: string
}

interface IHours {
  total: number
  inMenu: number
}

const player1: IPlayerData<string, number> = {
  game: 'CS:GO',
  hours: 300,
  server: 'basic'
}

const player2: IPlayerData<number, string> = {
  game: 2048,
  hours: '300 h.',
  server: 'arcade'
}

const player3: IPlayerData<string, IHours> = {
  game: 'Chess',
  hours: {
    total: 500,
    inMenu: 50
  },
  server: 'chess'
}

export {}
