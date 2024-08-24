'use strict'

function one(x) {

    let h = 10;

    function two() {

        let a = prompt("Угадай число от 1 до 100");
        let f;

        const isNumber = function(num) {return !isNaN(parseFloat(num)) && isFinite(num)};
        if (!isNumber(a) && (a !== null)) {alert("Введи число!"); return two();}     

        if (a === null) {alert("Игра окончена"); return};
        
        a = Number(a);

        if ((a > x) && (a > 0)) {h--; alert("Загаданное число меньше, осталось попыток " + h); return two();};
        if ((a < x) && (a > 0)) {h--; alert("Загаданное число больше, осталось попыток " + h); return two();};
        if (a === 0) {alert("Введите число от 1 до 100"); return two();};
        if (a === x) {f = +confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"); 
            
            switch (true) {
                case (f === 0): alert("Очень жаль... Пока!"); return;
                case (f === 1): x = Math.floor(Math.random() * ((101 - 1) + 1)); h = 10; return two();
            }}; 
    }

    two();
};

one(55);