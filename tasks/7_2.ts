// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

// interface AmountOfFigures {
// 	squares: number;
// 	circles: number;
// 	triangles: number;
// 	others: number;
// }

// function calculateAmountOfFigures(figure): AmountOfFigures {}

// const data = [
// 	{
// 		name: "rect",
// 		data: { a: 5, b: 10 },
// 	},
// 	{
// 		name: "rect",
// 		data: { a: 6, b: 11 },
// 	},
// 	{
// 		name: "triangle",
// 		data: { a: 5, b: 10, c: 14 },
// 	},
// 	{
// 		name: "line",
// 		data: { l: 15 },
// 	},
// 	{
// 		name: "circle",
// 		data: { r: 10 },
// 	},
// 	{
// 		name: "circle",
// 		data: { r: 5 },
// 	},
// 	{
// 		name: "rect",
// 		data: { a: 15, b: 7 },
// 	},
// 	{
// 		name: "triangle",
// 	},
// ];

// console.log(calculateAmountOfFigures(data));

enum FigureName {
  RECT = 'rect',
  TRIANGLE = 'triangle',
  LINE = 'line',
  CIRCLE = 'circle'
}

interface IFigure {
  name: FigureName
  data?: { [key: string]: number }
}

interface AmountOfFigures {
  squares: number
  circles: number
  triangles: number
  others: number
}

function calculateAmountOfFigures<T extends IFigure>(figures: T[]): AmountOfFigures {
  let res: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0
  }

  figures.forEach((f) => {
    switch (f.name) {
      case FigureName.RECT:
        res.squares++
        break
      case FigureName.TRIANGLE:
        res.triangles++
        break
      case FigureName.CIRCLE:
        res.circles++
        break
      default:
        res.others++
        break
    }
  })

  return res
}

const data: IFigure[] = [
  {
    name: FigureName.RECT,
    data: { a: 5, b: 10 }
  },
  {
    name: FigureName.RECT,
    data: { a: 6, b: 11 }
  },
  {
    name: FigureName.TRIANGLE,
    data: { a: 5, b: 10, c: 14 }
  },
  {
    name: FigureName.LINE,
    data: { l: 15 }
  },
  {
    name: FigureName.CIRCLE,
    data: { r: 10 }
  },
  {
    name: FigureName.CIRCLE,
    data: { r: 5 }
  },
  {
    name: FigureName.RECT,
    data: { a: 15, b: 7 }
  },
  {
    name: FigureName.TRIANGLE
  }
]

console.log(calculateAmountOfFigures(data))
