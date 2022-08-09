// console.log("hello js!");
/*console.error("hello js!");
console.warn("hello js!");*/

//! Переменные
// именованные хранилище
// let,var,const

// console.log(birth);
// !const birth = "01.01.2001";
// console.log(birth);
// birth = "01.01.2000";

// console.log(lastName);
// !let lastName = "Pavlova";
// = это знак присваивание
// console.log(lastName);
// lastName = "Pirogova";
// console.log(lastName);

// console.log(firstName);
// var firstName = "Anna";
// console.log(firstName);
// firstName = "Elena";
// console.log(firstName);

// ! названия перменных
//! так нельзя
// нельзя ставить цифру в начало,
//  let 5block = ''
// зарезервированные слова нельзя использовать
// let let
// нельзя писать отдельно firstName -правильно
// let first name
// let first-name

//! правильно , так можно;
// let camelCase
// let color_orange
// const RED = "#jbc1131"; можно делать все буквы заглавными
// const $block ="";
// цифры можно использовать в конце или в середине но в начале нельзя
// const numbers10 = 10;

//! Типы данных
// 1strin
// let str = "strochka";
// console.log(str.lenght);
// console.log(str);
// const typeOfStr = typeof str;
// console.log(typeOfStr);

// console.log(typeof str);

// let str1 = "qwe";
// let str2 = 'asd';
//  косых ковычек можно поделить ``
// let str = `zxc`;

// 2number
// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1);

// 3 boolean
// имеет только два значения
// const bool1 = true;
// const bool2 = false;

// 4 null
// null  это специальная пустота
// let error = null;

// 5 undefined
// не указали значения тогда появляется
// let hello;
// console.log(hello);

// 6 object (object, array)
// у есть ключ значения
// let user = {
//   name: " Diana Kim",
//   age: 20,
// };
// console.log(user.name);
// console.log(user.age);

// console.log(user["name"]);

//array
// внутри может храниться всё
// let arr = [false, 100, true, {}, [], "hello"];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);

// 7 Symbol
// let id = Symbol("r567u");

// 8 bigInt
// let int = 34121212n;

//!Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(10 / 2);
// console.log(10 * 10);
// console.log(2 ** 3);
// console.log(10 % 7);

// -,/,*,
// console.log("10" / "2");
//NaN -> NOt A Number
// console.log("hello" / 2);

//! +
//! concat -> слияние
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);

//! true- false значение
// console.log(Boolean(0)); //false
// console.log(Boolean(-1)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("hello")); //true
// console.log(Boolean("")); //false

//! сравнение
//! строгое === (типы данных и значения должны быть равны)
// console.log(3 === 5); //false
// console.log(3 === 3); //true
// console.log(3 === "3"); //false
// console.log(3 !==5); //true

//! не строгое == (значения должны быть равны)
// console.log(3 == 3); //true
// console.log("3" == 3); //true
// console.log("3" != 3);//false

//! >,<,=
// console.log(3 < 5); //true
// console.log(3 < 1); //false
// console.log(5 >= 5);//true
// console.log(5 <= 5);//true

//! из string в number
//! + из строки можно сделать число
// let elem = "100000lsdcjnchdbv";
// console.log(elem);
// console.log(+elem);

//! parseInt
// let elem2 = "100000sshajhdc";
// console.log(parseInt(elem2));

//!parseFloat
// let elem3 = "100.200dqojbdqowjbd";
// console.log(parseFloat(elem3));

//! Number
// let elem4 = "10000";
// console.log(Number(elem4));

//! из Number  в string
// let num = 9898;
// console.log(num);
// console.log(typeof num.toString());
// console.log(String(num));

//! alert , promt, confirm
// alert("Hello, user!");
// let firstName = prompt("как вас зовут?");
// console.log(firstName);
//! интерполяция - встроение выражение
// alert(`&{firstName},welcome!`);

// let value = confirm("вам есть 18?");
// console.log(value);

let num1 = prompt("введите первое число");
let operator = prompt("введите математ. оператор");
let num2 = prompt("введите второе число");
let result = eval(num1 + operator + num2); //"2+2"
alert(result);
