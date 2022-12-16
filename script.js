//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let sum = [];
for(let i = 20;i <= 30;i += 0.5){
    sum.push([i]);
}

console.log(sum.join(' '))


//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let dolar = [];
for(let i = 10;i <= 100;i += 10){
    dolar.push([i*27]);
    console.log(`${i} доларів це ${i*27} грн.`)
}



//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let N = 1000;
let number = [];
for(let i = 1;i <= 100;i++){
    if(i*i <= N){
        number.push([i]);
    }
}
console.log(number);



//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)

/* let num = 199;
let count = '';
if(num%2 !== 0 ){
    count = true;
}else{
    count = false;
}

console.log(count);
 */

let newNumber = 99
for(let i  = 0;i < newNumber;i++){
        if(newNumber%2 !== 0){
            console.log('Це число просте')
        }else{
            console.log('Це число не є простим')
        }
}




//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

/* let mysteryNumber = 81;
let answer = '';
if(mysteryNumber%3 !== 0){
    answer = false;
}else{
    answer = true;
}

console.log(answer);

 */
let mysteryNumber  = 10;

for(let i = 0;i <= mysteryNumber;i++){
    if(mysteryNumber%3 === 0){
        console.log('Це число мона отримати');
    }else{
        console.log('Це число не можна отримати')
    }
}
















