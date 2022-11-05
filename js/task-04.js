const refs = {
    decrement: document.querySelector("button[data-action = 'decrement'"),
    value: document.querySelector("#value"),
    increment: document.querySelector("button[data-action = 'increment'")
}
let one = 1
let counterValue = 0
const render = () => {
    refs.value.textContent = counterValue
}
const handleDecrement = () => {
    counterValue -= one
    render()
}

const handleIncrement = () => {
    counterValue += one
    render()
}
refs.decrement.addEventListener('click', handleDecrement);
refs.increment.addEventListener('click', handleIncrement);
