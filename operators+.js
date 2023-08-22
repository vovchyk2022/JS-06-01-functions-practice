// January 03, 2023

// /* Add example typeof/ЗМІННІ
// починається з букви, $ або _
// не використовувати пробіл
// регістрозалежне
// відповідає на питання що в ній
// */

// let userName = "Brad";
// // console.log(userName);
// console.log('user name:', userName);

// let userAge; //оголошення
// console.log(typeof userAge);
// userAge = 59; //ініціалізація
// console.log(typeof userAge);

// //рік народження користувача
// const userYearOfBirth = 1963;

// // console.log(userName);
// // console.log(userAge);
// console.log('user age:', userAge);

// userAge = 60;
// userName = "Bradly";

// const userGender = "male";
// const isUserMale = true;
// // const userGender = "male";
// //userGender = 'female'; // error
// console.log(userGender);

// const AMOUNT_DAYS_WEEK = 7;
// let number = 12;
// {
//     let number = 89;
//   console.log(number); //89
// }
// console.log(number); //12 - зі змінною let бере дані позаблоком, із змінною var(const) перезаписує дані в блоці  !!!!!


// /* Add example Assignment
// починається з букви, $ або _
// не використовувати пробіл
// регістрозалежне
// відповідає на питання що в ній
// */

// let userName = "Brad";
// console.log('user name:',userName);
// let number = 12;
// let number2 = 10;

// let userAge; //оголошення
// console.log(typeof userAge);
// userAge = 59; //ініціалізація
// // console.log(typeof userAge);
// //number = number + 5; //17
// number += 5;
// console.log(number);

// //рік народження користувача
// const userYearOfBirth = 1963;
// //number = number + number2;
// number += number2;
// console.log(number);

// console.log(userName);
// console.log('user age:', userAge);
// number -= 7;
// console.log(number);

// userAge = 60;
// userName = "Bradly";
// number = (number + 4) * 2;

// number /= 3;

// number **= 2;

// const isUserMale = true;
// // const userGender = "male";
// //userGender = 'female'; // error


// // Add >,<,>=,<=


// let number1 = '120';
// let number = 12;
// let number2 = 10;
// console.log(number1);
// console.log(typeof number1);
// console.log(number);
// console.log(typeof number);


// number += 5; //17

// // number = number + number2; //27
// number += number2; //27
// console.log(number);

// number = (number + 4) * 2;   //62
// console.log(number);

// number /= 3;  //20.6(6)
// console.log(number);

// number **= 2;
//  console.log(number1 < number2); //'12'<'102' false
// // // console.log(number1 <= number2);
// // // console.log(number1 > number2);
// console.log(number1);
// console.log(number2);
// console.log(number1 >= number2);

// // const str1 = 'кіт';
// // const str2 = 'Пес';

// // console.log(str1<str2);

// let number3 = 50;
// const str1 = "50";
// console.log(number1);
// console.log(str1);
// console.log(number1 <= Number(str1));
// console.log(String(number3) <= str1);

// console.log(true < false);

// let number4 = 30;
// const str5 = "50";
// console.log(number4);
// console.log(str5);
// console.log(number4 < Number(str5));
// console.log(String(number4) <= str5);


// January 04, 2023

/*
false
0 -0 +0
''
null
undefined
NaN
*/

// // логічне (І) && повертає першу неправду(false, 0 -0 +0, null, undefined, NAN, '') або останню правду  !!!
// const condition1 = 'qwe' && "null" && "qwe";
// console.log(condition1);
// const condition2 = null && "null" && "qwe";
// console.log(condition2);


// const str1 = 'кіт';
// const str2 = 'Пес';
// логічне (АБО) ІІ повертає першу правду або останню неправду
// const condition4 = 0 || false || "" || null;
// console.log(condition3);
// const condition4 = true || false || "" || null;
// console.log(condition4);

// Nulish coalescing operator - ?? - якщо 1-е значення не null або undefined, то повертає 1 значення, якщо 1-е значення null та undefined, то повертає 2-й операнд
// console.log(true < false);
// const condition3 = false ?? "default";
// const condition3 = 0 ?? "default";
// const condition3 =''?? "default"; // перше значення порожнє - нічого
// const condition3 = NaN ?? "default";
// const condition3 = null ?? "default";
// const condition3 = undefined ?? "default";
// console.log(condition3);


// const condition = 0/0; //NaN
// //якщо в круглих дужках правда, виконай блок(фігурні дужки)
// //if (condition === NaN) {
// if(Number.isNaN(condition)){  
//   //якщо в круглих дужках правда, виконай блок(фігурні дужки)
//   console.log('condition = ', condition)
// }


// // ЗАВДАННЯ 1
// let number = 0;
// if (number > 0) {
//     console.log('positive');
// } else if (number === 0) {
//     console.log('zero');
// }else if (number < 0) {
//     console.log('negative');
// }

// // ЗВАВДАННЯ 2 - якщо число більше 7 і ділиться на 3, вивести 'win', в іншому випадку - 'lose'
// let number4 = 9;
// if (number4 % 3 ===0 && number4 > 7){
//     console.log('win');
// } else {
//     console.log('lose');
// }
// // 2 варіант
// let number5 = 5;
// if (number5 % 3 && number5 <= 7){
//     console.log('lose');
// } else {
//     console.log('win');
// }

