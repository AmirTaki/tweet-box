const wrapper = document.querySelector('.wrapper')
const editableInput = document.querySelector('.editable')
const readonlyInput = document.querySelector('.readonly')
const placeholder = document.querySelector('.placeholder')
const counter = document.querySelector('.counter')
const button = document.querySelector('button')


editableInput.onfocus = () => {
    placeholder.style.color = '#98a5b1'
}

const validated = (element) => {
    let text ;
    let maxLength = 100
    let currentlength = element.innerText.length;

    if(currentlength <= 0){
        placeholder.style.display = 'block'
        counter.style.display = 'none'
        button.classList.remove('active')
    }
    else {
        placeholder.style.display = 'none'
        counter.style.display = 'block'
    }

} 


editableInput.onkeyup = (e) => {
    validated(e.target)
}