export function notANumber(value) {
  return isNaN(value) || value == ""
}

export function calculateIMC(weigth, heigth) {
  return(weigth / ((heigth / 100) ** 2)).toFixed(2)
}
