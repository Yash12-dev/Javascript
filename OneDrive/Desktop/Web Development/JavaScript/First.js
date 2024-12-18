// for (let count = 1; count<= 5; count++) {
//     console.log("Apna College");
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum =", sum);


// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// } while (i <=5);

// let typepog = "Javascript";
// let size = 0;

// for (let i of typepog) {
//     console.log ("i=",i);
//     size++;
// }

// console.log("string size = ",size);

// for in loop

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for (let i in student) {
//     console.log ("i = ", i, " ; value = ", student[i])
// }

// question: all number  from 0 to 100

// for (let num = 0; num <= 100; num++) {
//     if (num%2 !== 0)
//     console.log ("num",num)
// }

// create a game where the user guesses the right number

// let num = 45;
// let guessnumber = prompt("Guess the right number");

// do { 
//     if (guessnumber !=  num)
//     console.log ("Sorry, you have guessed a wrong number");

//     else console.log ("Congratulations you have guessed the right number!"); 
// }

// while (num >= 1000)


// let str = "Apna College";
// let str2 = 'Apna College';

// let product = {
//     name : "Fan",
//     price : 32,
//     features : "black sleek blades made to comfort you during hot summers",
//     promotion : "30%", 
// }

// // console.log (product)

// // console.log(str.length);
// // console.log(str2[3])

// let output = `the cost of ${product.name} is ${product.price} rupees`;
// console.log (output);

// console.log ("the cost of", product.name, "is", product.price, "Rs");

// console.log ("Apna\tCollege")
// let a = "ApnaCollege";
// let b = a.toLowerCase ();
// console.log (b);

// let c = "    Apna College   ";
// let d = c.trim();
// console.log (d);
// console.log (c.slice(5));

// console.log ("iam learning coding from".concat (c.concat(a)));

// let str = "hello";

// console.log (str.replace ('ll','op'));


// let username = "@";

// let Username = prompt ("Please enter the user name");

// console.log (username + Username + Username.length);

// Loops: Basic Loops
// 1. Write a for loop that prints the numbers from 1 to 10.

// for (let number = 1; number <= 10; number++) {
//     console.log (number)
// } 

// // Write a while loop to print the numbers from 10 to 1.

// let printingnumber = 10;
// while (printingnumber >= 1) {
//     console.log ("printingnumber",printingnumber);
//     printingnumber--
// }


// Write a do-while loop to print the numbers from 1 to 5.

let i = 1;

do {
    console.log ("The value of i,", i); i++
}
while (i<=5)

// Write a program that prints all the characters of a string one by one using a for loop.

let input = "hello";

for (let i of input) {
    console.log (i)
};

// reate a program to count the number of vowels (a, e, i, o, u) in a given string.

let text = "javascript";
let vowelCount = 0;

// Convert the string to lowercase to handle case insensitivity
let lowerCaseInput = text.toLowerCase();

// Loop through each character in the string
for (let i = 0; i < lowerCaseInput.length; i++) {
  let char = lowerCaseInput[i];
  // Check if the character is a vowel
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    vowelCount++; // Increment the count if it's a vowel
  }
}

console.log(vowelCount); // Output: 3




// Write a program that reverses a string using a for loop.

let defaultInputText = "world";
let reversedText = "";

// Loop through the string from the end to the start
for (let text = defaultInputText.length - 1; text >= 0; text--) { 
    reversedText += defaultInputText[text]; // Add each character in reverse order
 }

console.log(reversedText); // Output: "dlrow"

// Build a program that checks if a string is a palindrome (reads the same forwards and backwards) using a loop.

let program1 = "racecar";
let program1b = "";

for (let program1a = program1.length - 1; program1a >= 0; program1a --) {
    program1b += program1[program1a];
};

if (program1b === program1) {
    console.log ("true")
}
//printing condition 2 of above question
let program2 = "hello";
let program2b = "";

for (let program2a = program2.length - 1; program2a >= 0; program2a --) {
    program2b += program2[program2a];
};

if (program2b === program2) {
    console.log ("true");
}
else {
    console.log ("false")
}


// Write a program to count how many times a specific letter appears in a string.

// here 1 variable

let letter1 = "banana";
let finaloutput = 0;

for (let letter2 = 0; letter2 < letter1.length ; letter2++) {
        let letter3 = letter1[letter2];
if (letter3 === 'a') {
    finaloutput++;
}

console.log (finaloutput)
}

// Write a program to capitalize the first letter of each word in a string.

let stringtext = "javascript\t";
let stringtext2 = "is\t";
let stringtext3 = "fun";


console.log (stringtext.replace ("j","J") +
stringtext2.replace ("is","Is") +
stringtext3.replace ("fun", "Fun") );

// Using a while loop, write a program that removes all the spaces from a string.

let stringspace = "remove";
let stringspace2 = " all ";
let stringspace3 = " spaces ";

console.log (stringspace + stringspace2.trim() + stringspace3.trim());

// Write a program that prints every second character of a string.

let stringremovechar = 'javascript';

console.log (stringremovechar.replace('javascript',"jvsrcp"));

// Create a program that calculates the number of uppercase and lowercase letters in a string.

let stringmainvariable = "JaVaScRiPt";
let stringuppercase = 0;
let stringlowercase = 0;



for (let stringuppercaseiterator = 0; stringuppercaseiterator <= stringmainvariable.length; stringuppercaseiterator++) {
    let stringuppercasenewvariable = stringmainvariable[stringuppercaseiterator];
   if (stringuppercasenewvariable === 'J'||stringuppercasenewvariable ==='A' || stringuppercasenewvariable === "V" || stringuppercasenewvariable ==='A' || stringuppercasenewvariable=== 'S' || stringuppercasenewvariable==='C'|| stringuppercasenewvariable==='R' || stringuppercasenewvariable==='I'|| stringuppercasenewvariable==='P'|| stringuppercasenewvariable==='T') {
    stringuppercase++;
   }
};

console.log (stringuppercase);



for (let stringlowercaseiterator = 0; stringlowercaseiterator <= stringmainvariable.length; stringlowercaseiterator++) {
    let stringlowercasenewvariable = stringmainvariable[stringlowercaseiterator];
   if (stringlowercasenewvariable === 'J'||stringlowercasenewvariable ==='A' || stringlowercasenewvariable === "V" || stringlowercasenewvariable ==='A' || stringlowercasenewvariable=== 'S' || stringlowercasenewvariable==='C'|| stringlowercasenewvariable==='R' || stringlowercasenewvariable==='I'|| stringlowercasenewvariable==='P'|| stringlowercasenewvariable==='T') {
    stringlowercase++;
   }
};

console.log (stringlowercase);


// Write a program that repeats each character in a string twice.

let individualinput = "f";
let individualinput2 = "u";
let individualinput3 = 'n'; 

let individualoutput = individualinput.replace ('f','ff');
let individualoutput2 = individualinput2.replace ('u','uu');
let individualoutput3 = individualinput3.replace ('n','nn');

console.log (individualoutput + individualoutput2 + individualoutput3);
