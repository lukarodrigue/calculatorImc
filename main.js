import { modal } from "./popup.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC , notANumber} from "./utils.js"

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth =  document.querySelector('#heigth')


inputHeigth.oninput = () => AlertError.close()
inputWeigth.oninput = () => AlertError.close()

form.onsubmit = (event) => {
  event.preventDefault() 

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  const weigthOrHeigthIsNotANumber = notANumber(weigth) || notANumber(heigth)

  if (weigthOrHeigthIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weigth, heigth)
  
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  
  modal.Message.innerText = message
  
  modal.open()
}