// // ЗАВДВННЯ 3
// // якщо змінна парна і додатня -збільшити її на 5 і вивести змінну
// // якщо змінна непарна і додатня - збільшити її у 2 рази і вивести змінну
// // якщо змінна парна і від'ємна - змінити її знак на протилежний і вивести змінну
// // інакше - просто вивести змінну

// // Варіант 1
// let number6 = 10;
// // debugger
// if (number6 % 2 === 0 && number6 > 0) {
//   number6 += 5 ; 
// } else
//  if (number6 % 2 && number6 > 0) {
//     number6 *= 2 ; 
// } else 
// if (number6 % 2 === 0 && number6 < 0) {
//     number6 *= -1;
// } else {

// }
// console.log(number6);

// // // Варіант 2
// let num = -0;
// if (num > 0) {
//     if (num % 2 === 0) {
//         num +=5;
//     } else {
//         num *= 2;
//     }
// }else if (num % 2 ===0 && num < 0) {
//     num = - num;
// }
// console.log(num);

// ЗАВДАННЯ 4
// якщо обидві змінні парні - вивести резульат їхньої суми
// інакше - вивести додатній результат віднімання або 0
 
// let num1 = 10;
// let num2 = 20;


// // January 06, 2023

// const userInput = prompt ('enter number:' , )

// // ЗАВДАННЯ 1
// //вивести помилку, якщо userInput:
// //порожній рядок
// //null
// //щось, що не є числом

// // Add declaration/expression
// if (userInput === "" || userInput === null || Number.isNaN(Number(userInput))) {
//     console.log("error");
//   } else {
//     console.log(userInput, Number(userInput));
//   logNameFunction1()};
  
//   //expression
//   const logNameFunction2 = function(){
//     console.log("name: logNameFunction2");
//   }
//   logNameFunction2();
  
//   //declaration
//   function logNameFunction1() {
//     console.log("name: logNameFunction1");
//   }
  
//   logNameFunction1();
  

// // Add example functions
// //функція додає два числа, які вводить користувач і логує суму

// const userInput1 = prompt("Enter number: ", 6);
// const userInput2 = prompt("Enter number: ", 3);

// const checkUserInput1 = 
// userInput1 === "" || userInput1 === null || Number.isNaN(Number(userInput1));
// const checkUserInput2 =
// userInput2 === "" || userInput2 === null || Number.isNaN(Number(userInput2));


// if (checkUserInput1 || checkUserInput2) {
//   console.log("error! value must be number!");
// }
// _________________________________________________________________


// // Jan 7, 2023
// //функція додає два числа, які вводить користувач і логує суму

// /**
//  * Get summa two number
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */

// function getSumTwoNumbers(number1=1, number2=2) {
//   return number1 + number2;
// }
  
//   /**
//    *
//    * @param {any} value
//    * @returns {boolean}
//    */
//    function checkNumber(value) {
//       const checkValue =
//         value === "" || value === null || Number.isNaN(Number(value));
//       return !checkValue;
//     }
  
// //   console.log(getSumTwoNumbers(2,3));
//   // console.log(getSumTwoNumbers(Number(userInput1), (Number(userInput1))));

// const userInput1 = prompt("Enter number: ", 6);
// const userInput2 = prompt("Enter number: ", 3);

// //debugger;

// if (checkNumber(userInput1) && checkNumber(userInput2)) {
//   console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));
// //   if (checkNumber(userInput1) && checkNumber(userInput2)) {
// //     console.log(getSumTwoNumbers(userInput1, userInput2)); // ф-я працює як склеювання (конкатенація);
// } else {
//   console.log("error! value must be number!");
// }

// console.log(getSumTwoNumbers())
// console.log(getSumTwoNumbers(100))
// console.log(getSumTwoNumbers(undefined, 100))
// _______________________________________________________________


 
// // Add getPerimetrSquare

// const side = 4;
// /**
//  * Get perimetr square
//  * @param {number} side 
//  * @returns {number} number | NaN
//  */

// // 1 варіант if без else
// const getPerimetrSquare = function (side = 1) { 
//   if(side<=0){
//     return NaN;
//   }
// return side * 4;
// };

// // 2 варіант if + else
// const getPerimetrSquare = function (side = 1) { 
//   if (side<=0) {
//     return NaN;
//   } else {
//     return side * 4;
//   }
// };


// // debugger
// console.log(getPerimetrSquare()); 
// console.log(getPerimetrSquare(undefined));
// console.log(getPerimetrSquare(3));
// console.log(getPerimetrSquare(-3));


// // Add isAdult

// //написати функцію, яка приймає число (коректне),
// //яке є віком користувача і повертає
// //результат перевірки на повноліття

// /**
//  * @param {number} age >0
//  * @param {number} FULL_AGE default value = 18
//  * @returns {boolean}
//  */
//   const isAdult = function (age, FULL_AGE = 18) {
//   return age >= FULL_AGE;
//   };
  
  
//   const userAge = 45;
//   //debugger;
//   console.log(isAdult(userAge)); //true
//   console.log(isAdult(17)); //false


