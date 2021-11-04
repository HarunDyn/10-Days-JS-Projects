const body = document.querySelector('body');
const span = document.querySelector('span');
const button = document.querySelector('button');
const container = document.querySelector("#container-div")



num1 = Math.floor(Math.random() * 255)
num2 = Math.floor(Math.random() * 255)
num3 = Math.floor(Math.random() * 255)




button.addEventListener('click', function () {
    num1 = Math.floor(Math.random() * 255)
    num2 = Math.floor(Math.random() * 255)
    num3 = Math.floor(Math.random() * 255)
    let random = `rgb(${num1},${num2} , ${num3})`;
    let randombutton = `rgb(${num2},${num3} , ${num1})`;
    let containerColor = `rgb(${num3},${num1} , ${num2})`;
    console.log(random)
    span.innerText = random;
    body.style.backgroundColor = random;
    button.style.backgroundColor = randombutton;
    container.style.backgroundColor = containerColor;
    button.style.borderColor = containerColor;
    container.style.borderColor = randombutton;

});