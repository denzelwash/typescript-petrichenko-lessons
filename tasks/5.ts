// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

// function checkAnimalData(animal) {
// 	if ("available") {
// 		// Заменить условие!
// 		return animal.data;
// 	} else {
// 		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
// 	}
// }

type TAnimal = 'cat' | 'dog' | 'bird'

enum AnimalStatus {
  Available = 'available',
  NotAvailable = 'not available'
}

interface IRequest {
  animal: TAnimal
  breed: string
  sterilized?: string
}

interface ISuccessData extends IRequest {
  location: string
  age?: number
}

interface IErrorData {
  message: string
  nextUpdateIn: Date
}

interface IResponseSuccess {
  status: AnimalStatus.Available
  data: ISuccessData
}

interface IResponseError {
  status: AnimalStatus.NotAvailable
  data: IErrorData
}

function isAvailable(res: IResponseSuccess | IResponseError): res is IResponseSuccess {
  return res.status === AnimalStatus.Available
}

function checkAnimalData(animal: IResponseSuccess | IResponseError): ISuccessData | string {
  if (isAvailable(animal)) {
    return animal.data
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`
  }
}