//   // Add getUserInput
// //напишіть функцію, яка буде запитувати у користувача будь що
// //і повертати значення, якщо воно було введено
// //або повертати null, якщо користувач нічого не ввів

// // 1 варіант Expression
// /**
//  * 
//  * @returns {string | null}
//  */
//   const getUserInput = function () {
//     const input = prompt();
//     if(input){
//       return input;
//     }
//     return null;
//   };
//   console.log(getUserInput());

// // 2 варіант Declaration
// /**
//  * 
//  * @returns {string | null}
//  */
//  function getUserInput () {
//     const input = prompt();
//     if(input){
//       return input;
//     }
//     return null;
//   };
//   console.log(getUserInput());

//  //debugger;
  

// // Add isMultiplicity
// //напишіть функцію, яка приймає два числа (корректні)
// //і повертає кратність першого другим


// const number1 = 45.1;
// const number2 = 9;

// /**
//  * 
//  * @param {number} number1 
//  * @param {number} number2 
//  * @returns 
//  */
// const isMultiplicity = function (number1, number2) {
//   return number1 % number2 === 0;
// }
// if (Number.isInteger(number1) && Number.isInteger(number2)) {
//     console.log(isMultiplicity(number1, number2));
//   } else {
//     console.log("number must be integer");
//   }
//   console.log(isMultiplicity(12,3));
  

// // Add isTriangleExist
// // //напишіть функцію, яка приймає три числа
// // //і перевіряє чи можуть бути ці числа мірами довжини
// // //трьох сторін трикутника
//   /**
//  * @param {number} value1 
//  * @param {number} value2 
//  * @param {number} value3 
//  * @returns {boolean}
//  */
// const isTriangleExist = function (value1=1, value2=1, value3=1) {
//   return (
//     value1 > 0 &&
//     value2 > 0 &&
//     value3 > 0 &&
//     value1 + value2 > value3 &&
//     value1 + value3 > value2 &&
//     value3 + value2 > value1
//   );
// };
// console.log(isTriangleExist()); // true

// Задача - написати ф-ю, яка приймає два числа і: 
//   const getResult = function (number1, number2) {
//     //якщо числа парні - повертає суму
//     if (number1 % 2 === 0 && number2 % 2 === 0) {
//       return number1 + number2;
//     }
//     //якщо непарні - повертає результат множення
//     if (number1 % 2 && number2 % 2) {
//       return number1 * number2;
//     }
//     //якщо різні - повертає непарне
//     if (number1 % 2) {
//       return number1;
//     }
//     return number2;
//   };
//   // Варіант 2  
//   // const number1 = 5;
//   // const number2 = 3;
//   // let result;
//   // //debugger
//   // if (number1 % 2 === 0 && number2 % 2 === 0) {
//   //   result = number1 + number2;
//   // } else if (number1 % 2 && number2 % 2) {
//   //   result = number1 * number2;
//   // } else if (number1 % 2) {
//   //   result = number1;
//   // }else{
//   //   result = number2;
//   // }

  
//   // Add compareTwoNumbers
// //і порівнює ці числа так:
// //якщо перше більше другого - повертає 1
// //якщо друге більше першого - повертає -1
// //якщо числа однакові - повертає 0

// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */

//   const compareTwoNumbers = function (number1, number2) {
//     if (number1 > number2) {
//       return 1;
//     }
//     if (number1 < number2) {
//       return -1;
//     }
//     return 0; 
//   };
// console.log(compareTwoNumbers(4,8));


//напишіть функцію, яка приймає два числа:
//якщо числа парні - повертає суму
//якщо непарні - повертає результат множення
//якщо різні - повертає непарне
//   const number1 = 5;
//   const number2 = 3;
//   let result;
//   //debugger
//   if (number1 % 2 === 0 && number2 % 2 === 0) {
//     result = number1 + number2;
//   } else if (number1 % 2 && number2 % 2) {
//     result = number1 * number2;
//   } else if (number1 % 2) {
//     result = number1;
//   }else{
//     result = number2;
//   }
// console.log(result);


//   // Add calculateSquareEquation
// //напишіть функцію, яка обчислює квадратне рівняння

//    /**
//    *
//    * @param {number} a
//    * @param {number} b
//    * @param {number} c
//    * @returns {number[] | null}
//    */

//   const calculateSquareEquation = function (a = 1, b = -26, c = 120) {
//     const D = b * b - 4 * a * c;
//     if (D < 0) {
//       return null;
//     }
//     if (D === 0) {
//       const x = -b / (2 * a);
//       return [x];
//     }
//     const x1 = (-b + Math.sqrt(D)) / (2 * a);
//     const x2 = (-b - Math.sqrt(D)) / (2 * a);
//     return [x1, x2];
//   };
  
//   const result = calculateSquareEquation();
//   if (result) {
//     console.log(result)
//   }else{
//     console.log('roots not found')
// }
// console.log(calculateSquareEquation());