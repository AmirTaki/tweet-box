const wrapper = document.querySelector('.wrapper')
const editableInput = document.querySelector('.editable')
const readonlyInput = document.querySelector('.readonly')
const placeholder = document.querySelector('.placeholder')
const counter = document.querySelector('.counter')
const button = document.querySelector('button')


editableInput.onfocus = () => {
    placeholder.style.color = '#98a5b1'
}