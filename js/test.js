//-------------------------задача 23 4 блок------------------------//
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter((user) => user.age >= minAge && user.age < maxAge)
// };
//-----------------------------------------зараховано-----------
// -----------------------------22-4блок---------------------------//
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// console.log(users);
// const userEye = function (arrs, eyeCol,) {
//   const colorEye = [];
//   for (const arr of arrs) {    
//     if (arr.eyeColor === eyeCol) {
//       colorEye.push(arr);
//     }
//   }
//   return (colorEye);
// }
// console.log(userEye(users, "brown")); 
// //-------------------------------------------------------------------------------

// const userEye = (arrs, eyeCol) => {
//   return arrs.filter((arr) => arr.eyeColor === eyeCol);
 

// };
// console.log(userEye(users, "brown")); 
//--------------------------------------зараховано----------------------------------------------//
// function changeEven(numbers, value) {  
//   // Change code below this line
//   const newNumbers = [];
//   console.log(newNumbers);
//   numbers.forEach ( number => {
//     if (number % 2 === 0) {
//       number +=value;
//       newNumbers.push(number);
//       return
//     }
//     newNumbers.push(number);     
//   })   
//  return newNumbers;
//   // Change code above this line `
// }
// changeEven([1, 2, 3, 4, 5], 10);
// ----------------------Задачка 41/41 3 блок--------------------------//

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1)
//         return
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// --------------------------Решение защитано!!!!!!--------------------//
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
  // Change code above this line
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// productName = "Droid";
// for (const product of products) {
//   if (product.name === productName) {
//     console.log(product.price);
//   }
// }
  


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book.title);
// book.author = "Andrii Bondarenko";
// book.devise = "тільки друзям";
// console.log(book);
//------------------JS V2 block-2 ЗАДАЧА 25/32--------------------//


// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArray=[]
// for(item of array1){
//   if (array2.includes(item)){
//     newArray.push(item);
//   }
//   }
//   console.log(newArray);
// return newArray;

//  // Change code above this line
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// --------------------------Решение защитано!!!!!!--------------------//

//----------------------JS V2 block-2 ЗАДАЧА 23/32------------------------//
// function filterArray(numbers, value) {
//   const newNumbers = [];
//    // Change code below this line
//   for (let i=0; i<numbers.length; i++){
//     if (numbers[i] > value){
//       newNumbers.push(numbers[i]);
//     }
//   }
//   return newNumbers

//   // Change code above this line
// }
// --------------------------Решение защитано!!!!!!--------------------//


// ------------------------JS V2 block-2 ЗАДАЧА 22/32---------------------//

