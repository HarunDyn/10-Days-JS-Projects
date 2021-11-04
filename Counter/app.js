const decreaseBtn = document.getElementById('dec')

const resetBtn = document.getElementById('res')

const increaseBtn = document.getElementById('inc')
const number = document.getElementById('number')


decreaseBtn.addEventListener('click', () => {
    number.innerText = Number(number.innerText) - 1
})
resetBtn.addEventListener('click', () => {
    number.innerText = 0;
})
increaseBtn.addEventListener('click', () => {
    number.innerText = Number(number.innerText) + 1
})