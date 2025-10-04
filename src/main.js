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
} 


editableInput.onkeyup = (e) => {
    validated(e.target)
}