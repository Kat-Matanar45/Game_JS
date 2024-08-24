'use strict'

let a = prompt("Угадай число от 1 до 100");

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}


function one(x) {
    function two(a) {
        
        a = Number(a);
        if (a > x) {return "Загаданное число меньше";};
        if (a < x) {return "Загаданное число больше"};
        if (!isNumber(a)) {return "Введи число!"};
        if (a === null) {return "Игра окончена"};
        if (a === x) {return "Поздравляю, Вы угадали!!!"};
    }

    two();
}

one(55);