interface ISlider {
  container?: string
  numberOfSlides?: number
  speed?: 300 | 500 | 700
  direction?: 'horizontal' | 'vertical'
  dots?: boolean
  arrows?: boolean
  animationName?: string
}

function createSlider({ container = '', numberOfSlides = 1, speed = 300, direction = 'horizontal', dots = true, arrows = true }: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows)
}

createSlider()

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

// 1 вариант
interface ICustomSlider extends Required<Omit<ISlider, 'animationName' | 'speed'>> {
  speed: number
}

// 2 вариант
type CustomSliderType<T> = {
  [K in keyof T as K extends 'animationName' ? never : K]-?: K extends 'speed' ? number : T[K]
}

const customSliderOptions: ICustomSlider = {
  container: 'id',
  numberOfSlides: 4,
  speed: 1100,
  direction: 'horizontal',
  dots: true,
  arrows: true
}

const customSliderOptions2: CustomSliderType<ISlider> = {
  container: 'id',
  numberOfSlides: 4,
  speed: 1100,
  direction: 'horizontal',
  dots: true,
  arrows: true
}

function createCustomSlider(options: any): void {
  if ('container' in options) {
    console.log(options)
  }
}

export {}
