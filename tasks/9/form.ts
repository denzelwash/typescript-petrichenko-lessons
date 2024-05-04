interface IForm {
  login: string
  password: string
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

interface IValidationDataSuccess {
  isValid: true
}

interface IValidationDataError {
  isValid: false
  errorMsg: string
}

type IValidationData = IValidationDataSuccess | IValidationDataError

// 1 вариант
interface IFormValidation extends Record<keyof IForm, IValidationData> {}

// 2 вариант
type FormValidationType<T> = {
  [P in keyof T]: IValidationData
}

const validationData: IFormValidation = {
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true }
}

const validationData2: FormValidationType<IForm> = {
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true }
}

export {}
