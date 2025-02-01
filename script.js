// Объявление переменных
const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector('#name');
const list = document.querySelector('#list');
const container = document.querySelector('#container');
const msg = document.querySelector('#msg');



// Рандомное число
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// Округлить до целого в меньшую сторону - Math.floor
// Случайное число от 0 до 1 - Math.random()
// Формула нахождения случайного числа в диапозоне max min - Math.floor(Math.random) * (max - min + 1) + min;

// (Формула) Math.random() * (max - min + 1) + min'
// Найти случайное число от 0 до 10
// Math.rendom() * (11);
// Найти случайное число то 1 до 10
// Math.random() * (10) + 1;
// Найти случайное число от 2 до 10
// Math.random() * (9) + 2;

// Округлить и вывести в консоль случайное число от 2 до 10
// console.log(Math.floor(Math.random() * 9 + 2))

// --------------------------------------------------------------------------------------------------------------------------------

let randomInt = getRandomInt(1, 20);
console.log(randomInt);

let count = 0;

myBtn.addEventListener('click', ()=> {
    count = count + 1;

    if(randomInt == nameInput.value) {
        msg.textContent = `Поздравляем, вы угадали число! Загаданное число было : ${nameInput.value}, за ${count} попыток`;
        container.appendChild(msg);
    }else {
        msg.textContent = `К сожелению вы не угадали число!`;
        container.appendChild(msg);
    }
})