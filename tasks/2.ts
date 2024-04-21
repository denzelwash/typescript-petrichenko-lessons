// const electricityUserData = {
// 	readings: 95,
// 	units: "kWt",
// 	mode: "double",
// };

// const waterUserData = {
// 	readings: 3,
// 	units: "m3",
// };

// const elRate = 0.45;
// const wRate = 2;

// const monthPayments = [0, 0]; // [electricity, water]

// const calculatePayments = (elData, wData, elRate, wRate) => {
// 	if (elData.mode === "double" && elData.readings < 50) {
// 		monthPayments[0] = elData.readings * elRate * 0.7;
// 	} else {
// 		monthPayments[0] = elData.readings * elRate;
// 	}

// 	monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (monthPayments, electricityUserData, waterUserData) => {
// 	const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€

//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;

// 	return text;
// };

interface IElectricityUserData {
  readings: number
  units: string
  mode: string
}

interface IWaterUserData {
  readings: number
  units: string
}

const electricityUserData: IElectricityUserData = {
  readings: 95,
  units: 'kWt',
  mode: 'double'
}

const waterUserData: IWaterUserData = {
  readings: 3,
  units: 'm3'
}

const elRate: number = 0.45
const wRate: number = 2

const monthPayments: [number, number] = [0, 0] // [electricity, water]

const calculatePayments = (elData: Omit<IElectricityUserData, 'units'>, wData: Omit<IWaterUserData, 'units'>, elRate: number, wRate: number): void => {
  if (elData.mode === 'double' && elData.readings < 50) {
    monthPayments[0] = elData.readings * elRate * 0.7
  } else {
    monthPayments[0] = elData.readings * elRate
  }

  monthPayments[1] = wData.readings * wRate
}

calculatePayments(electricityUserData, waterUserData, elRate, wRate)

const sendInvoice = (monthPayments: [number, number], electricityUserData: Omit<IElectricityUserData, 'mode'>, waterUserData: IWaterUserData): string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`

  return text
}

export {}
