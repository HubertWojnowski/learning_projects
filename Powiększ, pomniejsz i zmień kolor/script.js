const btnUp = document.querySelector('.sizeUp')
const btnDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const text = document.querySelector('p')

let fontSize = 36

const bigger = () => {
    fontSize += 5
    text.style.fontSize = fontSize + 'px'
}

const smaller = () => {
    fontSize -= 5
    text.style.fontSize = fontSize + 'px'
}

const textColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}



btnUp.addEventListener('click', bigger)
btnDown.addEventListener('click', smaller)
btnColor.addEventListener('click', textColor)