//Дополни код функции createArrayOfNumbers(min, max) так,
//чтобы она возвращала массив всех целых чисел от значения min до max.
// const beginArray = [1, 3];
// let nextNumber = beginArray[1];
// console.log(nextNumber);
// const newArray = beginArray[0];
// newArray.push(Number(beginArray[0]) + 1);
// console.log(newArray);
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (i = min; i <= max; i += 1){
//     numbers.push(i);
//   }

//   // Change code below this line

//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(12, 21);
// --------------------------Решение защитано!!!!!!--------------------//

//-------------------------JS V2 block-2 ЗАДАЧА 21/32---------------------//
// Напиши функцию findLongestWord(string) которая принимает произвольную строку
// состоящую только из слов разделённых пробелом(параметр string)
// и возвращает самое длинное слово в этой строке.
// Треба розбити строку на окремі слова,
// далі знайти найдовше слово та вивести його. Для цього потрібно поміряти довжину слів,
//поріняти їх між собою і вивести слово з найбільшою довжиною //
// let string = "The quick brown fox jumped over the lazy dog";
// console.log(string);
// beginStringArr = string.split(" ");
// let maxWord = beginStringArr[0];
// console.log(beginStringArr);
// for (let i = 0; i < beginStringArr.length; i+=1) { 
  
//   if (beginStringArr[i].length > maxWord.length) {
//     maxWord = beginStringArr[i];
//   }
//   // console.log(beginStringArr[i + 1].length);
//   // console.log(beginStringArr[i].length);
  
//   //if (beginStringArr[i+1].length > beginStringArr[i+1].length  )
// }
// function findLongestWord(string) {
//   // Change code below this line
//   beginStringArr = string.split(" ");
//   let maxWord = beginStringArr[0];
//   for (const word of beginStringArr) {
//     if (word.length > maxWord.length) {
//       maxWord = word;
//     }
    
//   }
//   console.log(maxWord);
//   return maxWord;
  
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
 
// --------------------------Решение защитано!!!!!!--------------------//

    

// function calculateTotal(number) {
//  // Change code below this line
// let sum = 0;
// for ( let i=0; i<number+1; i+=1){
//   sum += i;
//   // console.log(sum);
// }
//   return sum;
//   // console.log(sum);
// // Change code above this line
// }
// calculateTotal(3);
// -----------------------JS V2 block-2 ЗАДАЧА 16/32-----------------------//
// const firstArray = ["Mango", "Poly"];
// console.log(firstArray);
// const secondArray = ["Ajax", "Chelsea"];
// console.log(secondArray);
// const newArray = firstArray.concat(secondArray);
// console.log(newArray);
// realLength = newArray.length;
// console.log(realLength);
// let maxLength = 3;
// return newArray.slice(0, maxLength);
// newNewArray = newArray.slice(0, maxLength);
// console.log(newNewArray)
//-------------------РЕШЕНИЕ-------------------//
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const allArray = firstArray.concat(secondArray);  
//    return allArray.slice(0, maxLength); 
//     // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// --------------------------Решение защитано!!!!!!--------------------//

// --------------------JS V2 block-2 ЗАДАЧА 13/32-------------------------//
// Термин slug - это человеко-понятный уникальный идентификатор,
//который используется в веб - разработке для создания читабельных URL - адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx,
//можно сделать slug из названия статьи.В результате адрес получится более приятным для восприятия:
//mysite.com / posts / arrays -for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи,
//параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире//

//-------------------РЕШЕНИЕ-------------------//
// let title = "Arrays for begginers";
// console.log(title);
// preSlugArray = title.toLowerCase().split(" ");
// console.log(preSlugArray);
// slug = `${preSlugArray.join("-")}`;
// console.log(slug);

// function slugify(title) {
//   // Change code below this line
  
//   preSlugArray = title.toLowerCase().split(" ");
//   slug = `${preSlugArray.join("-")}`;
//   return slug;

//   // Change code above this line
// }
// --------------------------Решение защитано!!!!!!--------------------//


// ------------JS V2 block-2 ЗАДАЧА 11/32---------------
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
//  в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message)
// и цену гравировки одного слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// количество слов можно посчитать косвенно через количиство пробелов, оно на одно больше чем количество пробелов.
// поэтому
// 1. нужно разбить фразу на одельные символы
// 2. запустить цикл перебора элементов массива, и при встрече с символом пробела, присваивать счетчику +1, а счетчик начинается с 1
// 3. умножить цену на счетчик и вывести результат

//-------------------РЕШЕНИЕ-------------------//

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   console.log(message);
//   let amount = 1;
//   let sumGrav =0;
//   newArray = message.split("");
//   // console.log(message.split(""));
  
//   for (let i = 0; i < newArray.length; i += 1) {
//     if (newArray[i].includes(" ") === true) {
//       amount += 1;
//     }
//     // console.log(amount);
//   }
//   // console.log(amount);
//   // console.log(pricePerWord);
//   sumGrav = amount * pricePerWord;
//   console.log(sumGrav);
//   return sumGrav
//   // consol.log(sumGrav);
//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 20)
// --------------------------Решение защитано!!!!!!--------------------//

// function getExtremeElements(array) {
//   // Change code below this line
//     const newArr=[];
//     newArr[0]=array[0];
//     newArr[1]=array[array.length-1];
//     console.log(newArr)
//   // Change code above this line
// }
// // getExtremeElements([1, 2, 3])
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]



