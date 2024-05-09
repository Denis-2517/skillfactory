let value = +prompt("Введите значение");

if(typeof value === 'number' && !isNaN(value)) {
    if (value % 2 === 0) {
    console.log('Число четное');
    }
    else if (value % 2 !== 0) {
    console.log('Число нечетное');
    }   
}
else if(value === Number.isNaN) {
    console.log('Значение NaN');
} else {
    console.log('Упс кажется вы ошиблись');
}
