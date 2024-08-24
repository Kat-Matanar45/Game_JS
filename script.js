'use strict'

function one(x) {

    function two() {

        let a = prompt("Угадай число от 1 до 100");

        const isNumber = function(num) {return !isNaN(parseFloat(num)) && isFinite(num)};
        if (!isNumber(a) && (a !== null)) {alert("Введи число!"); return two();}     

        if (a === null) {alert("Игра окончена"); return};
        
        a = Number(a);

        if ((a > x) && (a > 0)) {alert("Загаданное число меньше"); return two();};
        if ((a < x) && (a > 0)) {alert("Загаданное число больше"); return two();};
        if (a === 0) {alert("Введите число от 1 до 100"); return two();};
        if (a === x) {alert("Поздравляю, Вы угадали!!!"); return;}; 
    }

    two();
};

one(55);