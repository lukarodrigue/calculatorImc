


export const modal = {
  
  Wrapper: document.querySelector('.popup-wrapper'),
  Message: document.querySelector('span'),
  buttomClose: document.querySelector('.close'),
  
  open(){
    modal.Wrapper.classList.add('open')
  },

  close(){
    modal.Wrapper.classList.remove('open')
  }
}

modal.buttomClose.onclick = () => {
  modal.close()
}

window.addEventListener('keydown', (event) => {
  modal.close(event)
})