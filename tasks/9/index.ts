// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

type ClassType = {
  name: string
  startsAt: string
  duration: number
}

type FutureClassType = Omit<ClassType, 'startsAt'> & { willStartsAt: string }

type ClientBaseType = {
  name: string
  age: string | number
  gender: 'male' | 'female'
}

type ClientCurrType = ClientBaseType & { timeLeft: string }
type ClientExType = ClientBaseType & { makeCallFor: Date }
type ClientFutureType = Omit<ClientExType, 'age' | 'gender'>

type FitnessClubType = {
  clubName: string
  location: string
  classes: ClassType[]
  futureClasses: FutureClassType[]
  currClients: ClientCurrType[]
  exClients: ClientExType[]
  futureClients: ClientFutureType[]
}

const fitnessClubCenter: FitnessClubType = {
  clubName: 'Fitness club Center',
  location: 'central ave. 45, 5th floor',
  classes: [
    {
      name: 'yoga',
      startsAt: '8:00 AM',
      duration: 60
    },
    {
      name: 'trx',
      startsAt: '11:00 AM',
      duration: 45
    },
    {
      name: 'swimming',
      startsAt: '3:00 PM',
      duration: 70
    }
  ],
  futureClasses: [
    {
      name: 'boxing',
      willStartsAt: '6:00 PM',
      duration: 40
    },
    {
      name: 'breath training',
      willStartsAt: '8:00 PM',
      duration: 30
    }
  ],
  currClients: [
    {
      name: 'John Smith',
      age: '-',
      gender: 'male',
      timeLeft: '1 month'
    },
    {
      name: 'Alise Smith',
      age: 35,
      gender: 'female',
      timeLeft: '3 month'
    },
    {
      name: 'Ann Sonne',
      age: 24,
      gender: 'female',
      timeLeft: '5 month'
    }
  ],
  exClients: [
    {
      name: 'Tom Smooth',
      age: 50,
      gender: 'male',
      makeCallFor: new Date('2023-08-12')
    }
  ],
  futureClients: [
    {
      name: 'Maria',
      makeCallFor: new Date('2023-07-10')
    }
  ]
}

export {}
